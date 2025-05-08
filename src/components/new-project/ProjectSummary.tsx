
import React from 'react';

interface ProjectSummaryProps {
  projectName: string;
  projectCategory: string;
  selectedAgents: { id: string; role: string; gods: string }[];
  estimatedCost: number;
}

export function ProjectSummary({
  projectName,
  projectCategory,
  selectedAgents,
  estimatedCost
}: ProjectSummaryProps) {
  return (
    <div className="bg-olympus-card-bg rounded-lg p-5">
      <h3 className="font-playfair text-lg mb-4">Resumo do Projeto</h3>
      
      {/* Basic Info */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-olympus-text-secondary mb-2">Informações Básicas</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-slate-400">Nome</span>
            <span className="text-sm font-medium">{projectName || "Não definido"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-400">Categoria</span>
            <span className="text-sm font-medium">{projectCategory || "Não definida"}</span>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-olympus-text-secondary mb-2">Equipe</h4>
        {selectedAgents.length > 0 ? (
          <div className="space-y-2">
            {selectedAgents.map((agent) => (
              <div key={agent.id} className="flex justify-between">
                <span className="text-sm text-slate-400">{agent.role}</span>
                <span className="text-sm font-cinzel text-olympus-accent">{agent.gods}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-400">Nenhum agente selecionado</div>
        )}
      </div>
      
      {/* Estimativa */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-olympus-text-secondary mb-2">Estimativas</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-slate-400">Tokens</span>
            <span className="text-sm font-medium">~150.000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-400">Tempo estimado</span>
            <span className="text-sm font-medium">~14 dias</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-400">Complexidade</span>
            <span className="text-sm font-medium">Média</span>
          </div>
        </div>
      </div>
      
      {/* Total */}
      <div className="pt-4 border-t border-slate-700">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Custo Estimado</span>
          <span className="text-lg font-bold text-olympus-accent">R$ {estimatedCost.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
