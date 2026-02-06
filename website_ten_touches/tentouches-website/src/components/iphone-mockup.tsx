import Image from "next/image";

interface IPhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function IPhoneMockup({ src, alt, className = "", priority = false }: IPhoneMockupProps) {
  return (
    <div className={`iphone-frame ${className}`}>
      <div className="iphone-screen">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="w-full h-auto block"
          priority={priority}
        />
      </div>
    </div>
  );
}
