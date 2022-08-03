import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"

export default function Box({ rotate = false }) {
    const mesh = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame(() => {
        if (rotate) {
            mesh.current.rotation.x =
                mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh
            scale={2}
            ref={mesh}
            onPointerOver={(e) => setHovered(true)}
            onPointerOut={(e) => setHovered(false)}>
            <boxGeometry />
            <meshStandardMaterial color={hovered ? 'purple' : 'blue'} />
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