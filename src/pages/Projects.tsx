
import { MainLayout } from "@/components/layout/MainLayout";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projectsList] = useState(projects);
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-playfair text-2xl font-semibold">Meus Projetos</h1>
          <button
            onClick={() => navigate("/novo-projeto")}
            className="bg-olympus-accent text-black px-4 py-2 rounded-md hover:bg-olympus-accent/90 transition-colors"
          >
            Novo Projeto
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              status={project.status}
              progress={project.progress}
              lastModified={project.lastModified}
              onClick={() => navigate(`/projeto/${project.id}`)}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
