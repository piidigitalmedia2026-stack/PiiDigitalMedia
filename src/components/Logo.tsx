import React from "react";
import Image from "next/image";

// The logo file has a wide blank margin around the mark. The file itself is
// left untouched; the margin is only hidden here so the mark fills the box.
const MARK_SCALE = 1.8;
const MARK_OFFSET_X = 0.405;
const MARK_OFFSET_Y = 0.365;

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span
      className="relative block overflow-hidden shrink-0 rounded-[13%]"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.webp"
        alt="PII Digital Media logo"
        width={1254}
        height={1254}
        className="absolute max-w-none"
        style={{
          width: size * MARK_SCALE,
          height: size * MARK_SCALE,
          left: -size * MARK_OFFSET_X,
          top: -size * MARK_OFFSET_Y,
        }}
      />
    </span>
  );
}
