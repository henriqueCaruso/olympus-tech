
import React from 'react';
import { FileText, Image, Code, FileCheck } from 'lucide-react';
import { Artifact } from '@/data/artifacts';

interface ArtifactsListProps {
  artifacts: Artifact[];
  onSelect?: (artifact: Artifact) => void;
}

export function ArtifactsList({ artifacts, onSelect }: ArtifactsListProps) {
  // Skip if no artifacts
  if (artifacts.length === 0) return null;
  
  return (
    <div className="p-4 border-t border-slate-800">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-playfair text-lg">Artefatos</h3>
        <button className="text-sm text-olympus-accent hover:underline">
          Ver todos
        </button>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact.id} artifact={artifact} onClick={() => onSelect?.(artifact)} />
        ))}
      </div>
    </div>
  );
}

interface ArtifactCardProps {
  artifact: Artifact;
  onClick?: () => void;
}

function ArtifactCard({ artifact, onClick }: ArtifactCardProps) {
  const getIcon = () => {
    switch (artifact.format) {
      case 'image':
        return <Image size={18} />;
      case 'code':
        return <Code size={18} />;
      case 'markdown':
        return <FileText size={18} />;
      default:
        return <FileCheck size={18} />;
    }
  };

  return (
    <button
      onClick={onClick}
      className="bg-slate-800 rounded-lg p-4 flex flex-col min-w-[180px] hover:bg-slate-700 transition-colors text-left animate-fade-in"
    >
      <div className="flex items-center mb-2 text-olympus-accent">
        {getIcon()}
      </div>
      <h4 className="font-medium text-sm mb-1">{artifact.title}</h4>
      <div className="text-xs text-slate-400 mt-auto">
        {artifact.format.charAt(0).toUpperCase() + artifact.format.slice(1)} • {artifact.createdAt}
      </div>
      <div className="text-xs text-olympus-accent font-cinzel mt-1">
        {artifact.createdBy}
      </div>
    </button>
  );
}
