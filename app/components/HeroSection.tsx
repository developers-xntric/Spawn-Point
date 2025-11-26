"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ==================== 3D MODEL COMPONENT ====================
// This component loads and displays your GLB 3D model
function Model({ scrollProgress }: { scrollProgress: number }) {
    const modelRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/home/hero.glb"); // Path to your GLB file in public folder

    // ========== SCROLL-BASED ROTATION ANIMATION ==========
    // Animate rotation based on scroll progress (0 to 1)
    useFrame(() => {
        if (modelRef.current) {
            // Y-axis rotation (horizontal spin): Increase multiplier for faster rotation
            // Example: scrollProgress * Math.PI * 4 = 2 full rotations
            modelRef.current.rotation.y = scrollProgress * Math.PI * 20; // Full 360° rotation

            // X-axis rotation (vertical tilt): Creates up/down tilting effect
            modelRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.9; // ±17° tilt

            // Z-axis rotation (roll): Creates slight rolling effect
            modelRef.current.rotation.z = Math.cos(scrollProgress * Math.PI) * 0.02; // ±6° roll
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            // ========== MODEL SCALE ==========
            // Adjust size: [X, Y, Z] - Use same values for uniform scaling
            // Larger values = bigger model, smaller values = smaller model
            // Example: [2, 2, 2] = double size, [0.5, 0.5, 0.5] = half size
            scale={[4, 4, 4]}

            // ========== MODEL POSITION ==========
            // Position in 3D space: [X, Y, Z]
            // X: Left (-) to Right (+)
            // Y: Down (-) to Up (+)
            // Z: Away (-) to Closer (+)
            // Example: [0, -1, 0] moves model down, [2, 0, 0] moves model right
            position={[0, -6.5, 0]} // Centered position
        />
    );
}

// Fallback placeholder if GLB doesn't load
function PlaceholderModel({ scrollProgress }: { scrollProgress: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y = scrollProgress * Math.PI * 2;
            meshRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.3;
        }
    });

    return (
        <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial
                color="#BBFC00"
                metalness={0.8}
                roughness={0.2}
                emissive="#BBFC00"
                emissiveIntensity={0}
            />
        </mesh>
    );
}

export default function HeroSection() {
    const [scrollProgress, setScrollProgress] = useState(0);
    // const [modelLoaded, setModelLoaded] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Preload the GLB model
        useGLTF.preload("/home/hero.glb");

        const handleScroll = () => {
            if (!heroRef.current) return;

            const heroHeight = window.innerHeight * 2; // 2x viewport height for scroll range
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / heroHeight, 1); // Clamp between 0 and 1

            setScrollProgress(progress);
        };

        // Throttle scroll events for performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", throttledScroll);
    }, []);

    return (
        <>
            {/* Hero Section - Pinned */}
            <div
                ref={heroRef}
                className="relative w-full h-screen overflow-hidden"
                style={{
                    position: scrollProgress < 1 ? "sticky" : "relative",
                    top: 0,
                }}
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#031347] via-[#051a5c] to-[#0a2472] -z-10" />

                {/* 3D Canvas */}
                <Canvas
                    className="w-full h-full"
                    gl={{ antialias: true, alpha: true }}
                    scene={{ environmentIntensity: 0.2 }}
                    dpr={[10, 2]} // Responsive pixel ratio
                >
                    {/* ========== CAMERA SETTINGS ========== */}
                    {/* Camera position: [X, Y, Z] */}
                    {/* X: Left (-) to Right (+) */}
                    {/* Y: Down (-) to Up (+) */}
                    {/* Z: Distance from model (higher = further away) */}
                    {/* FOV: Field of view (35-75 typical, lower = more zoomed in) */}
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 3, 8]} // Moved camera back for better view
                        fov={45} // Field of view - adjust for zoom level
                    />

                    {/* ========== LIGHTING SETUP ========== */}
                    {/* Ambient light: Overall scene brightness */}
                    <ambientLight intensity={0.3} />                 {/* Base soft light */}
                    <directionalLight position={[0, 5, 10]} intensity={1} />
                    <directionalLight position={[10, 0, -5]} intensity={0.5} />

                    <directionalLight position={[-10, 10, 10]} intensity={0.8} />
                    <directionalLight position={[0, -10, -10]} intensity={0.5} />

                    {/* Rect area light for soft even illumination */}
                    {/* <rectAreaLight
                        position={[0, 5, 5]}
                        width={20}
                        height={20}
                        intensity={1.2}
                        color={"#ffffff"}
                        lookAt={[0, 0, 0]}
                    /> */}

                    {/* Environment for reflections */}
                    <group rotation={[0.698, Math.PI, 0.698]}>
                        <Environment preset="studio" background={false} />
                    </group>


                    {/* Point light: Accent light with brand color */}
                    
                    {/* <pointLight position={[0, 0, 0]} intensity={0.8} color="#fc0047ff" /> */}

                    {/* ========== 3D MODEL ========== */}
                    <Model scrollProgress={scrollProgress} />

                    {/* ========== ORBIT CONTROLS (USER INTERACTION) ========== */}
                    {/* Allows users to manually rotate, zoom, and pan the model */}
                    {/* enableZoom: Mouse wheel to zoom in/out */}
                    {/* enablePan: Right-click drag to move camera */}
                    {/* enableRotate: Left-click drag to rotate view */}
                    {/* Set to false to disable user interaction and use only scroll animation */}
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                    />
                </Canvas>



            </div>

        </>
    );
}
