
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { AgentSelector } from '@/components/chat/AgentSelector';
import { ChatThread } from '@/components/chat/ChatThread';
import { ChatInput } from '@/components/chat/ChatInput';
import { ArtifactsList } from '@/components/chat/ArtifactsList';

import { agents } from '@/data/agents';
import { projects } from '@/data/projects';
import { chatMessages, ChatMessage } from '@/data/messages';
import { artifacts } from '@/data/artifacts';

export default function ProjectChat() {
  const { id } = useParams<{ id: string }>();
  const [projectId, setProjectId] = useState<string>(id || '');
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [projectArtifacts, setProjectArtifacts] = useState<typeof artifacts>([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const project = projects.find(p => p.id === projectId);
  
  // Filter project agents
  const projectAgents = agents.filter(agent => 
    project?.teamIds.includes(agent.id)
  );

  // Load messages when project or agent changes
  useEffect(() => {
    if (projectId) {
      const projectMessages = chatMessages[projectId] || [];
      setMessages(projectMessages);
      
      // Filter artifacts for this project
      const filteredArtifacts = artifacts.filter(a => a.projectId === projectId);
      setProjectArtifacts(filteredArtifacts);
    }
  }, [projectId, selectedAgent]);
  
  const handleSendMessage = (content: string) => {
    // Create new user message
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      projectId,
      agentId: null,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: "user"
    };
    
    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate agent response after delay
    setTimeout(() => {
      const agentResponse: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        projectId,
        agentId: selectedAgent.id,
        content: `Como ${selectedAgent.role}, posso ajudá-lo com isso. Nosso projeto "${project?.title}" está avançando bem. Como posso contribuir especificamente com esta questão?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: "agent"
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, agentResponse]);
    }, 2000);
  };

  if (!project) {
    return (
      <MainLayout>
        <div className="p-6">
          <h1 className="font-playfair text-2xl">Projeto não encontrado</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout className="p-0 flex flex-col h-screen">
      <div className="flex-1 flex overflow-hidden">
        {/* Agent Sidebar */}
        <div className="hidden md:block">
          <AgentSelector 
            agents={projectAgents} 
            selectedAgent={selectedAgent}
            onSelectAgent={setSelectedAgent}
          />
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Project & Agent Info Header */}
          <div className="p-4 border-b border-slate-800 bg-olympus-card-bg flex items-center justify-between">
            <div>
              <h1 className="font-playfair text-lg font-medium">{project.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="text-sm">{selectedAgent.role}</div>
                <div className="font-cinzel text-xs text-olympus-accent">{selectedAgent.gods}</div>
              </div>
            </div>
            
            {/* Mobile agent selector dropdown would go here */}
            <div className="md:hidden">
              {/* Dropdown for agent selection on mobile */}
            </div>
          </div>
          
          {/* Messages Thread */}
          <ChatThread 
            messages={messages} 
            agents={agents}
            isTyping={isTyping}
          />
          
          {/* Artifacts List */}
          <ArtifactsList artifacts={projectArtifacts} />
          
          {/* Chat Input */}
          <ChatInput 
            onSendMessage={handleSendMessage}
            placeholder={`Digite sua mensagem para ${selectedAgent.role}...`}
            disabled={isTyping}
          />
        </div>
      </div>
    </MainLayout>
  );
}
