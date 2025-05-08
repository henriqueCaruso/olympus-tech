
import { cn } from "@/lib/utils";
import { Globe, Smartphone, ShoppingCart, BarChart as ChartBar } from "lucide-react";

export interface TemplateCardProps {
  name: string;
  description: string;
  icon: "globe" | "smartphone" | "shopping-cart" | "chart-bar";
  onClick: () => void;
  className?: string;
}

export function TemplateCard({
  name,
  description,
  icon,
  onClick,
  className,
}: TemplateCardProps) {
  // Get icon component based on icon name
  const IconComponent = () => {
    switch (icon) {
      case "globe":
        return <Globe size={24} />;
      case "smartphone":
        return <Smartphone size={24} />;
      case "shopping-cart":
        return <ShoppingCart size={24} />;
      case "chart-bar":
        return <ChartBar size={24} />;
      default:
        return <Globe size={24} />;
    }
  };

  return (
    <div 
      className={cn(
        "bg-olympus-card-bg rounded-lg p-5 cursor-pointer hover:shadow-lg transition-shadow animate-fade-in",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-3 rounded-full bg-slate-800 flex items-center justify-center text-olympus-accent">
          <IconComponent />
        </div>
        
        <h4 className="font-playfair font-medium mb-1">{name}</h4>
        <p className="text-olympus-text-secondary text-sm line-clamp-1">{description}</p>
      </div>
    </div>
  );
}
