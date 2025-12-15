"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// ==================== BREAKPOINT HOOK ====================
function useBreakpoint() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setIsMobile(w < 640)
      setIsTablet(w >= 640 && w < 1024)
    }

    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return { isMobile, isTablet }
}

// ==================== CAMERA ANIMATOR ====================
function AnimatedCamera({
  scrollProgress,
  isMobile,
  isTablet,
}: {
  scrollProgress: number
  isMobile: boolean
  isTablet: boolean
}) {
  const { camera } = useThree()

  useFrame(() => {
    // Desktop defaults (UNCHANGED)
    let targetY = 10
    let targetZ = 80

    // Responsive overrides
    if (isMobile) {
      targetY = 5
      targetZ = 35
    } else if (isTablet) {
      targetY = 10
      targetZ = 55
    }

    if (scrollProgress >= 0.33 && scrollProgress < 0.66) {
      const t = (scrollProgress - 0.33) / 0.33

      targetY = THREE.MathUtils.lerp(
        isMobile ? 20 : isTablet ? 40 : 60,
        isMobile ? -5 : -11,
        t
      )

      targetZ = THREE.MathUtils.lerp(
        isMobile ? 50 : isTablet ? 70 : 90,
        isMobile ? 10 : 0,
        t
      )
    }

    if (scrollProgress >= 0.66) {
      targetY = isMobile ? -5 : -11
      targetZ = isMobile ? 10 : 0
    }

    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08)
    camera.lookAt(0, 0, 0)
  })

  return null
}

// ==================== 3D MODEL ====================
function Model({
  isMobile,
  isTablet,
}: {
  isMobile: boolean
  isTablet: boolean
}) {
  const modelRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/home/hero.glb")

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={
        isMobile
          ? [8, 28, 8]
          : isTablet
          ? [45, 45, 45]
          : [60, 60, 60] // DESKTOP UNCHANGED
      }
      position={[
        0,
        isMobile ? -45 : isTablet ? -70 : -100, // DESKTOP UNCHANGED
        0,
      ]}
    />
  )
}

// ==================== HERO SECTION ====================
export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAutoScrolled = useRef(false)
  const { isMobile, isTablet } = useBreakpoint()

  useEffect(() => {
    useGLTF.preload("/home/hero.glb")

    if (!containerRef.current) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      pin: true, // 🔑 Disable pin on mobile only
      markers: false,
      onUpdate: (self) => {
        const p = self.progress
        setScrollProgress(p)

        if (p < 0.2) hasAutoScrolled.current = false

        if (p >= 0.66 && !hasAutoScrolled.current && !isMobile) {
          hasAutoScrolled.current = true
          const target = document.getElementById("second-section")
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY,
              behavior: "smooth",
            })
          }
        }
      },
    })

    return () => scrollTrigger.kill()
  }, [isMobile])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <Canvas
        camera={{
          position: isMobile ? [0, -5, 25] : [0, -20, 8], // DESKTOP UNCHANGED
          fov: isMobile ? 55 : 45,
        }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <AnimatedCamera
          scrollProgress={scrollProgress}
          isMobile={isMobile}
          isTablet={isTablet}
        />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 5, 10]} intensity={1} />
        <directionalLight position={[10, 0, -5]} intensity={0.5} />
        <directionalLight position={[-10, 10, 10]} intensity={0.8} />

        {/* Environment */}
        <group rotation={[0.698, Math.PI, 0.698]}>
          <Environment preset="studio" background={false} />
        </group>

        {/* Model */}
        <Model isMobile={isMobile} isTablet={isTablet} />
      </Canvas>
    </div>
  )
}
