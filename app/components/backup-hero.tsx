"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ==================== CAMERA ANIMATOR COMPONENT ====================
function AnimatedCamera({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    // ================= CAMERA SCROLL ANIMATION =================
    // Zoom out effect (Z-axis)
    const targetZ = THREE.MathUtils.lerp(8, 25, scrollProgress);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1);

    // ================= CAMERA Y SCROLL ANIMATION =================
    // Move camera Y from -15 → -2 as user scrolls
    const targetY = THREE.MathUtils.lerp(-17, 20, scrollProgress);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.1);

    camera.lookAt(0, 0, 0); // Always look at center
  });

  return null;
}


// ==================== 3D MODEL COMPONENT ====================
function Model({ scrollProgress }: { scrollProgress: number }) {
    const modelRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/home/hero.glb");

    useFrame(() => {
        if (modelRef.current) {
            // ================= MODEL ANIMATION (OPTIONAL) =================
            // Here you can add subtle scroll-based rotation or movement if needed
            // Example: rotate model as user scrolls
            // modelRef.current.rotation.y = scrollProgress * Math.PI * 4;
            <primitive
                ref={modelRef}
                object={scene}
                position={[20, -10, 0]}
            />
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            // ================= MODEL SCALING =================
            // The model is initially scaled to 12x12x12
            // Can be modified based on scrollProgress for zoom-in/out effect
            scale={[12, 12, 12]}

            // ================= MODEL POSITION =================
            // Positioned slightly below center (Y = -20) to fit nicely in camera view
            position={[0, -17, 0]}
        />
    );
}

export default function HeroSection() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null); // Reference to hero section

    useEffect(() => {
        // Preload the GLB model to avoid loading delay
        useGLTF.preload("/home/hero.glb");

        const handleScroll = () => {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();
            const heroHeight = window.innerHeight * 2;
            const scrolledIntoView = Math.max(0, window.innerHeight - rect.top);
            const progress = Math.min(scrolledIntoView / heroHeight, 1);

            // ================= SCROLL PROGRESS =================
            // scrollProgress = 0 → top of hero, scrollProgress = 1 → scrolled past hero
            setScrollProgress(progress);
        };

        // ================= THROTTLED SCROLL HANDLER =================
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
        handleScroll(); // Initial call to set progress on load

        return () => window.removeEventListener("scroll", throttledScroll);
    }, []);

    return (
        <div className="relative w-full">
            {/* ================= HERO SECTION ================= */}
            <div
                ref={heroRef}
                className="sticky top-0 w-full h-screen overflow-hidden"
            >
                <Canvas
                    camera={{ fov: 45 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]}
                >
                    {/* ================= CAMERA ANIMATION ================= */}
                    <AnimatedCamera scrollProgress={scrollProgress} />

                    {/* ================= LIGHTING ================= */}
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[0, 5, 10]} intensity={1} />
                    <directionalLight position={[10, 0, -5]} intensity={0.5} />
                    <directionalLight position={[-10, 10, 10]} intensity={0.8} />

                    {/* ================= ENVIRONMENT ================= */}
                    <group rotation={[0.698, Math.PI, 0.698]}>
                        <Environment preset="studio" background={false} />
                    </group>

                    {/* ================= 3D MODEL ================= */}
                    <Model scrollProgress={scrollProgress} />
                    {/* Note: Currently model scale is fixed, scroll-based zoom handled via camera Z */}
                </Canvas>
            </div>
        </div>
    );
}
