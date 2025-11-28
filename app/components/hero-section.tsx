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
    // Stage 1 + Stage 2 only, "stage 3" just holds the final pose
    let targetY = 10
    let targetZ = 80

    if (scrollProgress < 0.33) {
      // ========== STAGE 1 (no movement, as you had) ==========
      // You can add movement here later if you like
    } else if (scrollProgress < 0.66) {
      // ========== STAGE 2: ZOOM / MOVE ==========
      const t = (scrollProgress - 0.33) / 0.33 // map 0.33–0.66 → 0–1
      targetY = THREE.MathUtils.lerp(60, -11, t)
      targetZ = THREE.MathUtils.lerp(90, 0, t)
    } else {
      // ========== “STAGE 3”: HOLD FINAL STAGE 2 POSITION ==========
      targetY = -11
      targetZ = 0
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

  // Model stays static (same as before)
  useFrame(() => {
    if (modelRef.current) {
      // no rotation / animation
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[60, 60, 60]}
      position={[0, -100, 0]}
    />
  )
}
 
// ==================== HERO SECTION ====================
export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAutoScrolled = useRef(false)

  useEffect(() => {
    useGLTF.preload("/home/hero.glb")

    if (!containerRef.current) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      markers: false,
      onUpdate: (self) => {
        const p = self.progress
        setScrollProgress(p)

        // Reset so auto-scroll can happen again
        if (p < 0.2) {
          hasAutoScrolled.current = false
        }

        // “Stage 3”: when progress >= 0.66, smooth scroll to next section (by id)
        if (p >= 0.66 && !hasAutoScrolled.current) {
          hasAutoScrolled.current = true

          const target = document.getElementById("second-section")
          if (target) {
            const y =
              target.getBoundingClientRect().top + window.scrollY

            window.scrollTo({
              top: y,
              behavior: "smooth",
            })
          }
        }
      },
    })

    return () => {
      scrollTrigger.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <Canvas
          camera={{ position: [0, -20, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
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
