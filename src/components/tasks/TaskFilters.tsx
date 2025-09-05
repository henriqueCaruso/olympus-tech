import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { Task } from '@/data/tasks';
import { projects } from '@/data/projects';
import { configurableAgents } from '@/data/agent-prompts';

interface TaskFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedProject: string;
  onProjectChange: (value: string) => void;
  selectedAgent: string;
  onAgentChange: (value: string) => void;
  selectedPriority: string;
  onPriorityChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const priorities: Task['priority'][] = ['Crítica', 'Alta', 'Média', 'Baixa'];
const statuses: Task['status'][] = ['Todo', 'Em Progresso', 'Em Revisão', 'Concluído', 'Bloqueado'];

export function TaskFilters({
  searchTerm,
  onSearchChange,
  selectedProject,
  onProjectChange,
  selectedAgent,
  onAgentChange,
  selectedPriority,
  onPriorityChange,
  selectedStatus,
  onStatusChange,
  onClearFilters,
  hasActiveFilters
}: TaskFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar tarefas..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-1">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filtros:</span>
        </div>

        <Select value={selectedProject} onValueChange={onProjectChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Projeto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os projetos</SelectItem>
            {projects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
                {project.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedAgent} onValueChange={onAgentChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Agente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os agentes</SelectItem>
            {configurableAgents.map((agent) => (
              <SelectItem key={agent.id} value={agent.id}>
                {agent.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedPriority} onValueChange={onPriorityChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Prioridade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {priorities.map((priority) => (
              <SelectItem key={priority} value={priority}>
                {priority}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedStatus} onValueChange={onStatusChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClearFilters}
            className="ml-auto"
          >
            <X className="w-4 h-4 mr-1" />
            Limpar
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {searchTerm && (
            <Badge variant="secondary" className="gap-1">
              <Search className="w-3 h-3" />
              "{searchTerm}"
            </Badge>
          )}
          {selectedProject !== 'all' && (
            <Badge variant="secondary">
              Projeto: {projects.find(p => p.id === selectedProject)?.title}
            </Badge>
          )}
          {selectedAgent !== 'all' && (
            <Badge variant="secondary">
              Agente: {configurableAgents.find(a => a.id === selectedAgent)?.name}
            </Badge>
          )}
          {selectedPriority !== 'all' && (
            <Badge variant="secondary">
              Prioridade: {selectedPriority}
            </Badge>
          )}
          {selectedStatus !== 'all' && (
            <Badge variant="secondary">
              Status: {selectedStatus}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}