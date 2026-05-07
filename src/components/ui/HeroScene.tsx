import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
  })

  return (
    <mesh ref={meshRef} position={[2.5, 0, 0]}>
      <icosahedronGeometry args={[1.4, 1]} />
      <MeshDistortMaterial
        color="#7c3aed"
        wireframe
        distort={0.3}
        speed={2}
        opacity={0.6}
        transparent
      />
    </mesh>
  )
}

function FloatingParticles() {
  const count = 120
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#a78bfa" size={0.04} sizeAttenuation transparent opacity={0.7} />
    </points>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={2} color="#7c3aed" />
        <pointLight position={[-4, -2, 2]} intensity={1} color="#4f46e5" />

        <Stars radius={60} depth={50} count={3000} factor={3} fade speed={0.5} />
        <FloatingOrb />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
