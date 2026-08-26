import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RefreshCw, Eye, Sparkles, Layers } from 'lucide-react';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);
  const [currentMode, setCurrentMode] = useState('cyan'); // 'cyan', 'purple', 'emerald', 'sunset'
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const materialsRef = useRef({
    meshMat: null,
    wireMat: null,
    coreMat: null,
  });

  const modeColors = {
    cyan: { main: 0x00f2fe, glow: 0x4facfe, core: 0x0284c7 },
    purple: { main: 0xa855f7, glow: 0xec4899, core: 0x7928ca },
    emerald: { main: 0x10b981, glow: 0x06b6d4, core: 0x047857 },
    sunset: { main: 0xf59e0b, glow: 0xef4444, core: 0xd97706 },
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f2fe, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7928ca, 3, 50);
    pointLight2.position.set(-5, -5, 2);
    scene.add(pointLight2);

    // Geometry: Complex Torus Knot (Cyber Artifact)
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 128, 32, 2, 3);

    // Main Material
    const meshMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d1127,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: wireframeOnly,
      emissive: 0x002244,
      emissiveIntensity: 0.4,
    });

    // Wireframe Overlay
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    materialsRef.current.meshMat = meshMaterial;
    materialsRef.current.wireMat = wireMaterial;

    const torusMesh = new THREE.Mesh(geometry, meshMaterial);
    const wireMesh = new THREE.Mesh(geometry, wireMaterial);
    wireMesh.scale.set(1.02, 1.02, 1.02);

    const group = new THREE.Group();
    group.add(torusMesh);
    group.add(wireMesh);

    // Glowing Inner Sphere Core
    const coreGeo = new THREE.IcosahedronGeometry(0.8, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    materialsRef.current.coreMat = coreMat;
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Orbiting Particle Ring
    const ringCount = 200;
    const ringGeo = new THREE.BufferGeometry();
    const ringPos = new Float32Array(ringCount * 3);
    for (let i = 0; i < ringCount; i++) {
      const theta = (i / ringCount) * Math.PI * 2;
      const radius = 2.8 + (Math.random() - 0.5) * 0.4;
      ringPos[i * 3] = Math.cos(theta) * radius;
      ringPos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      ringPos[i * 3 + 2] = Math.sin(theta) * radius;
    }
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
    const ringMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const ringPoints = new THREE.Points(ringGeo, ringMat);
    ringPoints.rotation.x = Math.PI / 4;
    group.add(ringPoints);

    scene.add(group);

    // Mouse Tracking & Drag Orbiting
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;
    let autoRotationSpeed = 0.008;

    const handleMouseDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) {
        // Subtle tilt on hover
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotationY = x * 0.8;
        targetRotationX = y * 0.8;
        return;
      }

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;

      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domEl.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        group.rotation.y += autoRotationSpeed;
        group.rotation.x += autoRotationSpeed * 0.5;

        // Smoothly blend to hover tilt
        group.rotation.x += (targetRotationX - (group.rotation.x % (Math.PI * 2))) * 0.02;
      }

      // Inner core pulse & rotation
      coreMesh.rotation.y = -elapsed * 0.5;
      coreMesh.rotation.z = elapsed * 0.3;
      const pulse = 1 + Math.sin(elapsed * 3) * 0.08;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Orbiting particles ring spin
      ringPoints.rotation.z = elapsed * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      domEl.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domEl.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      meshMaterial.dispose();
      wireMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Mode Color update
  useEffect(() => {
    const colors = modeColors[currentMode] || modeColors.cyan;
    if (materialsRef.current.wireMat) {
      materialsRef.current.wireMat.color.setHex(colors.main);
    }
    if (materialsRef.current.coreMat) {
      materialsRef.current.coreMat.color.setHex(colors.glow);
    }
    if (materialsRef.current.meshMat) {
      materialsRef.current.meshMat.wireframe = wireframeOnly;
      materialsRef.current.meshMat.emissive.setHex(colors.core);
    }
  }, [currentMode, wireframeOnly]);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none">
      {/* 3D Canvas Mounting Point */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Floating 3D Control HUD */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 shadow-neon-cyan/20 text-xs text-slate-300 backdrop-blur-md z-10 transition-all">
        <span className="flex items-center gap-1 text-cyan-400 font-mono font-medium hidden sm:inline-flex">
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          3D Interactive:
        </span>
        <span className="text-slate-400 hidden md:inline">Drag to rotate</span>

        <div className="h-3 w-px bg-slate-700 mx-1 hidden sm:block" />

        {/* Color Theme Selector */}
        <div className="flex items-center gap-1.5">
          {Object.keys(modeColors).map((mode) => (
            <button
              key={mode}
              onClick={() => setCurrentMode(mode)}
              title={`${mode.toUpperCase()} Theme`}
              className={`w-4 h-4 rounded-full transition-transform ${
                currentMode === mode ? 'scale-125 ring-2 ring-white/60' : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                backgroundColor: `#${modeColors[mode].main.toString(16).padStart(6, '0')}`,
              }}
            />
          ))}
        </div>

        <div className="h-3 w-px bg-slate-700 mx-1" />

        {/* Wireframe Toggle */}
        <button
          onClick={() => setWireframeOnly((prev) => !prev)}
          className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
            wireframeOnly ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/40' : 'text-slate-400 hover:text-white'
          }`}
          title="Toggle Wireframe Mode"
        >
          <Layers className="w-3 h-3" />
          {wireframeOnly ? 'Wireframe' : 'Solid'}
        </button>
      </div>

      {/* Subtle Interaction Indicator */}
      {isInteracting && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 animate-pulse">
          PHYSICS ENGINE ACTIVE
        </div>
      )}
    </div>
  );
}
