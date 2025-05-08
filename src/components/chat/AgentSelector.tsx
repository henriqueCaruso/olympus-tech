
import React from 'react';
import { cn } from "@/lib/utils";
import { Agent } from '@/data/agents';

interface AgentSelectorProps {
  agents: Agent[];
  selectedAgent: Agent;
  onSelectAgent: (agent: Agent) => void;
}

export function AgentSelector({ agents, selectedAgent, onSelectAgent }: AgentSelectorProps) {
  return (
    <div className="w-60 h-full bg-olympus-card-bg border-r border-slate-800 overflow-y-auto">
      <div className="p-4 border-b border-slate-800">
        <h2 className="font-playfair text-lg font-medium">Agentes</h2>
        <p className="text-xs text-slate-400 mt-1">Selecione um agente para conversar</p>
      </div>
      
      <div className="p-2">
        {agents.map((agent) => (
          <AgentItem
            key={agent.id}
            agent={agent}
            isSelected={agent.id === selectedAgent.id}
            onSelect={() => onSelectAgent(agent)}
          />
        ))}
      </div>
    </div>
  );
}

interface AgentItemProps {
  agent: Agent;
  isSelected: boolean;
  onSelect: () => void;
}

function AgentItem({ agent, isSelected, onSelect }: AgentItemProps) {
  // Define colors for different icon types
  const getIconColor = () => {
    switch (agent.iconType) {
      case "leadership": return "bg-purple-700";
      case "technical": return "bg-blue-700";
      case "design": return "bg-pink-700";
      case "product": return "bg-green-700";
      default: return "bg-slate-700";
    }
  };

  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex items-center w-full p-3 rounded-lg transition-colors text-left mb-1",
        isSelected 
          ? "bg-slate-800 border-l-2 border-olympus-accent" 
          : "hover:bg-slate-800"
      )}
    >
      <div className={cn("w-9 h-9 rounded-full flex items-center justify-center mr-3", getIconColor())}>
        <span className="text-sm font-bold">{agent.role.substring(0, 1)}</span>
      </div>
      
      <div>
        <div className="text-sm font-medium">{agent.role}</div>
        <div className="font-cinzel text-xs text-olympus-accent">{agent.gods}</div>
      </div>
    </button>
  );
}
