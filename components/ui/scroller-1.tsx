import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button-1";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import clsx from "clsx";

type TOverflowType = "x" | "y" | "both";

interface ScrollerProps {
  children: React.ReactNode;
  overflow: TOverflowType;
  height?: number | string;
  width?: number | string;
  withButtons?: boolean;
  childrenContainerClassName?: string;
}

export const Scroller = ({
  children,
  overflow,
  height = "100%",
  width = "100%",
  withButtons,
  childrenContainerClassName
}: ScrollerProps) => {
  const items = React.Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTopOverlay, setShowTopOverlay] = useState(false);
  const [showBottomOverlay, setShowBottomOverlay] = useState(false);
  const [showLeftOverlay, setShowLeftOverlay] = useState(false);
  const [showRightOverlay, setShowRightOverlay] = useState(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastScrollByWheel, setLastScrollByWheel] = useState<boolean>(false);

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
      itemsRef.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    }
  };

  const handleButtonClick = (direction: "next" | "prev") => {
    if (!lastScrollByWheel) {
      scrollToIndex(direction === "next" ? currentIndex + 1 : currentIndex - 1);
    } else {
      let nearestIndex = currentIndex;
      for (let i = 0; i < itemsRef.current.length; i++) {
        const rect = itemsRef.current[i]?.getBoundingClientRect();
        if (overflow === "y") {
          if (direction === "next") {
            if (rect && rect.top - 80 > 0) {
              nearestIndex = i < itemsRef.current.length ? i + 1 : itemsRef.current.length;
              break;
            }
          } else {
            if (rect && rect.top - 80 > 0) {
              nearestIndex = i > 0 ? i - 1 : 0;
              break;
            }
          }
        } else if (overflow === "x" || overflow === "both") {
          if (direction === "next") {
            if (rect && rect.left > 0) {
              nearestIndex = i < itemsRef.current.length ? i + 1 : itemsRef.current.length;
              break;
            }
          } else {
            if (rect && rect.left > 0) {
              nearestIndex = i > 0 ? i - 1 : 0;
              break;
            }
          }
        }
      }
      setCurrentIndex(nearestIndex);
      scrollToIndex(nearestIndex);
    }
    setLastScrollByWheel(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = containerRef.current;
        setShowTopOverlay((overflow === "y" || overflow === "both") && scrollTop > 0);
        setShowBottomOverlay((overflow === "y" || overflow === "both") && scrollTop + clientHeight < scrollHeight);
        setShowLeftOverlay((overflow === "x" || overflow === "both") && scrollLeft > 0);
        setShowRightOverlay((overflow === "x" || overflow === "both") && scrollLeft + clientWidth < scrollWidth);
      }
    };

    handleScroll();
    const element = containerRef.current;
    element?.addEventListener("scroll", handleScroll);
    return () => element?.removeEventListener("scroll", handleScroll);
  }, [overflow]);

  return (
    <div
      className="relative overflow-hidden flex flex-col gap-2"
      style={{ width, height }}
    >
      {withButtons && (overflow === "y" || overflow === "both") && (
        <div className="flex justify-center gap-2 m-[1px] z-10">
          <Button
            aria-label="scroll top"
            svgOnly
            shape="rounded"
            size="small"
            type="secondary"
            onClick={() => handleButtonClick("prev")}
          >
            <ChevronUp size={16} />
          </Button>
          <Button
            aria-label="scroll bottom"
            svgOnly
            shape="rounded"
            size="small"
            type="secondary"
            onClick={() => handleButtonClick("next")}
          >
            <ChevronDown size={16} />
          </Button>
        </div>
      )}
      <div
        className={clsx(
          "flex relative hide-scrollbar overflow-auto",
          (overflow === "x" || overflow === "both") ? "flex-row" : "flex-col",
          childrenContainerClassName
        )}
        ref={containerRef}
        onWheel={() => setLastScrollByWheel(true)}
      >
        {items.map((child, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {withButtons && (overflow === "x" || overflow === "both") && (
        <div className="flex gap-6 mt-12 w-full justify-end pr-6 lg:pr-20">
          <Button
            aria-label="scroll left"
            svgOnly
            shape="square"
            size="large"
            type="primary"
            onClick={() => handleButtonClick("prev")}
            className="border-4 border-black shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[6px_6px_0_0_#1a1a1a] hover:-translate-y-1 hover:-translate-x-1"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            aria-label="scroll right"
            svgOnly
            shape="square"
            size="large"
            type="primary"
            onClick={() => handleButtonClick("next")}
            className="border-4 border-black shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[6px_6px_0_0_#1a1a1a] hover:-translate-y-1 hover:-translate-x-1"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      )}
      {/* Gradients removed for Brutalist theme */}
    </div>
  );
};
