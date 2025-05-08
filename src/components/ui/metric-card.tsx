
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  name: string;
  value: number;
  max: number;
  unit?: string;
  className?: string;
}

export function MetricCard({
  name,
  value,
  max,
  unit = "",
  className,
}: MetricCardProps) {
  // Calculate percentage for progress bar
  const percentage = Math.min(100, (value / max) * 100);
  
  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div 
      className={cn(
        "bg-olympus-card-bg rounded-lg p-5 shadow-md animate-fade-in",
        className
      )}
    >
      <h4 className="text-olympus-text-secondary text-sm mb-2">{name}</h4>
      
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-playfair font-semibold">
          {formatNumber(value)}{unit}
        </span>
        <span className="text-sm text-olympus-text-secondary">
          de {formatNumber(max)}{unit} {unit ? "" : "disponíveis"}
        </span>
      </div>
      
      <div className="mt-4 space-y-1">
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full", {
              "bg-olympus-status-completed": percentage <= 50,
              "bg-olympus-accent": percentage > 50 && percentage < 80,
              "bg-red-500": percentage >= 80
            })}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className="text-xs text-olympus-text-secondary text-right">
          {Math.round(percentage)}%
        </div>
      </div>
    </div>
  );
}
