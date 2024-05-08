import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d"

export default function Model({ mouse }) {
  const { nodes, materials } = useGLTF("/models/logo.glb");

  return (
    <Float>
      <group 
      scale={0.003} rotation={[0, 0, 0 ]}
      >
      {Object.keys(nodes).map((nodeName, index) => (
          <Mesh
            key={index}
            node={nodes[nodeName]}
            mouse={mouse}
          />
        ))}
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

  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - 0.5, rotation.x + 0.5])
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - 0.5, rotation.y + 0.5])
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

useGLTF.preload("/models/logo.glb");
