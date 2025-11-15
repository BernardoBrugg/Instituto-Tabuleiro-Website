"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html, useEnvironment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function TucanModel({ onLoaded }: { onLoaded?: () => void }) {
  const { scene } = useGLTF("/toucan-optimized.glb");
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Group>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { camera } = useThree();

  useEnvironment({ preset: "sunset" });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        setMousePos({
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const vector = new THREE.Vector3(mousePos.x, mousePos.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      const direction = pos.sub(new THREE.Vector3(0, 0, 0)).normalize();
      const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, -1),
        direction
      );

      groupRef.current.quaternion.slerp(targetQuaternion, delta * 3);

      if (Math.abs(mousePos.x) < 0.01 && Math.abs(mousePos.y) < 0.01) {
        groupRef.current.rotation.y +=
          Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        groupRef.current.rotation.x +=
          Math.cos(state.clock.elapsedTime * 0.3) * 0.02;
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
        rotation={[0, Math.PI, 0]}
      />
    </group>
  );
}

export default function Tucan({ onLoaded }: { onLoaded?: () => void }) {
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
        <ambientLight intensity={0.5} />
        <hemisphereLight args={["#ffffff", "#404040", 1]} />
        <directionalLight position={[10, 10, 10]} intensity={8.5} />
        <pointLight position={[0, 0, 5]} intensity={8.5} />
        <pointLight position={[-10, 10, 10]} intensity={8.5} />
        <pointLight position={[10, -10, 10]} intensity={8.5} />
        <pointLight position={[0, 0, -5]} intensity={88.5} />
        <TucanModel onLoaded={() => setIsLoaded(true)} />
      </Canvas>
    </div>
  );
}
