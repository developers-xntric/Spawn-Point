"use client"

import { useEffect, useRef } from "react"

export default function MoveableBalls() {
  const sceneRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sceneRef.current) return

    // Dynamically import Matter.js
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js'
    script.async = true

    script.onload = () => {
      // @ts-ignore
      const Matter = window.Matter

      sceneRef.current!.innerHTML = ""

      const containerWidth = sceneRef.current!.clientWidth
      const containerHeight = sceneRef.current!.clientHeight

      // Engine & world
      const engine = Matter.Engine.create()
      const world = engine.world

      // Render
      const render = Matter.Render.create({
        engine,
        element: sceneRef.current!,
        options: {
          width: containerWidth,
          height: containerHeight,
          wireframes: false,
          background: "transparent",
        },
      })

      // Canvas styling - removed pointer-events to allow scrolling
      if (render.canvas) {
        render.canvas.style.position = "absolute"
        render.canvas.style.top = "0"
        render.canvas.style.left = "0"
        render.canvas.style.width = "100%"
        render.canvas.style.height = "100%"
        render.canvas.style.display = "block"
        render.canvas.style.zIndex = "50"
        render.canvas.style.touchAction = "auto" // Allow touch scrolling
      }

      Matter.Render.run(render)
      const runner = Matter.Runner.create()
      Matter.Runner.run(runner, engine)

      // Walls (static)
      const thickness = 60

      const top = Matter.Bodies.rectangle(containerWidth / 2, -thickness / 2, containerWidth, thickness, {
        isStatic: true,
        render: { visible: false }
      })
      const bottom = Matter.Bodies.rectangle(
        containerWidth / 2,
        containerHeight + thickness / 2,
        containerWidth,
        thickness,
        { isStatic: true, render: { visible: false } }
      )
      const left = Matter.Bodies.rectangle(-thickness / 2, containerHeight / 2, thickness, containerHeight, {
        isStatic: true,
        render: { visible: false }
      })
      const right = Matter.Bodies.rectangle(
        containerWidth + thickness / 2,
        containerHeight / 2,
        thickness,
        containerHeight,
        { isStatic: true, render: { visible: false } }
      )

      Matter.World.add(world, [top, bottom, left, right])

      // Image URLs array - replace with your own images
      const imageUrls = [
        "/moving-icons/1.png",
        "/moving-icons/3.png",
        "/moving-icons/4.png",
        "/moving-icons/5.png",
        "/moving-icons/6.png",
        "/moving-icons/8.png",
        "/moving-icons/9.png",
        "/moving-icons/10.png",
        "/moving-icons/11.png",
        "/moving-icons/12.png",
        "/moving-icons/13.png",
        "/moving-icons/14.png",
        "/moving-icons/15.png",
        "/moving-icons/16.png",
        "/moving-icons/17.png",
        "/moving-icons/18.png",
        "/moving-icons/19.png",
        "/moving-icons/20.png",
        "/moving-icons/21.png",
        "/moving-icons/1.png",
        "/moving-icons/4.png",
        "/moving-icons/22.png",

      ]

      // Add initial stack with images
      const stack = Matter.Composites.stack(80, 40, 8, 4, 20, 20, (x: number, y: number) => {
        const r = Math.random()
        const imgUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)]

        if (r < 0.5) {
          return Matter.Bodies.rectangle(x, y, 60, 60, {
            chamfer: { radius: 8 },
            render: {
              sprite: {
                texture: imgUrl,
                xScale: 0.6,
                yScale: 0.6
              }
            }
          })
        } else {
          const sides = Math.round(Matter.Common.random(3, 8))
          return Matter.Bodies.polygon(x, y, sides, 30, {
            chamfer: { radius: 6 },
            render: {
              sprite: {
                texture: imgUrl,
                xScale: 0.6,
                yScale: 0.6
              }
            }
          })
        }
      })
      Matter.World.add(world, stack)

      // Drop balls with images
      function dropBall() {
        const x = Math.random() * containerWidth
        const radius = 30 + Math.random() * 20
        const imgUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)]

        const ball = Matter.Bodies.circle(x, -50, radius, {
          restitution: 0.7,
          render: {
            sprite: {
              texture: imgUrl,
              xScale: (radius * 2) / 100,
              yScale: (radius * 2) / 100
            }
          }
        })
        Matter.World.add(world, ball)
      }

      const interval = window.setInterval(dropBall, 800)

      // Mouse control (drag)
      const mouse = Matter.Mouse.create(render.canvas)

      // Allow scrolling
      const mouseAny = mouse as any
      mouse.element.removeEventListener("mousewheel", mouseAny.mousewheel)
      mouse.element.removeEventListener("DOMMouseScroll", mouseAny.mousewheel)

      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } }
      })
      Matter.World.add(world, mouseConstraint)
      render.mouse = mouse

      // Resize handler
      const onResize = () => {
        if (!sceneRef.current) return

        const W = sceneRef.current.clientWidth
        const H = sceneRef.current.clientHeight

        render.bounds.max.x = W
        render.bounds.max.y = H
        render.options.width = W
        render.options.height = H
        render.canvas.width = W
        render.canvas.height = H

        Matter.Body.setPosition(bottom, { x: W / 2, y: H + thickness / 2 })
        Matter.Body.setPosition(top, { x: W / 2, y: -thickness / 2 })
        Matter.Body.setPosition(left, { x: -thickness / 2, y: H / 2 })
        Matter.Body.setPosition(right, { x: W + thickness / 2, y: H / 2 })
      }

      const resizeObserver = new ResizeObserver(() => {
        onResize()
      })
      resizeObserver.observe(sceneRef.current!)

      // Cleanup
      const cleanup = () => {
        window.clearInterval(interval)
        resizeObserver.disconnect()
        Matter.Render.stop(render)
        Matter.Runner.stop(runner)
        Matter.World.clear(world, false)
        Matter.Engine.clear(engine)
        if (render.canvas && render.canvas.parentNode) {
          render.canvas.parentNode.removeChild(render.canvas)
        }
      }

        // Store cleanup function
        ; (window as any).__matterCleanup = cleanup
    }

    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      if ((window as any).__matterCleanup) {
        ; (window as any).__matterCleanup()
        delete (window as any).__matterCleanup
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      ref={sceneRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    />
  )
}