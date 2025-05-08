
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { StepIndicator } from '@/components/new-project/StepIndicator';
import { AgentCard } from '@/components/new-project/AgentCard';
import { ProjectSummary } from '@/components/new-project/ProjectSummary';
import { agents } from '@/data/agents';
import { useNavigate } from 'react-router-dom';

// Step content components
interface BasicInfoStepProps {
  projectName: string;
  setProjectName: (name: string) => void;
  projectDescription: string;
  setProjectDescription: (description: string) => void;
  projectCategory: string;
  setProjectCategory: (category: string) => void;
}

function BasicInfoStep({
  projectName,
  setProjectName,
  projectDescription,
  setProjectDescription,
  projectCategory,
  setProjectCategory
}: BasicInfoStepProps) {
  const categories = ["E-commerce", "Website", "Aplicativo Mobile", "Sistema Web", "Dashboard", "Outro"];

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="projectName" className="block text-sm font-medium mb-2">
          Nome do Projeto
        </label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-olympus-accent"
          placeholder="Digite o nome do projeto"
        />
      </div>
      
      <div>
        <label htmlFor="projectCategory" className="block text-sm font-medium mb-2">
          Categoria
        </label>
        <select
          id="projectCategory"
          value={projectCategory}
          onChange={(e) => setProjectCategory(e.target.value)}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-olympus-accent"
        >
          <option value="" disabled>Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium mb-2">
          Descrição
        </label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          rows={4}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-olympus-accent resize-none"
          placeholder="Descreva o seu projeto em detalhes..."
        />
      </div>
    </div>
  );
}

interface TeamConfigStepProps {
  selectedAgentIds: string[];
  toggleAgentSelection: (agentId: string) => void;
}

function TeamConfigStep({ selectedAgentIds, toggleAgentSelection }: TeamConfigStepProps) {
  return (
    <div>
      <div className="mb-6 bg-slate-800 p-4 rounded-lg border-l-4 border-olympus-accent">
        <h3 className="font-medium mb-2">Dicas para montar sua equipe</h3>
        <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
          <li>Escolha um CEO para liderar a visão estratégica</li>
          <li>Um CTO é essencial para definir tecnologias</li>
          <li>Para interfaces, selecione um UX Designer</li>
          <li>A gestão do produto fica melhor com um Product Manager</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            isSelected={selectedAgentIds.includes(agent.id)}
            onSelect={() => toggleAgentSelection(agent.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function NewProject() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [selectedAgentIds, setSelectedAgentIds] = useState<string[]>([]);
  
  // Step configuration
  const steps = ["Início", "Configurar Equipe", "Detalhes do Projeto", "Personalizar IA", "Confirmar"];
  
  // Calculate estimated cost based on selections
  const basePrice = 100;
  const agentPrice = 25;
  const estimatedCost = basePrice + (selectedAgentIds.length * agentPrice);
  
  // Toggle agent selection
  const toggleAgentSelection = (agentId: string) => {
    if (selectedAgentIds.includes(agentId)) {
      setSelectedAgentIds(selectedAgentIds.filter(id => id !== agentId));
    } else {
      setSelectedAgentIds([...selectedAgentIds, agentId]);
    }
  };
  
  // Navigation handlers
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit project
      handleCreateProject();
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Form submission
  const handleCreateProject = () => {
    // In a real application, this would create the project
    // For now, just navigate back to dashboard
    navigate('/');
  };
  
  // Selected agents with details
  const selectedAgents = agents
    .filter(agent => selectedAgentIds.includes(agent.id))
    .map(agent => ({ id: agent.id, role: agent.role, gods: agent.gods }));

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicInfoStep
            projectName={projectName}
            setProjectName={setProjectName}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
            projectCategory={projectCategory}
            setProjectCategory={setProjectCategory}
          />
        );
      case 1:
        return (
          <TeamConfigStep
            selectedAgentIds={selectedAgentIds}
            toggleAgentSelection={toggleAgentSelection}
          />
        );
      default:
        return (
          <div className="py-20 text-center">
            <h3 className="text-xl mb-2">Em desenvolvimento</h3>
            <p className="text-slate-400">Esta etapa ainda está sendo implementada.</p>
          </div>
        );
    }
  };

  // Step validation
  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return projectName.trim() !== "" && projectCategory !== "";
      case 1:
        return selectedAgentIds.length > 0;
      default:
        return true;
    }
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-playfair text-2xl font-semibold">Criar Novo Projeto</h1>
        </div>
        
        <StepIndicator 
          steps={steps}
          currentStep={currentStep}
          onStepClick={(step) => {
            // Only allow going back to previous steps or current step
            if (step <= currentStep) {
              setCurrentStep(step);
            }
          }}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 bg-olympus-card-bg p-6 rounded-lg">
            <h2 className="font-playfair text-xl mb-6">
              {currentStep === 0 && "Informações Básicas"}
              {currentStep === 1 && "Configuração da Equipe"}
              {currentStep === 2 && "Detalhes do Projeto"}
              {currentStep === 3 && "Personalizar IA"}
              {currentStep === 4 && "Confirmar Detalhes"}
            </h2>
            
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              <button
                onClick={goToPreviousStep}
                disabled={currentStep === 0}
                className="px-6 py-2 border border-slate-600 rounded-md text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Voltar
              </button>
              
              <button
                onClick={goToNextStep}
                disabled={!canProceed()}
                className="px-6 py-2 bg-olympus-accent text-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === steps.length - 1 ? "Criar Projeto" : "Avançar"}
              </button>
            </div>
          </div>
          
          {/* Summary Panel */}
          <div className="md:col-span-1">
            <ProjectSummary
              projectName={projectName}
              projectCategory={projectCategory}
              selectedAgents={selectedAgents}
              estimatedCost={estimatedCost}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
