import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(element);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}

// Predefined animation class sets for different effects
export const scrollVariants = {
    fadeUp: {
        hidden: 'opacity-0 translate-y-12',
        visible: 'opacity-100 translate-y-0',
    },
    fadeDown: {
        hidden: 'opacity-0 -translate-y-12',
        visible: 'opacity-100 translate-y-0',
    },
    fadeLeft: {
        hidden: 'opacity-0 translate-x-12',
        visible: 'opacity-100 translate-x-0',
    },
    fadeRight: {
        hidden: 'opacity-0 -translate-x-12',
        visible: 'opacity-100 translate-x-0',
    },
    scaleUp: {
        hidden: 'opacity-0 scale-90',
        visible: 'opacity-100 scale-100',
    },
    scaleRotate: {
        hidden: 'opacity-0 scale-90 -rotate-3',
        visible: 'opacity-100 scale-100 rotate-0',
    },
    blur: {
        hidden: 'opacity-0 blur-sm scale-95',
        visible: 'opacity-100 blur-0 scale-100',
    },
} as const;

export type ScrollVariant = keyof typeof scrollVariants;
