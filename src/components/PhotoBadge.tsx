import Image from "next/image";

/**
 * The AARUVO mark that sits on every picture, so an image is always read as
 * ours. It is a badge in the corner rather than a stamp across the middle —
 * a picture of a real place should still look like that place.
 */
export default function PhotoBadge({
  tone = "light",
  className = "",
}: {
  /** "light" = white pill on a photo, "dark" = white mark on a dark ground */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute bottom-[4%] left-[4%] z-10 flex items-center rounded-full px-[0.9em] py-[0.55em] ${
        tone === "light"
          ? "bg-white/92 shadow-[0_1px_3px_rgba(20,20,43,0.14),0_6px_18px_rgba(20,20,43,0.14)] backdrop-blur-[2px]"
          : "bg-black/35 backdrop-blur-[2px]"
      } ${className}`}
    >
      <Image
        src="/aaruvo-logo.png"
        alt="AARUVO"
        width={1918}
        height={479}
        className={`h-[1.15em] w-auto ${tone === "dark" ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
