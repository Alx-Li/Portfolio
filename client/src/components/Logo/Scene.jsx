"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model.jsx";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Noise,
  DotScreen,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { OrbitControls } from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {

  return (
    <Canvas
      orthographic
      camera={{ position: [10, 15, 10], near: 0.1, far: 100, zoom: 25 }}
    >
      <color attach="background" args={["#AFAFAF00"]} />
      <fog attach="fog" args={["#FFFFFF", 15, 50]} />
      {/* <OrbitControls /> */}
      <directionalLight
        position={[-4, 1, 4]}
        intensity={3.8}
        color={"#FFFFFF"}
      />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <DepthOfField
          focusDistance={0.12}
          focalLength={0.2}
          bokehScale={5}
          height={480}
          focusRange={0.4}
        />
        <DotScreen
          blendFunction={BlendFunction.COLOR_DODGE} // blend mode
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={1.0} // scale of the dot pattern
          opacity={0.8}
        />
        <Noise opacity={0.035} />
      </EffectComposer>
    </Canvas>
  );
}
