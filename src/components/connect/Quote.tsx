import Image from "next/image";
import PhotoBadge from "../PhotoBadge";

/** The tinted customer-quote panel used beside the monetise and compliance copy. */
export default function Quote({
  img,
  tint,
  logo,
  quote,
  name,
  role,
}: {
  img: string;
  tint: string;
  logo: React.ReactNode;
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[10px]">
      <Image
        src={img}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ background: tint }} />
      <PhotoBadge tone="dark" className="text-[length:var(--cust-body)]" />

      <div className="relative flex min-h-[clamp(320px,32vw,620px)] flex-col justify-end p-[clamp(20px,2.2vw,46px)] text-white">
        <div className="flex flex-1 items-center justify-center pb-[clamp(20px,2vw,44px)]">
          {logo}
        </div>
        <blockquote className="text-[length:var(--connect-quote)] font-medium leading-[1.42] tracking-[-0.015em]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-[clamp(14px,1.4vw,30px)] text-[length:var(--cust-body)] leading-[1.5]">
          <span className="font-semibold">{name},</span> {role}
        </p>
      </div>
    </div>
  );
}
