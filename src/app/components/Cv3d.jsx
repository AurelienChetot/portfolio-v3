"use client"; // Indique que ce composant est un Client Component

import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import Link from "next/link";

import {
  OrbitControls,
  useGLTF,
  Text,
  PerspectiveCamera,
} from "@react-three/drei";
import { Vector3 } from "three";
import * as THREE from "three";

import ExperienceContent from "./ExperienceContent";

// modele hologramme
const Model = ({
  moveTerminal,
  isMoving,
  targetPosition,
  showText,
  selectedSection,
  onSelectSection,
}) => {
  const { scene, materials } = useGLTF("/assets/models3D/hologram1.glb");

  const modelRef = useRef();

  scene.traverse((child) => {
    if (child.isMesh) {
      const material = materials[child.material.name];
      if (material) {
        material.depthWrite = true;
        // material.opacity = 0.4;
      }
    }
  });

  useFrame(() => {
    if (isMoving && modelRef.current) {
      modelRef.current.position.lerp(targetPosition, 0.05);
      if (modelRef.current.position.distanceTo(targetPosition) < 0.1) {
        moveTerminal(false);
      }
    }
  });

  const renderContent = () => {
    switch (selectedSection) {
      case "Experience":
        return <ExperienceContent />;
      case "Stacks":
        return "Mes stacks techniques ";
      case "Atouts":
        return "Mes principaux atouts";
      case "Interet":
        return "Mes intérêts personnels";
      default:
        return "Cliquez sur une section";
    }
  };

  return (
    <>
      <primitive
        ref={modelRef}
        object={scene}
        scale={8}
        position={[0, -25, -95]}
      />
      {showText && (
        <>
          <Text
            position={[-9.5, 15, -2]}
            fontSize={1.2}
            color="cyan"
            onPointerDown={() => onSelectSection("Experience")}
            style={{ cursor: "pointer" }}
          >
            Experience
          </Text>
          <Text
            position={[-2.5, 15, -2]}
            fontSize={1.2}
            color="cyan"
            onPointerDown={() => onSelectSection("Stacks")}
            style={{ cursor: "pointer" }}
          >
            | Mes Stacks
          </Text>
          <Text
            position={[3.7, 15, -2]}
            fontSize={1.2}
            color="cyan"
            onPointerDown={() => onSelectSection("Atouts")}
            style={{ cursor: "pointer" }}
          >
            | Atouts
          </Text>
          <Text
            position={[9, 15, -2]}
            fontSize={1.2}
            color="cyan"
            onPointerDown={() => onSelectSection("Interet")}
            style={{ cursor: "pointer" }}
          >
            | Intérêt
          </Text>
          <Text position={[-4, 10.5, -2]} fontSize={1.5} color="white">
            {renderContent()}
          </Text>
        </>
      )}
    </>
  );
};

// modele de hangar
const HangarModel = () => {
  const { scene } = useGLTF("/assets/models3D/hangar_model.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      const material = child.material;

      if (child.name.includes("screen")) {
        material.transparent = true;
        material.opacity = 0.5;
        material.depthWrite = false;
        material.side = THREE.DoubleSide;
        material.premultipliedAlpha = true;
        material.renderOrder = 1;
      } else {
        material.depthWrite = true;
      }
    }
  });

  return <primitive object={scene} scale={30} position={[-14, -21, 0]} />;
};

const Cv3D = () => {
  const [isMoving, setIsMoving] = useState(false); // Animation en cours
  const [showText, setShowText] = useState(false); // Pour afficher ou non le texte
  const [selectedSection, setSelectedSection] = useState(""); // Section sélectionnée
  const targetPosition = new Vector3(0, -25, -30);
  const cameraRef = useRef();

  const moveTerminal = (shouldMove) => {
    setIsMoving(shouldMove);

    if (shouldMove && cameraRef.current) {
      cameraRef.current.position.set(0, 800, 2900);
    }

    if (!showText) {
      setShowText(true);
    }
  };

  return (
    <div>
      <Canvas style={{ height: "100vh", width: "100vw", background: "black" }}>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[-0, 800, 2900]}
          fov={75}
        />
        <Suspense fallback={<Text>Chargement du modèle 3D...</Text>}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 10, 5]} intensity={2} />
          <pointLight position={[20, 20, 20]} intensity={400} />
          <HangarModel />
          <Model
            moveTerminal={moveTerminal}
            isMoving={isMoving}
            targetPosition={targetPosition}
            showText={showText}
            selectedSection={selectedSection} // Passe la section selectionée au modèle
            onSelectSection={setSelectedSection} // Met à jour la section selectionée
          />
          <OrbitControls
            minDistance={2}
            maxDistance={50}
            enableZoom={true}
            rotateSpeed={0.8}
            zoomSpeed={1}
            minAzimuthAngle={-Math.PI / 0}
            maxAzimuthAngle={Math.PI / 0}
            minPolarAngle={Math.PI / 3.8}
            maxPolarAngle={Math.PI / 1.8}
            mouseButtons={{
              LEFT: THREE.MOUSE.ROTATE,
              MIDDLE: THREE.MOUSE.DOLLY,
              RIGHT: null,
            }}
          />
        </Suspense>
      </Canvas>

      <button
        onClick={() => moveTerminal(true)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Déplacer le terminal
      </button>
      <Link href="/">
        <button
          style={{
            position: "absolute",
            top: "80px",
            left: "40px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Revenir au site
        </button>
      </Link>
    </div>
  );
};

export default Cv3D;
