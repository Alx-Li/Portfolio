import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d"

export default function Model({ mouse }) {
  const { nodes } = useGLTF("/models/suzanne.glb");

  return (
    <Float>
      <group>
        <Mesh node={nodes.Suzanne} mouse={mouse}/>
      </group>
    </Float>
  );
}

function Mesh({ node, mouse }) {
  const {
    castShadow,
    receiveShadow,
    geometry,
    material,
    position,
    rotation,
    scale,
  } = node;

  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x -1, rotation.x + 1])
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y -1, rotation.y + 1])
  return (
    <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
      rotation-y={rotationX}
      rotation-x = {rotationY}
    />
  );
}

useGLTF.preload("/models/suzanne.glb");
