// Pure CSS GPU-accelerated fluid background — zero JS, zero CPU load
export function FluidBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0A] pointer-events-none"
    >
      {/* Teal blob – upper left */}
      <div className="animate-blob-1 absolute -top-40 left-[5%] h-[700px] w-[700px] rounded-full bg-[#13678A] opacity-[0.13] blur-[140px]" />
      {/* Green blob – middle right */}
      <div className="animate-blob-2 absolute top-[25%] -right-20 h-[550px] w-[550px] rounded-full bg-[#9AEBA3] opacity-[0.07] blur-[160px]" />
      {/* Teal blob – lower center */}
      <div className="animate-blob-3 absolute -bottom-20 left-[20%] h-[800px] w-[800px] rounded-full bg-[#13678A] opacity-[0.09] blur-[180px]" />
      {/* Radial vignette */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#0A0A0A_100%)]" />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
    </div>
  );
}
