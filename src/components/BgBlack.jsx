const BgBlack=({children})=>{
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-2 py-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="w-full h-full px-8 py-4 md:px-16 lg:px-24 xl:px-32">
        {children}
      </div>
    </div>
  );
}
export default BgBlack;