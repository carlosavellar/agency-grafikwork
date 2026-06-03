"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/assets/imagem-HIRO-animated.svg",
  "/assets/hero-2.jpg",
  "/assets/hero-3.jpg",
];

const rotationInterval = 15 * 1000;

export default function HeroBackground() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, rotationInterval);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((image, index) => (
        <Image
          key={image}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
        />
      ))}
    </>
  );
}
