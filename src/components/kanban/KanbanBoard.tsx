import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Task } from '@/data/tasks';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, User, AlertCircle } from 'lucide-react';
import { getAgentById } from '@/data/agent-prompts';
import { cn } from '@/lib/utils';

interface KanbanBoardProps {
  tasks: Task[];
  onTaskUpdate: (taskId: string, updates: Partial<Task>) => void;
  className?: string;
}

const statusColumns = [
  { id: 'Todo', title: 'A Fazer', color: 'bg-muted' },
  { id: 'Em Progresso', title: 'Em Progresso', color: 'bg-blue-500/10' },
  { id: 'Em Revisão', title: 'Em Revisão', color: 'bg-amber-500/10' },
  { id: 'Concluído', title: 'Concluído', color: 'bg-green-500/10' },
  { id: 'Bloqueado', title: 'Bloqueado', color: 'bg-red-500/10' }
] as const;

export function KanbanBoard({ tasks, onTaskUpdate, className }: KanbanBoardProps) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    
    if (source.droppableId === destination.droppableId) return;

    const newStatus = destination.droppableId as Task['status'];
    const taskToUpdate = taskList.find(task => task.id === draggableId);
    
    if (taskToUpdate) {
      const updatedTask = { ...taskToUpdate, status: newStatus, updatedAt: new Date().toISOString() };
      const updatedTasks = taskList.map(task => 
        task.id === draggableId ? updatedTask : task
      );
      
      setTaskList(updatedTasks);
      onTaskUpdate(draggableId, { status: newStatus });
    }
  };

  const getTasksByStatus = (status: string) => {
    return taskList.filter(task => task.status === status);
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'Crítica': return 'bg-red-500';
      case 'Alta': return 'bg-orange-500';
      case 'Média': return 'bg-yellow-500';
      case 'Baixa': return 'bg-green-500';
      default: return 'bg-muted';
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={cn("flex gap-6 overflow-x-auto pb-4", className)}>
        {statusColumns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-80">
            <div className="mb-4">
              <h3 className="font-medium text-foreground flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-full", column.color.replace('/10', ''))} />
                {column.title}
                <Badge variant="secondary" className="ml-auto">
                  {getTasksByStatus(column.id).length}
                </Badge>
              </h3>
            </div>
            
            <Droppable droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    "min-h-[600px] p-2 rounded-lg transition-colors",
                    column.color,
                    snapshot.isDraggingOver && "bg-accent/20 border-2 border-accent border-dashed"
                  )}
                >
                  {getTasksByStatus(column.id).map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided, snapshot) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={cn(
                            "mb-3 cursor-grab active:cursor-grabbing transition-all",
                            snapshot.isDragging && "rotate-3 shadow-lg border-accent"
                          )}
                        >
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-sm font-medium line-clamp-2">
                                {task.title}
                              </CardTitle>
                              <div className={cn("w-2 h-2 rounded-full flex-shrink-0 mt-1", getPriorityColor(task.priority))} />
                            </div>
                          </CardHeader>
                          
                          <CardContent className="pt-0">
                            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                              {task.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {task.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs px-1 py-0">
                                  {tag}
                                </Badge>
                              ))}
                              {task.tags.length > 2 && (
                                <Badge variant="outline" className="text-xs px-1 py-0">
                                  +{task.tags.length - 2}
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
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
                              
                              {task.status === 'Bloqueado' && (
                                <AlertCircle className="w-3 h-3 text-red-500" />
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}