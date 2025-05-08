
import React from 'react';
import { cn } from '@/lib/utils';
import { Agent } from '@/data/agents';
import { Check } from 'lucide-react';

export interface AgentCardProps {
  agent: Agent;
  isSelected: boolean;
  onSelect: () => void;
}

export function AgentCard({ agent, isSelected, onSelect }: AgentCardProps) {
  // Define icon colors based on agent type
  const getIconBackground = () => {
    switch (agent.iconType) {
      case "leadership": return "bg-purple-700";
      case "technical": return "bg-blue-700";
      case "design": return "bg-pink-700";
      case "product": return "bg-green-700";
      default: return "bg-slate-700";
    }
  };

  return (
    <div 
      className={cn(
        "bg-slate-800 rounded-lg p-4 cursor-pointer transition-all border-2",
        isSelected ? "border-olympus-accent" : "border-transparent hover:border-slate-600"
      )}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-3">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", getIconBackground())}>
          <span className="text-sm font-bold">{agent.role.substring(0, 1)}</span>
        </div>
        
        <div 
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center border-2",
            isSelected ? "border-olympus-accent bg-olympus-accent text-black" : "border-slate-600"
          )}
        >
          {isSelected && <Check size={14} />}
        </div>
      </div>
      
      <h3 className="font-medium mb-2">{agent.role}</h3>
      <p className="text-sm text-slate-400 mb-3">{agent.description}</p>
      <div className="font-cinzel text-xs text-olympus-accent">{agent.gods}</div>
    </div>
  );
}
