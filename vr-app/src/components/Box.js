import { useFrame } from "@react-three/fiber";
import { useRef } from "react"

export default function Box() {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x =
            mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh
            scale={2}
            ref={mesh}>
            <boxGeometry />
            <meshStandardMaterial color={'green'} />
            <ambientLight intensity={0.5} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
            />
            <pointLight position={[-10, -10, -10]} />
        </mesh>
    )
}