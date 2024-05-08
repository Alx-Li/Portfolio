'use client';
import React, { useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from "framer-motion"

export default function Index() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  // https://framer-motion-visualizer.vercel.app/
  const smoothMouse = {
    x: useSpring(mouse.x),
    y: useSpring(mouse.y)
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
    <Canvas style={{background: "#e0e0e2"}} orthographic camera={{position: [0, 0, 200], zoom: 100}}>
        <Model mouse={smoothMouse} />
        <Environment preset="studio"/>
    </Canvas>
  )
}