
import React from 'react';
import { Project } from '@/data/projects';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  // Get status color based on status
  const getStatusColor = () => {
    switch (project.status) {
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
    switch (project.status) {
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
    <div className="mb-6">
      <div className="flex justify-between items-start mb-2">
        <h1 className="font-playfair text-2xl font-semibold">{project.title}</h1>
        <span className={cn("text-sm font-medium py-1 px-3 rounded-full", getStatusColor())}>
          {project.status}
        </span>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-olympus-text-secondary">Progresso</span>
          <span className="text-sm font-medium">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" 
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)',
            '& > div': { backgroundColor: getProgressColor() } 
          }} 
        />
      </div>
      
      <p className="text-olympus-text-secondary mb-6">{project.description}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2 text-sm">
        <div>
          <div className="text-olympus-text-secondary mb-1">Data de início</div>
          <div className="font-medium">{project.startDate}</div>
        </div>
        <div>
          <div className="text-olympus-text-secondary mb-1">Estimativa de conclusão</div>
          <div className="font-medium">{project.estimatedEndDate}</div>
        </div>
        <div>
          <div className="text-olympus-text-secondary mb-1">Tokens utilizados</div>
          <div className="font-medium">{project.tokensUsed.toLocaleString()} de {project.tokensTotal.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-olympus-text-secondary mb-1">Custo atual</div>
          <div className="font-medium text-olympus-accent">R$ {project.costCurrent.toFixed(2)} de R$ {project.costTotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
