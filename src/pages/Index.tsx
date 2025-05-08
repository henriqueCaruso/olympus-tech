
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { TemplateCard } from "@/components/ui/template-card";
import { MetricCard } from "@/components/ui/metric-card";
import { Plus } from "lucide-react";
import { projects } from "@/data/projects";
import { templates } from "@/data/templates";
import { metrics } from "@/data/metrics";

export default function Index() {
  const navigate = useNavigate();
  
  // Format current date
  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  // Capitalize first letter of date
  const capitalizeDate = (date: string) => {
    return date.charAt(0).toUpperCase() + date.slice(1);
  };

  return (
    <MainLayout>
      {/* Welcome Header Section */}
      <section className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center animate-fade-in">
        <div>
          <h1 className="font-playfair font-semibold text-3xl mb-1">
            Bem-vindo, João
          </h1>
          <p className="text-olympus-text-secondary">
            {capitalizeDate(formatDate())}
          </p>
        </div>
        
        <Button 
          className="mt-4 md:mt-0 bg-olympus-accent text-black hover:bg-olympus-accent/90 hover:text-black"
          onClick={() => navigate("/novo-projeto")}
        >
          <Plus size={18} className="mr-2" />
          Novo Projeto
        </Button>
      </section>
      
      {/* Projects Section */}
      <section className="mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-playfair font-semibold text-xl">Seus Projetos</h2>
          <a 
            href="/meus-projetos"
            className="text-sm text-olympus-accent hover:underline"
          >
            Ver todos
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              status={project.status}
              progress={project.progress}
              lastModified={project.lastModified}
              onClick={() => navigate(`/projeto/${project.id}`)}
              className={{ "": 0.1 * index + 0.2 } as unknown as string}
            />
          ))}
        </div>
      </section>
      
      {/* Templates Section */}
      <section className="mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-playfair font-semibold text-xl">Templates Rápidos</h2>
          <a 
            href="/templates"
            className="text-sm text-olympus-accent hover:underline"
          >
            Ver todos
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto pb-2">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              name={template.name}
              description={template.description}
              icon={template.icon}
              onClick={() => navigate(`/novo-projeto?template=${template.id}`)}
            />
          ))}
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-playfair font-semibold text-xl mb-4">Métricas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map(metric => (
            <MetricCard
              key={metric.id}
              name={metric.name}
              value={metric.value}
              max={metric.max}
              unit={metric.unit}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
