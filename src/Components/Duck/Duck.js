import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import drill from "../../assets/cartoony_rubber_ducky.glb";
import { clamp } from "three/src/math/MathUtils";

export default function GLTFModel() {
  const gltfRef = useRef();
  const gltf = useLoader(GLTFLoader, drill);

  console.log(gltfRef);

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 40.5;
    const y = (mouse.y * viewport.height) / 8.5;

    const xMin = -1.9;
    const xMax = 1.9;
    const yMin = -2;
    const yMax = 0;
    const newX = Math.min(Math.max(x, xMin), xMax);
    const newY = Math.min(Math.max(y, yMin), yMax);
    gltfRef.current.lookAt(newX, newY, 1);
  });

  return (
    <group>
      <mesh ref={gltfRef} scale={0.5}>
        <primitive
          object={gltf.scene}
          rotation-y={4.7}
          position={[0, 0.3, 0]}
        />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}
