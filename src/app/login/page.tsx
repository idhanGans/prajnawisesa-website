"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import * as THREE from "three";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title letters
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05, duration: 1, delay: 0.5 },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mountRef.current) {
      return;
    }

    const mountElement = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountElement.appendChild(renderer.domElement);

    const geometry1 = new THREE.TorusGeometry(10, 3, 16, 120);
    const geometry2 = new THREE.OctahedronGeometry(8, 0);
    const geometry3 = new THREE.TetrahedronGeometry(6, 0);

    const material1 = new THREE.MeshBasicMaterial({
      color: 0xd8c9b3,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const material2 = new THREE.MeshBasicMaterial({
      color: 0x8a8a8a,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const material3 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    const torus = new THREE.Mesh(geometry1, material1);
    const octahedron = new THREE.Mesh(geometry2, material2);
    const tetrahedron = new THREE.Mesh(geometry3, material3);

    torus.position.set(0, 0, 0);
    octahedron.position.set(16, 10, -10);
    tetrahedron.position.set(-16, -10, -6);

    scene.add(torus);
    scene.add(octahedron);
    scene.add(tetrahedron);

    camera.position.z = 30;

    let frameId: number;
    let isAnimating = true;

    const animate = () => {
      if (!isAnimating) return;

      frameId = requestAnimationFrame(animate);

      torus.rotation.x += 0.0045;
      torus.rotation.y += 0.004;

      octahedron.rotation.x += 0.0025;
      octahedron.rotation.y += 0.006;

      tetrahedron.rotation.x += 0.006;
      tetrahedron.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isAnimating = false;
      window.removeEventListener("resize", handleResize);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement);
      }
      geometry1.dispose();
      geometry2.dispose();
      geometry3.dispose();
      material1.dispose();
      material2.dispose();
      material3.dispose();
      renderer.dispose();
    };
  }, []);

  const handleEnter = () => {
    setIsAnimating(true);

    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 1,
      onComplete: () => {
        router.push("/home");
      },
    });
  };

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char" style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={mountRef} className={styles.canvasLayer} aria-hidden="true" />

      <div className={styles.content}>
        <motion.h1
          ref={titleRef}
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {splitText("PRAJNA")}
          <br />
          {splitText("WISESA")}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Consultant
        </motion.p>

        {!isLoading && (
          <motion.button
            className={styles.button}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEnter}
            disabled={isAnimating}
          >
            <span className={`${styles.buttonText} text-2xl`}>Enter Site</span>
          </motion.button>
        )}
      </div>

      <div className={styles.footer}>
        <span className="text-3xl">
          Strategic Excellence in Business Consulting
        </span>
      </div>
    </div>
  );
}
