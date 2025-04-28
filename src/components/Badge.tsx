import React from "react";

type BadgeProps = {
  text: string;
};

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center bg-[#00ccb120] text-[#0DAE94] text-sm font-medium px-4 py-2 rounded-[6px] space-x-2 shadow-md">
      {/* Dot with Ping Effect */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DAE94] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0DAE94]"></span>
      </span>

      {/* Text */}
      <span>{text}</span>
    </div>
  );
};

export default Badge;
