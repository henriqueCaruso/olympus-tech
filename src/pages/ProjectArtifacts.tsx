
import { MainLayout } from "@/components/layout/MainLayout";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { useState } from "react";
import { artifacts } from "@/data/artifacts";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { ArtifactFilter } from "@/components/artifacts/ArtifactFilter";
import { Artifact } from "@/data/artifacts";

const ProjectArtifacts = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const projectArtifacts = artifacts.filter((a) => a.projectId === id);
  
  const [filteredArtifacts, setFilteredArtifacts] = useState<Artifact[]>(projectArtifacts);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  const handleFilterChange = (type: string | null, format: string | null) => {
    let filtered = projectArtifacts;
    
    if (type) {
      filtered = filtered.filter(a => a.type === type);
    }
    
    if (format) {
      filtered = filtered.filter(a => a.format === format);
    }
    
    setFilteredArtifacts(filtered);
  };

  if (!project) {
    return (
      <MainLayout>
        <div className="container mx-auto">
          <h2 className="text-2xl font-playfair">Projeto não encontrado</h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto">
        <ProjectHeader project={project} />
        
        <div className="mb-6">
          <h2 className="text-xl font-playfair mb-4">Artefatos do Projeto</h2>
          
          <ArtifactFilter onFilterChange={handleFilterChange} />
          
          {filteredArtifacts.length > 0 ? (
            <ArtifactGrid 
              artifacts={filteredArtifacts} 
              onSelect={setSelectedArtifact}
              selectedArtifact={selectedArtifact}
            />
          ) : (
            <div className="bg-olympus-card-bg p-8 rounded-lg text-center">
              <p className="text-olympus-text-secondary">Nenhum artefato encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectArtifacts;
