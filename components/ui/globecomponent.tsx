import Globe from "@/components/ui/globe";

export function GlobeDemo() {
    return (
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60">
        <span className="pointer-events-none whitespace-pre-wrap ">
          Globe Loading
        </span>
        <Globe className="top-28" />
      </div>
    );
  }
  