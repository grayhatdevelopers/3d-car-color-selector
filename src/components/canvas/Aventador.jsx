import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

import { useLoader } from '@react-three/fiber'

const mtlUrl = "./Aventador/Avent_sport.mtl";
const objUrl = "./Aventador/Avent_sport.obj";

const Scene = () => {
    // const obj = useLoader(OBJLoader, './Aventador/Avent_sport.obj')
    const materials = useLoader(MTLLoader, mtlUrl)
    const object = useLoader(OBJLoader, objUrl, loader => {
        materials.preload()
        console.log("material:", materials);
        loader.setMaterials(materials)
    })
    return <primitive object={object} />
}

export default Scene;