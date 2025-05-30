"use client"

import { useEffect, useRef } from "react"

export const useParticles = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particleCount = 50

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.width = Math.random() * 4 + 2 + "px"
      particle.style.height = particle.style.width
      particle.style.animationDuration = Math.random() * 20 + 10 + "s"
      particle.style.animationDelay = Math.random() * 20 + "s"
      container.appendChild(particle)
    }

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return containerRef
}

export const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className = "custom-cursor"
    document.body.appendChild(cursor)

    const trails = []
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      document.body.appendChild(trail)
      trails.push(trail)
    }

    let mouseX = 0
    let mouseY = 0
    let trailPositions = Array(trails.length).fill({ x: 0, y: 0 })

    const updateCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX - 10 + "px"
      cursor.style.top = mouseY - 10 + "px"
    }

    const updateTrails = () => {
      trailPositions = trailPositions.map((pos, index) => {
        const factor = (index + 1) * 0.05
        return {
          x: pos.x + (mouseX - pos.x) * factor,
          y: pos.y + (mouseY - pos.y) * factor,
        }
      })

      trails.forEach((trail, index) => {
        trail.style.left = trailPositions[index].x - 3 + "px"
        trail.style.top = trailPositions[index].y - 3 + "px"
        trail.style.opacity = ((trails.length - index) / trails.length) * 0.7
      })

      requestAnimationFrame(updateTrails)
    }

    document.addEventListener("mousemove", updateCursor)
    updateTrails()

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      cursor.remove()
      trails.forEach((trail) => trail.remove())
    }
  }, [])
}

export const useMouseGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div")
    glow.className = "mouse-glow"
    document.body.appendChild(glow)

    const updateGlow = (e) => {
      glow.style.left = e.clientX - 150 + "px"
      glow.style.top = e.clientY - 150 + "px"
    }

    document.addEventListener("mousemove", updateGlow)

    return () => {
      document.removeEventListener("mousemove", updateGlow)
      glow.remove()
    }
  }, [])
}

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

export const useRippleEffect = () => {
  useEffect(() => {
    const addRipple = (e) => {
      const button = e.currentTarget
      if (!button.classList.contains("ripple")) return

      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple-effect")

      button.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    const rippleElements = document.querySelectorAll(".ripple")
    rippleElements.forEach((el) => {
      el.addEventListener("click", addRipple)
    })

    return () => {
      rippleElements.forEach((el) => {
        el.removeEventListener("click", addRipple)
      })
    }
  }, [])
}
