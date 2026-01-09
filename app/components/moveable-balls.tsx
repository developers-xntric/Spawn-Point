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
        "/moving-icons/3.png",
        "/moving-icons/1.png",
        "/moving-icons/new-text-4.png",
        "/moving-icons/4.png",
        "/moving-icons/new-text-3.png",
        "/moving-icons/5.png",
        "/moving-icons/6.png",
        "/moving-icons/new-text-8.png",
        "/moving-icons/12.png",
        "/moving-icons/new-text-6.png",
        "/moving-icons/new-text-9.png",
        "/moving-icons/new-text-2.png",
        "/moving-icons/8.png",
        "/moving-icons/9.png",
        "/moving-icons/new-text-10.png",
        "/moving-icons/new-text-7.png",
        "/moving-icons/8.png",
        "/moving-icons/10.png",
        "/moving-icons/new-text.png",
        "/moving-icons/11.png",
        "/moving-icons/12.png",
        "/moving-icons/3.png",
        "/moving-icons/13.png",
        // "/moving-icons/new-text-scale.png",


      ]

      let imageIndex = 0;


      // Helper to dynamically scale sprite to fit body preserving aspect ratio
      const setSpriteScale = (body: any, targetSize: number) => {
        const img = new Image()
        img.src = body.render.sprite.texture
        img.onload = () => {
          const maxDimension = Math.max(img.width, img.height)
          const scale = targetSize / maxDimension
          body.render.sprite.xScale = scale
          body.render.sprite.yScale = scale
        }
      }

      // Add initial stack with images
      const stack = Matter.Composites.stack(80, 40, 8, 4, 20, 20, (x: number, y: number) => {
        const r = Math.random()
        const imgUrl = imageUrls[imageIndex % imageUrls.length]
        imageIndex++;
        const isText = imgUrl.includes("text");
        let body;

        if (isText) {
          // CHANGE SIZE HERE (TEXT): Width (180), Height (70)
          // Tighter rectangle for text to reduce gaps
          const isMobile = window.innerWidth < 768;
          const mobileScale = isMobile ? 0.5 : 1;

          const width = 180 * mobileScale;
          const height = 70 * mobileScale;

          body = Matter.Bodies.rectangle(x, y, width, height, {
            chamfer: { radius: 8 },
            render: {
              sprite: {
                texture: imgUrl,
                xScale: 1,
                yScale: 1
              }
            }
          })
          setSpriteScale(body, width) // Scale to match width
        } else if (r < 0.5) {
          // CHANGE SIZE HERE (SQUARE): width (80), height (80)
          const isMobile = window.innerWidth < 768;
          const mobileScale = isMobile ? 0.5 : 1;

          const size = 80 * mobileScale;
          body = Matter.Bodies.rectangle(x, y, size, size, {
            chamfer: { radius: 8 },
            render: {
              sprite: {
                texture: imgUrl,
                xScale: 1, // Init with 1, will be auto-scaled
                yScale: 1
              }
            }
          })
          setSpriteScale(body, size)
        } else {
          const sides = Math.round(Matter.Common.random(3, 8))
          // CHANGE SIZE HERE (POLYGON): radius (40)
          const isMobile = window.innerWidth < 768;
          const mobileScale = isMobile ? 0.5 : 1;
          const radius = 40 * mobileScale;
          body = Matter.Bodies.polygon(x, y, sides, radius, {
            chamfer: { radius: 6 },
            render: {
              sprite: {
                texture: imgUrl,
                xScale: 1, // Init with 1
                yScale: 1
              }
            }
          })
          setSpriteScale(body, radius * 2)
        }
        return body
      })
      Matter.World.add(world, stack)

      // Drop balls with images
      function dropBall() {
        const x = Math.random() * containerWidth
        const imgUrl = imageUrls[imageIndex % imageUrls.length]
        imageIndex++;

        const isText = imgUrl.includes("text");

        // CHANGE SIZE HERE: size calculation
        const isMobile = window.innerWidth < 768;
        const mobileScale = isMobile ? 0.5 : 1;

        let ball;

        if (isText) {
          // TEXT: Rectangular body
          const width = 180 * mobileScale;
          const height = 70 * mobileScale;

          ball = Matter.Bodies.rectangle(x, -50, width, height, {
            restitution: 0.7,
            render: {
              sprite: {
                texture: imgUrl,
                xScale: 1,
                yScale: 1
              }
            }
          })
          setSpriteScale(ball, width)
        } else {
          // Icon: Circular body
          // radius 20-50
          let radius = (20 + Math.random() * 30) * mobileScale;

          ball = Matter.Bodies.circle(x, -50, radius, {
            restitution: 0.7,
            render: {
              sprite: {
                texture: imgUrl,
                xScale: 1,
                yScale: 1
              }
            }
          })
          setSpriteScale(ball, radius * 2)
        }

        Matter.World.add(world, ball)
      }


      const interval = window.setInterval(dropBall, 200)

      // Mouse control (hover repulsion)
      const mouse = Matter.Mouse.create(render.canvas)

      // Allow scrolling
      const mouseAny = mouse as any
      mouse.element.removeEventListener("mousewheel", mouseAny.mousewheel)
      mouse.element.removeEventListener("DOMMouseScroll", mouseAny.mousewheel)

      // Removed MouseConstraint to disable dragging
      render.mouse = mouse

      // Add Repulsion effect on mouse move
      Matter.Events.on(engine, "beforeUpdate", () => {
        const mousePosition = mouse.position
        Matter.Composite.allBodies(world).forEach((body: any) => {
          if (body.isStatic) return // Don't repel walls

          // Check if body is roughly on screen (optimization)
          if (body.position.y > containerHeight + 100 || body.position.y < -100) return

          // Fix TS error: calculate distance manually if dist is missing
          const diff = Matter.Vector.sub(body.position, mousePosition)
          const d = Matter.Vector.magnitude(diff)
          const repulsionRange = 175 // Increased range slightly

          if (d < repulsionRange) {
            // Calculate vector away from mouse
            const normal = Matter.Vector.normalise(diff)

            // Force depending on distance (closer = stronger)
            // Scale by body.mass so large items move just as easily as small ones
            const forceMagnitude = (repulsionRange - d) * 0.0003 * body.mass
            const force = Matter.Vector.mult(normal, forceMagnitude)

            Matter.Body.applyForce(body, body.position, force)
          }
        })
      })

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