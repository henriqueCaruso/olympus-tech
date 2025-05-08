
import { useState } from "react";
import { Artifact } from "@/data/artifacts";
import { MessageSquare, FileCode, FileText, Image, Info } from "lucide-react";

interface ArtifactGridProps {
  artifacts: Artifact[];
  onSelect: (artifact: Artifact) => void;
  selectedArtifact: Artifact | null;
}

export const ArtifactGrid = ({ artifacts, onSelect, selectedArtifact }: ArtifactGridProps) => {
  const getArtifactIcon = (type: string, format: string) => {
    switch (format) {
      case "code":
        return <FileCode className="h-6 w-6" />;
      case "markdown":
      case "pdf":
        return <FileText className="h-6 w-6" />;
      case "image":
        return <Image className="h-6 w-6" />;
      default:
        return <Info className="h-6 w-6" />;
    }
  };

  const getArtifactTypeColor = (type: string) => {
    switch (type) {
      case "document":
        return "bg-blue-900 text-white";
      case "requirements":
        return "bg-purple-900 text-white";
      case "analysis":
        return "bg-green-900 text-white";
      case "design":
        return "bg-pink-900 text-white";
      case "code":
        return "bg-amber-900 text-white";
      default:
        return "bg-slate-800 text-white";
    }
  };

  const getPreview = (artifact: Artifact) => {
    if (!selectedArtifact || selectedArtifact.id !== artifact.id) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
        <div className="bg-olympus-card-bg border border-slate-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-slate-700">
            <h3 className="text-lg font-medium">{artifact.title}</h3>
            <button
              onClick={() => onSelect(null as any)}
              className="text-olympus-text-secondary hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
            {artifact.format === "image" ? (
              <div className="flex justify-center">
                <img src="/placeholder.svg" alt={artifact.title} className="max-w-full h-auto" />
              </div>
            ) : artifact.format === "code" ? (
              <pre className="bg-olympus-background p-4 rounded-md overflow-x-auto">
                <code>{`// Sample code preview
function calculateProjectProgress(artifacts) {
  let totalProgress = 0;
  
  for (const artifact of artifacts) {
    // Calculate weighted progress
    totalProgress += artifact.completionPercentage * artifact.weight;
  }
  
  return Math.min(100, totalProgress);
}`}</code>
              </pre>
            ) : (
              <div className="prose prose-invert max-w-none">
                <h2>Documento de Amostra</h2>
                <p>Este é um conteúdo de exemplo para o artefato selecionado. Em uma implementação real, este conteúdo seria carregado dinamicamente com base no ID do artefato.</p>
                <h3>Seções do Documento</h3>
                <ul>
                  <li>Introdução e Objetivos</li>
                  <li>Metodologia Aplicada</li>
                  <li>Resultados e Análises</li>
                  <li>Conclusões e Recomendações</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in nisi finibus aliquet. Nam tristique gravida est, id fermentum nisl mollis vitae.</p>
              </div>
            )}
          </div>
          
          <div className="border-t border-slate-700 p-4 flex justify-between items-center">
            <div className="text-sm text-olympus-text-secondary">
              Criado por: {artifact.createdBy} às {artifact.createdAt}
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-olympus-background text-olympus-text-primary text-sm rounded hover:bg-slate-700">
                Baixar
              </button>
              <button className="px-3 py-1 bg-olympus-accent text-black text-sm rounded hover:bg-olympus-accent/90">
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artifacts.map((artifact) => (
          <div
            key={artifact.id}
            onClick={() => onSelect(artifact)}
            className="bg-olympus-background border border-slate-800 rounded-lg p-4 cursor-pointer hover:border-olympus-accent/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-olympus-card-bg">
                {getArtifactIcon(artifact.type, artifact.format)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1 truncate">{artifact.title}</h3>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getArtifactTypeColor(artifact.type)}`}>
                    {artifact.type}
                  </span>
                  <span className="text-xs text-olympus-text-secondary">
                    {artifact.createdAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedArtifact && getPreview(selectedArtifact)}
    </div>
  );
};
