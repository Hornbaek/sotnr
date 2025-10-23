export const RunicDivider = () => {
  return (
    <div className="w-full flex items-center justify-center my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4a259] to-transparent opacity-50"></div>
      <div className="mx-4 flex gap-2">
        <div className="w-2 h-2 rotate-45 bg-[#d4a259] runic-pulse"></div>
        <div className="w-2 h-2 rotate-45 bg-[#d4a259] runic-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 rotate-45 bg-[#d4a259] runic-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-[#d4a259] via-[#d4a259] to-transparent opacity-50"></div>
    </div>
  );
};
