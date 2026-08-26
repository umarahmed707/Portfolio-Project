import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Canvas3DBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Starfield / Cyber Matrix
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#00f2fe');
    const color2 = new THREE.Color('#7928ca');
    const color3 = new THREE.Color('#4facfe');

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Spread in 3D space
      positions[i] = (Math.random() - 0.5) * 120;
      positions[i + 1] = (Math.random() - 0.5) * 120;
      positions[i + 2] = (Math.random() - 0.5) * 90;

      // Color variation
      const rand = Math.random();
      const c = rand < 0.4 ? color1 : rand < 0.7 ? color2 : color3;
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // Floating Geometric Wireframe Objects in the background
    const polyGeometry = new THREE.IcosahedronGeometry(7, 1);
    const polyMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const polyMesh = new THREE.Mesh(polyGeometry, polyMaterial);
    polyMesh.position.set(-25, 10, -15);
    scene.add(polyMesh);

    const torusGeometry = new THREE.TorusGeometry(8, 2, 16, 50);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x7928ca,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(28, -12, -20);
    scene.add(torusMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      // Rotate particle cloud slowly + tilt with mouse
      particles.rotation.y = elapsedTime * 0.02 + targetX * 0.2;
      particles.rotation.x = elapsedTime * 0.01 + targetY * 0.2;

      // Floating polyhedrons animation
      polyMesh.rotation.x = elapsedTime * 0.15;
      polyMesh.rotation.y = elapsedTime * 0.2;
      polyMesh.position.y = 10 + Math.sin(elapsedTime * 0.8) * 2;

      torusMesh.rotation.x = elapsedTime * 0.18;
      torusMesh.rotation.z = elapsedTime * 0.12;
      torusMesh.position.y = -12 + Math.cos(elapsedTime * 0.7) * 2.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      pMaterial.dispose();
      polyGeometry.dispose();
      polyMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
