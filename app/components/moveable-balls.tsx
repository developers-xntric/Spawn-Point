"use client"

import { useEffect, useRef } from "react"
import Matter from "matter-js"

export default function MoveableBalls() {
  const sceneRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sceneRef.current) return

    // ensure container is empty
    sceneRef.current.innerHTML = ""

    const containerWidth = sceneRef.current.clientWidth
    const containerHeight = sceneRef.current.clientHeight

    // --- Engine & world ---
    const engine = Matter.Engine.create()
    const world = engine.world

    // --- Render ---
    const render = Matter.Render.create({
      engine,
      element: sceneRef.current,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: "transparent",
      },
    })

    // ensure the canvas is absolutely positioned and visible
    if (render.canvas) {
      render.canvas.style.position = "absolute"
      render.canvas.style.top = "0"
      render.canvas.style.left = "0"
      render.canvas.style.width = "100%"
      render.canvas.style.height = "100%"
      render.canvas.style.display = "block"
      render.canvas.style.pointerEvents = "auto"
      render.canvas.style.zIndex = "9999"
    }

    Matter.Render.run(render)
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)

    // --- Walls (static) ---
    const thickness = 60

    const top = Matter.Bodies.rectangle(containerWidth / 2, -thickness / 2, containerWidth, thickness, {
      isStatic: true,
    })
    const bottom = Matter.Bodies.rectangle(
      containerWidth / 2,
      containerHeight + thickness / 2,
      containerWidth,
      thickness,
      { isStatic: true },
    )
    const left = Matter.Bodies.rectangle(-thickness / 2, containerHeight / 2, thickness, containerHeight, {
      isStatic: true,
    })
    const right = Matter.Bodies.rectangle(
      containerWidth + thickness / 2,
      containerHeight / 2,
      thickness,
      containerHeight,
      { isStatic: true },
    )

    Matter.World.add(world, [top, bottom, left, right])

    // --- Add an initial stack ---
    const stack = Matter.Composites.stack(80, 40, 8, 4, 20, 20, (x: any, y: any) => {
      const r = Math.random()
      if (r < 0.5) {
        return Matter.Bodies.rectangle(x, y, 40 + Math.random() * 40, 30 + Math.random() * 40, {
          chamfer: { radius: Math.random() > 0.7 ? 8 : 0 },
          render: { fillStyle: "#6AB04A" },
        })
      } else {
        const sides = Math.round(Matter.Common.random(3, 8))
        return Matter.Bodies.polygon(x, y, sides, 20 + Math.random() * 30, {
          chamfer: { radius: Math.random() > 0.7 ? 6 : 0 },
          render: { fillStyle: "#1B9CFC" },
        })
      }
    })
    Matter.World.add(world, stack)

    // --- Drop balls ---
    function dropBall() {
      const x = Math.random() * containerWidth
      const radius = 24 + Math.random() * 18

      const ball = Matter.Bodies.circle(x, -50, radius, {
        restitution: 0.7,
        render: { fillStyle: "#FF6B6B" },
      })
      Matter.World.add(world, ball)
    }

    const interval = window.setInterval(dropBall, 800)

    // --- Mouse control (drag) ---
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    })
    Matter.World.add(world, mouseConstraint)
    render.mouse = mouse

    // --- Resize handler ---
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

      // reposition walls
      Matter.Body.setPosition(bottom, { x: W / 2, y: H + thickness / 2 })
      Matter.Body.setPosition(top, { x: W / 2, y: -thickness / 2 })
      Matter.Body.setPosition(left, { x: -thickness / 2, y: H / 2 })
      Matter.Body.setPosition(right, { x: W + thickness / 2, y: H / 2 })
    }

    const resizeObserver = new ResizeObserver(() => {
      onResize()
    })
    resizeObserver.observe(sceneRef.current)

    // --- Cleanup ---
    return () => {
      window.clearInterval(interval)
      resizeObserver.disconnect()
      Matter.Render.stop(render)
      Matter.Runner.stop(runner)
      Matter.World.clear(world, false)
      Matter.Engine.clear(engine)
      if (render.canvas && render.canvas.parentNode) render.canvas.parentNode.removeChild(render.canvas)
    }
  }, [])

  return (
    <div
      ref={sceneRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
      }}
    />
  )
}
