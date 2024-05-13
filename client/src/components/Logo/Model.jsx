import {  useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function LogoMesh({ color, y_offset, delay, damping }) {
  const group = useRef(null);
  const { nodes } = useGLTF("/Logo/3d2.glb");
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    group.current.rotation.y = 0.04 * time;
    group.current.position.y =
      1.4 * damping * Math.sin(1 * time + 2 * delay);
  });

  return (
    <>
      <group ref={group}>
        {Object.keys(nodes).map((nodeName, index) => {
          const { geometry, rotation, scale } = nodes[nodeName];
          return (
            <mesh
              key={nodeName}
              position={[0, y_offset, 0]}
              geometry={geometry}
              rotation={rotation}
              scale={scale}
            >
              <meshToonMaterial color={color} />
            </mesh>
          );
        })}
      </group>
    </>
  );
}

export default function Model() {

  return (
    <>
      <LogoMesh
        color={"#000000"}
        y_offset={1}
        delay={0}
        damping={0.5}
      />
      <LogoMesh
        color={"#2F2F2F"}
        y_offset={0}
        delay={(1 * Math.PI) / 8}
        damping={0.4}
      />
      <LogoMesh
        color={"#6F6F6F"}
        y_offset={-1.0}
        delay={(2 * Math.PI) / 8}
        damping={0.4}
      />
      <LogoMesh
        color={"#9A9A9A"}
        y_offset={-2.2}
        delay={(3 * Math.PI) / 8}
        damping={0.5}
      />
      <LogoMesh
        color={"#BFBFBF"}
        y_offset={-3.5}
        delay={(4 * Math.PI) / 8}
        damping={0.5}
      />
      <LogoMesh
        color={"#E2E2E2"}
        y_offset={-5.1}
        delay={(5 * Math.PI) / 8}
        damping={0.7}
      />
      <LogoMesh
        color={"#FDFDFD"}
        y_offset={-7}
        delay={(6 * Math.PI) / 8}
        damping={1}
      />
    </>
  );
}

useGLTF.preload("/Logo/3d2.glb");