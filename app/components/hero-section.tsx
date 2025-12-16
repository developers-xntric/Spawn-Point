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
// BREAKPOINT HOOK (detect mobile / tablet / desktop)
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
// CAMERA ANIMATION BASED ON SCROLL
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
    // --------------------
    // DEFAULT CAMERA VALUES (DESKTOP)
    // --------------------
    let targetY = 10
    let targetZ = 80

    // --------------------
    // RESPONSIVE OVERRIDES
    // --------------------
    if (isMobile) {
      targetY = 5
      targetZ = 35
    } else if (isTablet) {
      targetY = 10
      targetZ = 55
    }

    // --------------------
    // SCROLL-BASED CAMERA MOVE
    // --------------------
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

    // --------------------
    // SMOOTH CAMERA MOVEMENT
    // --------------------
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08)

    // Always look at center
    camera.lookAt(0, 0, 0)
  })

  return null
}

// =====================================================
// 3D MODEL (UNLIT + COLOR PRESERVED)
// =====================================================
function Model({
  isMobile,
  isTablet,
}: {
  isMobile: boolean
  isTablet: boolean
}) {
  const modelRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/home/hero.glb")

  // --------------------
  // FORCE UNLIT MATERIALS
  // --------------------
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = new THREE.MeshStandardMaterial({
          map: child.material.map || null,
          color: child.material.color,          // keep original color
          emissive: child.material.color,       // locks color
          emissiveIntensity: 0,                // prevents washout
          roughness: 0.6,                        // matte look
          metalness: 0,                        // no metallic shift
          envMapIntensity: 2,                 // HDR influence (LOW)
        })
      }
    })

  }, [scene])

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={
        isMobile
          ? [8, 28, 8]
          : isTablet
            ? [45, 45, 45]
            : [60, 60, 60] // DESKTOP SCALE
      }
      position={[
        0,
        isMobile ? -45 : isTablet ? -70 : -100, // RESPONSIVE POSITION
        0,
      ]}
    />
  )
}

// =====================================================
// HERO SECTION (MAIN)
// =====================================================
export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAutoScrolled = useRef(false)
  const { isMobile, isTablet } = useBreakpoint()

  // --------------------
  // SCROLLTRIGGER SETUP
  // --------------------
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

        if (p < 0.2) hasAutoScrolled.current = false

        // Auto-scroll to next section (DESKTOP ONLY)
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
        // --------------------
        // CAMERA SETUP
        // --------------------
        camera={{
          position: isMobile ? [0, -5, 25] : [0, -20, 8],
          fov: isMobile ? 55 : 45,
        }}

        // --------------------
        // COLOR MANAGEMENT (CRITICAL)
        // --------------------
        gl={{
          antialias: true,
          alpha: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.NoToneMapping, // PREVENT COLOR WASHOUT
        }}

        dpr={[1, 2]}
      >
        {/* Camera animation */}
        <AnimatedCamera
          scrollProgress={scrollProgress}
          isMobile={isMobile}
          isTablet={isTablet}
        />

        {/* For Now Light OFF becuase of coloring */}


        <directionalLight position={[0, 5, 10]} intensity={0.2} />
        <directionalLight position={[10, 0, -5]} intensity={0.2} />
        <directionalLight position={[-10, 10, 10]} intensity={0.2} />

        {/* 
          ENVIRONMENT (OPTIONAL)
          - Does NOT affect unlit materials
          - Safe to keep for subtle depth
        */}

        <Environment files="/my.hdr" preset="studio" environmentIntensity={0.9} />

        {/* 3D Model */}
        <Model isMobile={isMobile} isTablet={isTablet} />

        {/* Background color */}
      </Canvas>
    </div>
  )
}
