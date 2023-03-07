import { Canvas, useThree, useFrame } from '@react-three/fiber'
import Element from './Duck'
import { Vector3 } from 'three'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 0, mouse.y * 0, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

export default function DuckGroup() {
  return (
    <Canvas camera={{ position: [5, -20, 0.5] }}>
      <directionalLight position={[0, 0, 5]} />
      <group>
        <Element />
      </group>
      <Rig />
    </Canvas>
  )
}
