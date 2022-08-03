import { useLoader } from "@react-three/fiber"
import * as THREE from 'three'

const backgrounds = [
    {
        id: 1,
        url: '/mountain.jpeg'
    },
    {
        id: 2,
        url: '/beach.jpeg'
    },

]

export default function Panorama() {
    const background = useLoader(THREE.TextureLoader,
        backgrounds[0].url);

    return (
        <mesh>
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={background} side={THREE.BackSide} />

        </mesh>
    )
}

