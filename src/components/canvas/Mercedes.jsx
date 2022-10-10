import { useEffect } from 'react';

import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

import { useLoader } from '@react-three/fiber'

import { useGLTF } from '@react-three/drei'


const url = "./Mercedes/Mercedes S Class AMG.glb";
// const objUrl = "./Mercedes/Avent_sport.obj";

const Scene = ({ bodyColor, wheelColor, rimColor }) => {

    // Initial material
    const { scene } = useGLTF(url)
    // useEffect(() => {
    //     if (scene) {
    //         // Set initial textures
    //         for (let object of INITIAL_MAP) {
    //             initColor(scene, object.childID, object.mtl);
    //         }
    //     }
    // }, [scene])

    useEffect(() => {
        if (bodyColor && scene) {
            const BODY_MTL = new THREE.MeshPhongMaterial({ color: bodyColor, shininess: 1 });
            const BODY_MAP = [
                { childID: "body", mtl: BODY_MTL },
            ]

            // Set initial textures
            for (let object of BODY_MAP) {
                initColor(scene, object.childID, object.mtl);
            }

        }
    }, [bodyColor, scene]);

    useEffect(() => {
        if (wheelColor && scene) {
            const WHEEL_MTL = new THREE.MeshPhongMaterial({ color: wheelColor, shininess: 50 });
            const WHEEL_MAP = [
                { childID: "wheelBkR", mtl: WHEEL_MTL },
                { childID: "wheelBkL", mtl: WHEEL_MTL },
                { childID: "wheelFtR", mtl: WHEEL_MTL },
                { childID: "wheelFtL", mtl: WHEEL_MTL }
            ];

            // Set initial textures
            for (let object of WHEEL_MAP) {
                initColor(scene, object.childID, object.mtl);
            }

        }
    }, [wheelColor, scene]);


    useEffect(() => {
        if (rimColor && scene) {
            const RIM_MTL = new THREE.MeshPhongMaterial({ color: rimColor, shininess: 50 });
            const RIM_MAP = [
                { childID: "wheel", mtl: RIM_MTL },
                { childID: "wheel001", mtl: RIM_MTL },
                { childID: "wheel002", mtl: RIM_MTL },
                { childID: "wheel003", mtl: RIM_MTL }
            ];

            // Set initial textures
            for (let object of RIM_MAP) {
                initColor(scene, object.childID, object.mtl);
            }

        }
    }, [rimColor, scene]);



    // Function - Add the textures to the models
    function initColor(parent, type, mtl) {
        parent.traverse((o) => {
            if (o.isMesh) {
                // console.log("o.name:", o.name);
                // if (o.name.includes(type)) {
                if (o.name === type) {
                    o.material = mtl;
                    o.nameID = type; // Set a new property to identify this object
                }
            }
        });
    }

    return <primitive object={scene} />
}

export default Scene;