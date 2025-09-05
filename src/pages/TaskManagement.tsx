import React, { useState, useMemo } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { KanbanBoard } from '@/components/kanban/KanbanBoard';
import { TaskFilters } from '@/components/tasks/TaskFilters';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tasks, Task } from '@/data/tasks';
import { projects } from '@/data/projects';
import { getAgentById } from '@/data/agent-prompts';
import { LayoutGrid, List, Plus, Calendar, User, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TaskManagement() {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [view, setView] = useState<'kanban' | 'list'>('kanban');
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedAgent, setSelectedAgent] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredTasks = useMemo(() => {
    return taskList.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesProject = selectedProject === 'all' || task.projectId === selectedProject;
      const matchesAgent = selectedAgent === 'all' || task.assignedAgent === selectedAgent;
      const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
      const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
      
      return matchesSearch && matchesProject && matchesAgent && matchesPriority && matchesStatus;
    });
  }, [taskList, searchTerm, selectedProject, selectedAgent, selectedPriority, selectedStatus]);

  const hasActiveFilters = searchTerm !== '' || selectedProject !== 'all' || 
                          selectedAgent !== 'all' || selectedPriority !== 'all' || selectedStatus !== 'all';

  const handleTaskUpdate = (taskId: string, updates: Partial<Task>) => {
    setTaskList(prev => prev.map(task => 
      task.id === taskId ? { ...task, ...updates, updatedAt: new Date().toISOString() } : task
    ));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedProject('all');
    setSelectedAgent('all');
    setSelectedPriority('all');
    setSelectedStatus('all');
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'Crítica': return 'text-red-500';
      case 'Alta': return 'text-orange-500';
      case 'Média': return 'text-yellow-500';
      case 'Baixa': return 'text-green-500';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'Concluído': return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Em Progresso': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'Em Revisão': return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
      case 'Bloqueado': return 'bg-red-500/10 text-red-700 border-red-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-playfair font-semibold text-3xl">Gerenciamento de Tarefas</h1>
            <p className="text-muted-foreground">
              Visualize e gerencie todas as suas tarefas em um só lugar
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Nova Tarefa
            </Button>
            
            <div className="flex border rounded-lg p-1">
              <Button
                variant={view === 'kanban' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('kanban')}
                className="gap-1"
              >
                <LayoutGrid className="w-4 h-4" />
                Kanban
              </Button>
              <Button
                variant={view === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('list')}
                className="gap-1"
              >
                <List className="w-4 h-4" />
                Lista
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <TaskFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedProject={selectedProject}
              onProjectChange={setSelectedProject}
              selectedAgent={selectedAgent}
              onAgentChange={setSelectedAgent}
              selectedPriority={selectedPriority}
              onPriorityChange={setSelectedPriority}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredTasks.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Em Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {filteredTasks.filter(t => t.status === 'Em Progresso').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Concluídas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {filteredTasks.filter(t => t.status === 'Concluído').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Bloqueadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {filteredTasks.filter(t => t.status === 'Bloqueado').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <Tabs value={view} className="space-y-4">
          <TabsContent value="kanban">
            <KanbanBoard
              tasks={filteredTasks}
              onTaskUpdate={handleTaskUpdate}
              className="min-h-[600px]"
            />
          </TabsContent>
          
          <TabsContent value="list">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {filteredTasks.map((task) => (
                    <div key={task.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{task.title}</h3>
                            <Badge className={cn("text-xs", getStatusColor(task.status))}>
                              {task.status}
                            </Badge>
                            <div className={cn("w-2 h-2 rounded-full", getPriorityColor(task.priority).replace('text-', 'bg-'))} />
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {task.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {task.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Avatar className="w-5 h-5">
                              <AvatarFallback className="text-xs">
                                {getAgentById(task.assignedAgent)?.name.substring(0, 1) || 'A'}
                              </AvatarFallback>
                            </Avatar>
                            <span>{getAgentById(task.assignedAgent)?.name || 'Agente'}</span>
                          </div>
                          
                          {task.dueDate && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(task.dueDate).toLocaleDateString('pt-BR')}</span>
                            </div>
                          )}
                          
                          <div className="text-xs">
                            Projeto: {projects.find(p => p.id === task.projectId)?.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}