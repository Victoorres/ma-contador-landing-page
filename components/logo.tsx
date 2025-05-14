import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12">
        <Image src="/ma-logo.png" alt="UP Club Logo" fill className="object-contain" priority />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold leading-tight ${sizes[size]}`}>Matheus Amancio</span>
        <span className="text-xs font-medium text-amber-700">Contador CRC-GO 029418/O</span>
      </div>
    </div>
  );
}
