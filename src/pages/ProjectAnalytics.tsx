
import { MainLayout } from "@/components/layout/MainLayout";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { TokenUsageChart } from "@/components/analytics/TokenUsageChart";
import { ProgressMetrics } from "@/components/analytics/ProgressMetrics";
import { ResourceAllocation } from "@/components/analytics/ResourceAllocation";
import { Recommendations } from "@/components/analytics/Recommendations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectAnalytics = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

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
        
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="usage">Uso de Tokens</TabsTrigger>
            <TabsTrigger value="progress">Progresso</TabsTrigger>
            <TabsTrigger value="resources">Recursos</TabsTrigger>
            <TabsTrigger value="recommendations">Recomendações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="usage" className="space-y-6">
            <TokenUsageChart projectId={project.id} />
          </TabsContent>
          
          <TabsContent value="progress" className="space-y-6">
            <ProgressMetrics projectId={project.id} />
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-6">
            <ResourceAllocation projectId={project.id} />
          </TabsContent>
          
          <TabsContent value="recommendations" className="space-y-6">
            <Recommendations projectId={project.id} />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProjectAnalytics;
