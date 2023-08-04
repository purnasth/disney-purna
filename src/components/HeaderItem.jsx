import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white text-xl flex items-center gap-3 cursor-pointer mb-2">
      <Icon />
      <div className="group relative">
        <h2 className="hidden lg:block">{name}</h2>
        <div className="absolute left-0 -bottom-3 w-full h-0.5 rounded-2xl bg-white transition-opacity opacity-0 group-hover:opacity-100" />
      </div>
    </div>
  );
}

export default HeaderItem;
