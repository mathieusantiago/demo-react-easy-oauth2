import { useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import drill from '../../assets/cartoony_rubber_ducky.glb'


export default function GLTFModel() {
  const gltfRef = useRef()
  const gltf = useLoader(GLTFLoader, drill)

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 8.5
    const y = (mouse.y * viewport.height) / 8.5
    gltfRef.current.lookAt(x, y, 1)
  })

  return (
    <group>
      <mesh ref={gltfRef} scale={0.5}>
        <primitive object={gltf.scene} rotation-y={4.7}  position={[0, 0.30, 0]}/>
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}
