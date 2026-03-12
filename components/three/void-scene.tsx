"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StardustParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#9AEBA3"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function OrbitalRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 16, 200]} />
      <meshBasicMaterial color="#13678A" transparent opacity={0.25} />
    </mesh>
  );
}

function VenusGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -10]}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshBasicMaterial color="#45C4B0" transparent opacity={0.15} />
      <pointLight color="#45C4B0" intensity={2} distance={30} decay={2} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#00050A"]} />
      <fog attach="fog" args={["#00050A", 15, 40]} />
      <ambientLight intensity={0.1} />
      <VenusGlow />
      <OrbitalRing radius={4} speed={0.08} tilt={0.4} />
      <OrbitalRing radius={6} speed={-0.05} tilt={0.8} />
      <OrbitalRing radius={8.5} speed={0.03} tilt={1.2} />
      <StardustParticles />
    </>
  );
}

export default function VoidScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
        }}
        style={{ background: "#00050A" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
