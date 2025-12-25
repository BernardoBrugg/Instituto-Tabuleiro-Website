"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html, useEnvironment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function PreaModel({ onLoaded }: { onLoaded?: () => void }) {
  const { scene } = useGLTF("/prea.glb");
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Group>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEnvironment({ preset: "sunset" });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const maxRotation = Math.PI / 2;

      const targetRotationY = mousePos.x * maxRotation;
      const targetRotationX = mousePos.y * maxRotation;

      groupRef.current.rotation.x +=
        (targetRotationX - groupRef.current.rotation.x) * delta * 3;
      groupRef.current.rotation.y +=
        (targetRotationY - groupRef.current.rotation.y) * delta * 3;

      if (Math.abs(mousePos.x) < 0.01 && Math.abs(mousePos.y) < 0.01) {
        groupRef.current.rotation.z +=
          Math.sin(state.clock.elapsedTime * 0.5) * 0.005;
      }
    }
  });

  useEffect(() => {
    if (scene && onLoaded) {
      onLoaded();
    }
  }, [scene, onLoaded]);

  if (!scene) {
    return (
      <Html center>
        <div className="text-white">Loading 3D Model...</div>
      </Html>
    );
  }

  return (
    <group ref={groupRef}>
      <primitive
        ref={meshRef}
        object={scene}
        scale={[4.5, 4.5, 4.5]}
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 3, 0]}
      />
    </group>
  );
}

export default function Prea({ onLoaded }: { onLoaded?: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded && onLoaded) {
      onLoaded();
    }
  }, [isLoaded, onLoaded]);

  return (
    <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
      <Canvas
        camera={{ position: [0, 0, -5] }}
        style={{ height: "100%", width: "100%" }}
        shadows={false}
      >
        <ambientLight intensity={2.5} />
        <hemisphereLight args={["#ffffff", "#404040", 2.8]} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[0, 0, 5]} intensity={2} />
        <pointLight position={[-10, 10, 10]} intensity={2} />
        <pointLight position={[10, -10, 10]} intensity={2} />
        <pointLight position={[0, 20, 0]} intensity={3.5} />
        <pointLight position={[0, 15, 5]} intensity={3} />
        <pointLight position={[0, 25, -2]} intensity={2.5} />
        <pointLight position={[0, 0, -5]} intensity={1.2} />
        <PreaModel onLoaded={() => setIsLoaded(true)} />
          
      </Canvas>
      <p className="mt-0 max-w-sm text-white/70 text-xs text-center">
                  Preá-de-Moleques-do-Sul (Cavia intermedia): roedor endêmico e criticamente ameaçado da ilha de Moleques do Sul, SC.
                </p>
    </div>
  );
}
