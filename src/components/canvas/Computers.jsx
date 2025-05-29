import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.7 : 1} // Lower intensity on mobile
        castShadow={!isMobile} // Disable shadows on mobile
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75} // Adjust scale for mobile
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Adjust position for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement("canvas");
    const isSupported =
      !!window.WebGLRenderingContext && !!canvas.getContext("webgl");
    setWebGLSupported(isSupported);

    // Check screen size for mobile devices
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Fallback for devices without WebGL support
  if (!webGLSupported) {
    return (
      <img
        src="/src/assets/logo.svg" // Add a fallback image path
        alt="Static Preview"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {isMobile ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          3D model doesn't appear on mobile
        </div>
      ) : (
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas;
