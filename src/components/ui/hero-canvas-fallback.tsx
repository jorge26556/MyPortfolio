/**
 * Static stand-in for machines that cannot afford the WebGL hero: reduced-motion
 * visitors, phones, low-core laptops, and software-rendered WebGL. Same
 * composition and colour story, zero JavaScript and zero GPU cost.
 *
 * This lives apart from hero-canvas.tsx on purpose. The hero imports the
 * fallback statically, so if the two shared a module every visitor would
 * download the whole three.js graph just to render these gradients.
 */
export function HeroCanvasFallback({ animate = false }: { animate?: boolean }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute top-[18%] right-[6%] h-[26rem] w-[26rem] rounded-full bg-linear-to-br from-primary/45 via-violet-400/30 to-sky-300/20 blur-[90px] sm:h-[32rem] sm:w-[32rem] ${
          animate ? "animate-float" : ""
        }`}
      />
      <div className="absolute bottom-[10%] left-[4%] h-[20rem] w-[20rem] rounded-full bg-linear-to-tr from-indigo-400/25 to-transparent blur-[100px]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
