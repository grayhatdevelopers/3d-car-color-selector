import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

const Scene = () => {
  const obj = useLoader(OBJLoader, './House.obj')
  return <primitive object={obj} />
}

export default Scene;