import React from "react";

export default function GlassCard({ icon, title, value }) {
  return (
    <div className="w-full max-w-xs mx-auto px-20 hover:scale-110 transition-all duration-500 ">
      <div className="border-2 border-white/20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center gap-4 bg-white/10">
        {/* Render icon directly */}
        {icon}

        {/* Render title */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Render value */}
        <h4 className="text-2xl font-bold">{value}</h4>
      </div>
    </div>
  );
}
