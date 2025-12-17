"use client"

// ==================== R3F & THREE IMPORTS ====================
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

// ==================== GSAP SCROLL ====================
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// =====================================================
// BREAKPOINT HOOK
// =====================================================
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

// =====================================================
// CAMERA ANIMATION (FIXED)
// =====================================================
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
    let targetY = isMobile ? 10 : isTablet ? 10 : 0
    let targetZ = isMobile ? 35 : isTablet ? 55 : 80

    // -----------------------
    // MID SCROLL (0.33 → 0.66)
    // -----------------------
    if (scrollProgress >= 0.33 && scrollProgress < 0.66) {
      const t = (scrollProgress - 0.33) / 0.33

      targetY = THREE.MathUtils.lerp(
        isMobile ? 15 : isTablet ? 20 : 10,
        isMobile ? 10 : -4,
        t
      )

      targetZ = THREE.MathUtils.lerp(
        isMobile ? 50 : isTablet ? 70 : 50,
        isMobile ? 8 : 10,
        t
      )

      // Look slightly upward during zoom
      if (!isMobile) {
        camera.lookAt(0, 8, 0)
      }

    }

    // -----------------------
    // AFTER ZOOM (LOCK CAMERA)
    // -----------------------
    else if (scrollProgress >= 0.66) {
      // 🔒 Lock camera — NO MORE Y / Z movement
      targetY = isMobile ? 19 : isTablet ? 10 : 10
      targetZ = isMobile ? 45 : isTablet ? 55 : 80

      // 🔒 Fix look direction (prevents Y-rotation illusion)
      camera.lookAt(0, 0, 0)
    }

    // -----------------------
    // INITIAL
    // -----------------------
    else {
      camera.lookAt(0, 0, 0)
    }

    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08)
  })

  return null
}

// =====================================================
// MODEL (UNCHANGED)
// =====================================================
function Model({
  isMobile,
  isTablet,
  scrollProgress,
}: {
  isMobile: boolean
  isTablet: boolean
  scrollProgress: number
}) {
  const modelRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/home/hero.glb")

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = new THREE.MeshStandardMaterial({
          map: child.material.map || null,
          color: child.material.color,
          emissive: child.material.color,
          emissiveIntensity: 0,
          roughness: 0.6,
          metalness: 0,
          envMapIntensity: 2,
        })
      }
    })
  }, [scene])

  useFrame(() => {
    if (!modelRef.current) return

    let targetRotX = 0

    if (scrollProgress >= 0.2 && scrollProgress < 0.6) {
      const t = (scrollProgress - 0.2) / 0.4
      targetRotX = THREE.MathUtils.lerp(0.2, 0, t)
    }

    if (scrollProgress >= 0.6) targetRotX = -0.1

    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      targetRotX,
      0.04
    )
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={
        isMobile
          ? [10, 12, 12]
          : isTablet
            ? [45, 45, 45]
            : [60, 60, 60]
      }
      position={[0, isMobile ? -19 : isTablet ? -70 : -100, 0]}
    />
  )
}

// =====================================================
// HERO SECTION
// =====================================================
export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAutoScrolled = useRef(false)
  const { isMobile, isTablet } = useBreakpoint()

  useEffect(() => {
    useGLTF.preload("/home/hero.glb")
    if (!containerRef.current) return

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      markers: false,
      onUpdate: (self) => {
        const p = self.progress
        setScrollProgress(p)

        if (p < 0.2) hasAutoScrolled.current = false

        // ✅ MOBILE + DESKTOP AUTO SCROLL AFTER ZOOM
        if (p >= 0.66 && !hasAutoScrolled.current) {
          hasAutoScrolled.current = true
          const target = document.getElementById("services-carousel")
          if (target) {
            window.scrollTo({
              top: target.offsetTop,
              behavior: "smooth",
            })
          }
        }
      },
    })

    return () => st.kill()
  }, [isMobile])

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <Canvas
        camera={{
          position: isMobile ? [0, -5, 25] : [0, -20, 8],
          fov: isMobile ? 55 : 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.NoToneMapping,
        }}
        dpr={[1, 2]}
      >
        <AnimatedCamera
          scrollProgress={scrollProgress}
          isMobile={isMobile}
          isTablet={isTablet}
        />

        <directionalLight position={[0, 5, 10]} intensity={0.2} />
        <directionalLight position={[10, 0, -5]} intensity={0.2} />
        <directionalLight position={[-10, 10, 10]} intensity={0.2} />

        <Environment files="/my.hdr" preset="studio" environmentIntensity={0.9} />

        <Model
          isMobile={isMobile}
          isTablet={isTablet}
          scrollProgress={scrollProgress}
        />
      </Canvas>
    </div>
  )
}
