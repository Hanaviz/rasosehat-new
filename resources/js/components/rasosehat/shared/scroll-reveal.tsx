import React from 'react';
import { useScrollAnimation, scrollVariants, type ScrollVariant } from '@/hooks/use-scroll-animation';

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: ScrollVariant;
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 800,
    className = '',
    threshold = 0.15,
    once = true,
}: ScrollRevealProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold, once });
    const { hidden, visible } = scrollVariants[variant];

    return (
        <div
            ref={ref}
            className={`transition-all ease-out ${isVisible ? visible : hidden} ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

// Stagger container: animates children one by one
interface StaggerRevealProps {
    children: React.ReactNode[];
    variant?: ScrollVariant;
    staggerDelay?: number;
    duration?: number;
    className?: string;
    childClassName?: string;
    threshold?: number;
}

export function StaggerReveal({
    children,
    variant = 'fadeUp',
    staggerDelay = 100,
    duration = 600,
    className = '',
    childClassName = '',
    threshold = 0.1,
}: StaggerRevealProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold });
    const { hidden, visible } = scrollVariants[variant];

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, index) => (
                <div
                    className={`transition-all ease-out ${isVisible ? visible : hidden} ${childClassName}`}
                    style={{
                        transitionDuration: `${duration}ms`,
                        transitionDelay: `${index * staggerDelay}ms`,
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}
