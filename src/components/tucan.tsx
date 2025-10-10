'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function TucanModel() {
  const { scene } = useGLTF('/toucan+3d+model.glb')
  const meshRef = useRef<THREE.Group>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mousePos.x * Math.PI / 2
      meshRef.current.rotation.x = mousePos.y * Math.PI / 2
    }
  })

  return <primitive ref={meshRef} object={scene} scale={[5, 5, 5]} />
}

export default function Tucan() {
  return (
    <div style={{ height: '400px', width: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <pointLight position={[10, 10, 10]} intensity={3} />
        <TucanModel />
      </Canvas>
    </div>
  )
}