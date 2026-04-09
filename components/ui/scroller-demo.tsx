import { Scroller } from "@/components/ui/scroller-1";

export default function HorizontalWithButtonsDemo() {
  return (
      <div className="w-3/4">
        <Scroller
          childrenContainerClassName="gap-4"
          height="100%"
          overflow="x"
          width="100%"
          withButtons
        >
          {[...Array(4)].map((_, i) => (
            <div className="bg-[#171717] dark:bg-[#ededed] dark:text-[#171717] text-[#ededed] h-60 w-96 rounded-xl flex items-center justify-center snap-center" key={i}>Item {i + 1}</div>
          ))}
        </Scroller>
      </div>
  );
}
