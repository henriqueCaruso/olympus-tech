
import React from 'react';
import { LightbulbIcon, ClipboardList, Code, TestTube, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TimelinePhase {
  name: string;
  status: "completed" | "in-progress" | "pending";
  icon: React.ReactNode;
}

export interface ProgressTimelineProps {
  phases: TimelinePhase[];
}

export function ProgressTimeline({ phases }: ProgressTimelineProps) {
  return (
    <div className="w-full">
      <h3 className="font-playfair text-xl mb-6">Progresso do Projeto</h3>
      
      <div className="relative">
        {/* Timeline Bar */}
        <div className="absolute top-8 left-0 right-0 h-[2px] bg-slate-800" />
        
        {/* Phases */}
        <div className="relative flex justify-between">
          {phases.map((phase, index) => (
            <TimelineItem 
              key={index}
              phase={phase}
              isFirst={index === 0}
              isLast={index === phases.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  phase: TimelinePhase;
  isFirst: boolean;
  isLast: boolean;
}

function TimelineItem({ phase, isFirst, isLast }: TimelineItemProps) {
  // Get color based on status
  const getStatusColor = () => {
    switch (phase.status) {
      case "completed":
        return "text-olympus-status-completed border-olympus-status-completed";
      case "in-progress":
        return "text-olympus-status-progress border-olympus-status-progress";
      case "pending":
      default:
        return "text-slate-500 border-slate-800";
    }
  };

  // Get background color based on status
  const getBackgroundColor = () => {
    switch (phase.status) {
      case "completed":
        return "bg-olympus-status-completed";
      case "in-progress":
        return "bg-olympus-status-progress";
      case "pending":
      default:
        return "bg-slate-800";
    }
  };

  return (
    <div className="flex flex-col items-center relative z-10">
      {/* Icon */}
      <div className={cn(
        "w-16 h-16 rounded-full border-2 flex items-center justify-center bg-olympus-card-bg",
        getStatusColor()
      )}>
        {React.cloneElement(phase.icon as React.ReactElement, { 
          size: 24, 
          className: cn(getStatusColor().split(' ')[0]) 
        })}
      </div>
      
      {/* Dot indicator */}
      <div className={cn(
        "w-4 h-4 rounded-full mt-3",
        getBackgroundColor()
      )} />
      
      {/* Phase name */}
      <div className="text-center mt-2">
        <h4 className={cn(
          "font-medium text-sm",
          phase.status === "pending" ? "text-slate-500" : "text-white"
        )}>
          {phase.name}
        </h4>
        <span className={cn(
          "text-xs font-medium",
          phase.status === "completed" ? "text-olympus-status-completed" : 
          phase.status === "in-progress" ? "text-olympus-status-progress" : 
          "text-slate-500"
        )}>
          {phase.status === "completed" ? "Concluído" : 
           phase.status === "in-progress" ? "Em andamento" : 
           "Pendente"}
        </span>
      </div>
    </div>
  );
}

export const getDefaultPhases = (): TimelinePhase[] => [
  {
    name: "Concepção",
    status: "completed",
    icon: <LightbulbIcon />
  },
  {
    name: "Planejamento",
    status: "completed",
    icon: <ClipboardList />
  },
  {
    name: "Desenvolvimento",
    status: "in-progress",
    icon: <Code />
  },
  {
    name: "Testes",
    status: "pending",
    icon: <TestTube />
  },
  {
    name: "Lançamento",
    status: "pending",
    icon: <Rocket />
  }
];
