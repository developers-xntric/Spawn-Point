"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// ==================== CAMERA ANIMATOR COMPONENT ====================
function AnimatedCamera({ scrollProgress }: { scrollProgress: number }) {
    const { camera } = useThree()

    useFrame(() => {
        // ================= STAGE 1: CAMERA Y MOVEMENT (0 - 0.33) =================
        let targetY = 10
        let targetZ = 80

        if (scrollProgress < 0.33) {
            // Stage 1: Y movement
            //   targetY = THREE.MathUtils.lerp(70, 50, scrollProgress / 0.33)
            //   targetZ = THREE.MathUtils.lerp(50, 30, scrollProgress / 0.33)
        } else if (scrollProgress < 0.66) {
            // Stage 2: Zoom in (Z movement)
            //   targetY = -4
            targetY = THREE.MathUtils.lerp(40, -10, (scrollProgress - 0.33) / 0.33)
            targetZ = THREE.MathUtils.lerp(50, 0, (scrollProgress - 0.33) / 0.33)
        } else {
            // Stage 3: Final position
            targetY = 10
            targetZ = THREE.MathUtils.lerp(-100, -10, (scrollProgress - 0.33) / 0.33)
        }

        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08)
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08)

        camera.lookAt(0, 0, 0)
    })

    return null
}

// ==================== 3D MODEL COMPONENT ====================
function Model() {
    const modelRef = useRef<THREE.Group>(null)
    const { scene } = useGLTF("/home/hero.glb")

    // No rotation applied
    useFrame(() => {
        if (modelRef.current) {
            // Model stays static
        }
    })

    return <primitive ref={modelRef} object={scene} scale={[60, 60, 60]} position={[0, -100, 0]} />
}

// ==================== HERO SECTION ====================
export default function HeroSection() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        useGLTF.preload("/home/hero.glb")

        if (!containerRef.current) return

        const scrollTrigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            onUpdate: (self) => {
                setScrollProgress(self.progress)
            },
            markers: true,
        })

        return () => {
            scrollTrigger.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <>
            <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
                <Canvas camera={{ position: [0, -20, 8], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                    <AnimatedCamera scrollProgress={scrollProgress} />

                    {/* Lighting */}
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[0, 5, 10]} intensity={1} />
                    <directionalLight position={[10, 0, -5]} intensity={0.5} />
                    <directionalLight position={[-10, 10, 10]} intensity={0.8} />

                    {/* Environment */}
                    <group rotation={[0.698, Math.PI, 0.698]}>
                        <Environment preset="studio" background={false} />
                    </group>

                    {/* 3D Model */}
                    <Model />
                </Canvas>
            </div>

        </>
    )
}
