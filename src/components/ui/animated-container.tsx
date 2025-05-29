"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  stagger?: number
  className?: string
}

const AnimatedContainer = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ className, children, stagger = 0.1, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: stagger,
              delayChildren: 0.1
            }
          }
        }}
        className={cn("grid gap-6", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
AnimatedContainer.displayName = "AnimatedContainer"

export { AnimatedContainer } 