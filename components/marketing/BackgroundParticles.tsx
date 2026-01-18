"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
    const count = 2000;
    const mesh = useRef<THREE.Points>(null);

    // Generate positions
    const { randomPositions, gridPositions } = useMemo(() => {
        const random = new Float32Array(count * 3);
        const grid = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Random (Chaos)
            random[i * 3] = (Math.random() - 0.5) * 50;
            random[i * 3 + 1] = (Math.random() - 0.5) * 50;
            random[i * 3 + 2] = (Math.random() - 0.5) * 50;

            // Grid (Order)
            // Simple 3D grid, roughly 12x12x12 cube centered
            const side = Math.ceil(Math.pow(count, 1 / 3));
            const spacing = 1.5;
            const x = (i % side) * spacing - (side * spacing) / 2;
            const y = (Math.floor(i / side) % side) * spacing - (side * spacing) / 2;
            const z = Math.floor(i / (side * side)) * spacing - (side * spacing) / 2; // Fixed z calculation

            grid[i * 3] = x;
            grid[i * 3 + 1] = y;
            grid[i * 3 + 2] = z;
        }
        return { randomPositions: random, gridPositions: grid };
    }, []);

    const currentPositions = useMemo(() => new Float32Array(randomPositions), [randomPositions]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Animation progress (0 to 1)
        // Start chaotic, transition to grid over 3 seconds
        const time = state.clock.getElapsedTime();
        const progress = Math.min(Math.max((time - 0.5) / 3, 0), 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease out

        const positions = mesh.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count * 3; i++) {
            // Lerp
            positions[i] = randomPositions[i] + (gridPositions[i] - randomPositions[i]) * eased;
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;

        // Slowly rotate the whole system once structured
        if (progress >= 1) {
            mesh.current.rotation.y += 0.001;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[currentPositions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#2E5CFF" // Electric Blue
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
}

export function BackgroundParticles() {
    return (
        <div className="absolute inset-0 z-0 bg-canvas">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ParticleField />
                <fog attach="fog" args={['#ffffff', 10, 30]} />
            </Canvas>
            {/* Gradient overlay to fade bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas pointer-events-none" />
        </div>
    );
}
