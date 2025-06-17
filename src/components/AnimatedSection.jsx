import { useState, useEffect, useRef } from "react";
function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
} = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasIntersected]);

  return {
    ref,
    isIntersecting: triggerOnce ? hasIntersected : isIntersecting,
  };
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
}) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const getAnimationClasses = () => {
    const baseClasses = "transition-base";

    if (!isIntersecting) {
      switch (animation) {
        case "slideUp":
          return `${baseClasses} slide-up-hidden`;
        case "slideLeft":
          return `${baseClasses} slide-left-hidden`;
        case "slideRight":
          return `${baseClasses} slide-right-hidden`;
        case "scaleIn":
          return `${baseClasses} scale-hidden`;
        default:
          return `${baseClasses} fade-hidden`;
      }
    }

    switch (animation) {
      case "slideUp":
        return `${baseClasses} slide-up-visible`;
      case "slideLeft":
        return `${baseClasses} slide-left-visible`;
      case "slideRight":
        return `${baseClasses} slide-right-visible`;
      case "scaleIn":
        return `${baseClasses} scale-visible`;
      default:
        return `${baseClasses} fade-visible`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
