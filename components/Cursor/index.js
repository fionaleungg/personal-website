import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

const LAPTOP_BREAKPOINT = 1024;

const Cursor = () => {
  const { theme } = useTheme();
  const [isPointer, setIsPointer] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smoothing
  const x = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 25 });

  // Only show cursor on desktop (laptop breakpoint and up)
  useEffect(() => {
    setMounted(true);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= LAPTOP_BREAKPOINT);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Hide default cursor only when custom cursor is visible (desktop)
  useEffect(() => {
    if (mounted && isDesktop) {
      document.body.classList.add("custom-cursor-active");
    } else {
      document.body.classList.remove("custom-cursor-active");
    }
    return () => document.body.classList.remove("custom-cursor-active");
  }, [mounted, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => {
      mouseX.set(e.clientX - 15);
      mouseY.set(e.clientY - 15);
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
  }, [isDesktop, mouseX, mouseY]);

  if (!mounted || !isDesktop) return null;

  const color = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x,
        y,
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
        scale: isPointer ? 2 : 1,
        opacity: isPointer ? 0.6 : 1,
      }}
    />
  );
};

export default Cursor;