
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProjectHeader } from '@/components/project/ProjectHeader';
import { ActionCards } from '@/components/project/ActionCards';
import { ProgressTimeline, getDefaultPhases } from '@/components/project/ProgressTimeline';

import { projects } from '@/data/projects';
import { agents } from '@/data/agents';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <MainLayout>
        <div className="p-6">
          <h1 className="font-playfair text-2xl">Projeto não encontrado</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-olympus-accent text-black rounded-md"
          >
            Voltar para Dashboard
          </button>
        </div>
      </MainLayout>
    );
  }

  // Get project team info
  const projectTeam = project.teamIds.map(teamId => 
    agents.find(agent => agent.id === teamId)
  ).filter(Boolean);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <ProjectHeader project={project} />
        
        {/* Action Cards */}
        <ActionCards projectId={project.id} />
        
        {/* Project Team */}
        <div className="bg-olympus-card-bg rounded-lg p-6 mb-8">
          <h3 className="font-playfair text-lg mb-4">Equipe do Projeto</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projectTeam.map((agent, index) => (
              <div key={index} className="text-center p-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 mx-auto mb-2"></div>
                <div className="font-medium text-sm">{agent?.role}</div>
                <div className="font-cinzel text-xs text-olympus-accent">{agent?.gods}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress Timeline */}
        <div className="bg-olympus-card-bg rounded-lg p-6 overflow-x-auto">
          <ProgressTimeline phases={getDefaultPhases()} />
        </div>
      </div>
    </MainLayout>
  );
}
