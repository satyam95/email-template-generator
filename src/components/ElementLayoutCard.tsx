import React from "react";
import { LucideIcon } from "lucide-react";

interface Layout {
  icon: LucideIcon;
  label: string;
}

interface ElementLayoutCardProps {
  layout: Layout;
}

const ElementLayoutCard: React.FC<ElementLayoutCardProps> = ({ layout }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer">
      {<layout.icon className="p-2 h-9 w-9 rounded-full" />}
      <h2 className="text-sm">{layout.label}</h2>
    </div>
  );
};

export default ElementLayoutCard;
