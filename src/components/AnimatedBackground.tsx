import * as React from "react";
import { motion } from "framer-motion";

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  currentX?: number;
  currentY?: number;
}

interface Connection {
  from: number;
  to: number;
  distance: number;
}

const AnimatedBackground: React.FC = () => {
  const [dots, setDots] = React.useState<Dot[]>([]);
  const [connections, setConnections] = React.useState<Connection[]>([]);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse movement tracking
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  React.useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = [];
      const dotCount = isMobile ? 40 : 60; // Fewer dots on mobile

      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100, // Percentage
          y: Math.random() * 100, // Percentage
          size: Math.random() * 3 + 1.5, // 1.5-4.5px
          opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9
          duration: Math.random() * 25 + 20, // 20-45 seconds
          delay: Math.random() * 8, // 0-8 seconds delay
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  // Calculate connections between nearby dots (skip on mobile for performance)
  React.useEffect(() => {
    if (dots.length === 0 || isMobile) {
      setConnections([]);
      return;
    }

    const newConnections: Connection[] = [];
    const maxDistance = 200; // Maximum distance for connections

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = (dots[j].x - dots[i].x) * (window.innerWidth / 100);
        const dy = (dots[j].y - dots[i].y) * (window.innerHeight / 100);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          newConnections.push({
            from: i,
            to: j,
            distance,
          });
        }
      }
    }

    setConnections(newConnections);
  }, [dots, isMobile]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Connection lines - hidden on mobile */}
      {!isMobile && (
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((connection, index) => {
            const fromDot = dots[connection.from];
            const toDot = dots[connection.to];
            if (!fromDot || !toDot) return null;

            const opacity = Math.max(0, 0.3 - (connection.distance / 500));
            
            return (
              <motion.line
                key={`connection-${index}`}
                x1={`${fromDot.x}%`}
                y1={`${fromDot.y}%`}
                x2={`${toDot.x}%`}
                y2={`${toDot.y}%`}
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-gray-400/20 dark:text-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            );
          })}
        </svg>
      )}

      {/* Animated dots with mouse interaction */}
      {dots.map((dot) => {
        // Calculate mouse influence on dot position
        const mouseInfluence = 15; // How much the mouse affects movement
        const distanceToMouse = Math.sqrt(
          Math.pow(dot.x - mousePosition.x, 2) + Math.pow(dot.y - mousePosition.y, 2)
        );
        const influence = Math.max(0, 1 - distanceToMouse / 50); // Influence decreases with distance
        const mouseOffsetX = (mousePosition.x - dot.x) * influence * (mouseInfluence / 100);
        const mouseOffsetY = (mousePosition.y - dot.y) * influence * (mouseInfluence / 100);

        return (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-gray-500/80"
            style={{
              width: dot.size,
              height: dot.size,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              x: [mouseOffsetX, 20 + mouseOffsetX, -15 + mouseOffsetX, 25 + mouseOffsetX, mouseOffsetX],
              y: [mouseOffsetY, -25 + mouseOffsetY, 15 + mouseOffsetY, -20 + mouseOffsetY, mouseOffsetY],
              opacity: [dot.opacity, dot.opacity * 0.4, dot.opacity, dot.opacity * 0.7, dot.opacity],
              scale: [1 + influence * 0.3, 1.2 + influence * 0.2, 0.8 + influence * 0.1, 1.1 + influence * 0.2, 1 + influence * 0.3],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
      
      {/* Enhanced gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-200/[0.04] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/[0.04] via-transparent to-accent/[0.02]" />
      
      {/* Floating accent particles */}
      {Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-accent/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, -120],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 0.8, 0],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            delay: Math.random() * 15,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
