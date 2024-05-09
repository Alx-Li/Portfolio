'use client';
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring, motion } from "framer-motion"

export default function LogoCanvas() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const resetMousePosition = () => {
    mouse.x.set(0.5);
    mouse.y.set(0.5);
  };
  // https://framer-motion-visualizer.vercel.app/
  const smoothMouse = {
    x: useSpring(mouse.x, {damping: 15}),
    y: useSpring(mouse.y, {damping: 15})
  }

  const manageMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);

  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouse)
    return () => window.removeEventListener("mousemove", manageMouse)
  }, [])

  return (
    <motion.div 
      style={{width: "100%"}}
      onHoverEnd={()=>{
        resetMousePosition();
      }}
    >
      <Canvas orthographic camera={{position: [0, 0, 200], near: 0.1, far: 1000, zoom: 600}} >
          <Model mouse={smoothMouse} />
          <Environment preset="studio"/>
      </Canvas>
    </motion.div>
  )
}