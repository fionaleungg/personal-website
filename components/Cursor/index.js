import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Cursor = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addPointer = () => setIsPointer(true);
    const removePointer = () => setIsPointer(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a, button, .link").forEach((el) => {
      el.addEventListener("mouseenter", addPointer);
      el.addEventListener("mouseleave", removePointer);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, .link").forEach((el) => {
        el.removeEventListener("mouseenter", addPointer);
        el.removeEventListener("mouseleave", removePointer);
      });
    };
  }, []);

  if (!mounted) return null;

  const color = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 15,
        y: position.y - 15,
        scale: isPointer ? 2 : 1,
        opacity: isPointer ? 0.6 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: color,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: theme === "dark" ? "difference" : "normal",
      }}
    />
  );
};

export default Cursor;
