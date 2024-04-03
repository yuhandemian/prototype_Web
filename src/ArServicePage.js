import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    // renderer.outputEncoding = THREE.sRGBEncoding; 이 부분을 제거함
    renderer.setSize(300, 300);

    const camera = new THREE.PerspectiveCamera(30, 300 / 300, 0.1, 1000);
    camera.position.set(0, 0, 5);

    scene.background = new THREE.Color('white');
    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(1, 1, 1);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load('lion/scene.gltf', function(gltf) {
      scene.add(gltf.scene);
      gltf.scene.scale.set(0.03, 0.03, 0.03);

      const animate = () => {
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.04;
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} width="300" height="300" />;
}

export default ThreeScene;
