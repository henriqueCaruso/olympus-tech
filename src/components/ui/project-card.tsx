
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  title: string;
  description: string;
  status: "Em Progresso" | "Finalizado" | "Planejamento";
  progress: number;
  lastModified?: string;
  onClick: () => void;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  status,
  progress,
  lastModified,
  onClick,
  className,
}: ProjectCardProps) {
  // Get status color based on status
  const getStatusColor = () => {
    switch (status) {
      case "Em Progresso":
        return "bg-olympus-status-progress text-black";
      case "Finalizado":
        return "bg-olympus-status-completed text-white";
      case "Planejamento":
        return "bg-olympus-status-planning text-white";
      default:
        return "bg-olympus-status-pending text-white";
    }
  };
  
  // Get progress bar color based on status
  const getProgressColor = () => {
    switch (status) {
      case "Em Progresso":
        return "bg-olympus-status-progress";
      case "Finalizado":
        return "bg-olympus-status-completed";
      case "Planejamento":
        return "bg-olympus-status-planning";
      default:
        return "bg-olympus-status-pending";
    }
  };

  return (
    <div 
      className={cn(
        "bg-olympus-card-bg rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-playfair font-medium text-lg">{title}</h3>
        <span className={cn("text-xs font-medium py-1 px-2 rounded-full", getStatusColor())}>
          {status}
        </span>
      </div>
      
      <p className="text-olympus-text-secondary text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="space-y-2">
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full", getProgressColor())}
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-olympus-text-secondary">
          <span>{progress}% completo</span>
          {lastModified && <span>Modificado: {lastModified}</span>}
        </div>
      </div>
      
      <div className="mt-4">
        <Button
          onClick={onClick}
          variant="outline" 
          className="w-full border-olympus-accent text-olympus-accent hover:bg-olympus-accent hover:text-black"
        >
          Abrir
        </Button>
      </div>
    </div>
  );
}
