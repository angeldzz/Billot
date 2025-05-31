// src/ModelViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/1975_porsche_911_turbo.glb');
  return <primitive object={scene} scale={2} />;
}

function Modelo3D() {
  return (
    <Canvas  camera={{ position: [0, 550, 550], fov: 0.8 }}>
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[50, 100, 100]}
        intensity={2.3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-100, 50, -100]} intensity={1} />
      <Suspense fallback={null}>
          <Model/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
export default Modelo3D;