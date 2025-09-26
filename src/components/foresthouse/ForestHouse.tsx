'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { DRACOLoader } from 'three-stdlib';
import { Group } from 'three';

// path to the Draco files in /public dir
const dracoUrl = 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/';

function SwingingModel() {
  const modelRef = useRef<Group>(null);
  const dracoLoader = React.useMemo(() => {
    const loader = new DRACOLoader();
    loader.setDecoderPath(dracoUrl);
    return loader;
  }, []);

  const { scene } = useGLTF(
    '/models/forest_house.glb',
    true,
    true,
    (loader) => {
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useFrame(({ clock }) => {
    if (modelRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const rotationAngle = Math.sin(elapsedTime) * 0.2; // intensity
      modelRef.current.rotation.y = rotationAngle; // rotate around the Y-axis
    }
  });

  return <primitive object={scene} ref={modelRef} rotation={[0, Math.PI / 2, 0]} />;
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [1.5, 4, 9], fov: 45, near: 0.1, far: 100 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, -10, -10]} />
      <OrbitControls target={[0, 2, 0]} />

      <Suspense fallback={<LoadingFallback />}>
        <SwingingModel />
      </Suspense>
    </Canvas>
  );
}
