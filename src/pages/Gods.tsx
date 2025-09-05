import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { configurableAgents, ConfigurableAgent, AgentPrompt } from '@/data/agent-prompts';
import { 
  Crown, 
  Brain, 
  Palette, 
  Cog, 
  Plus, 
  Edit, 
  Eye, 
  Settings,
  Zap,
  FileText,
  Tag
} from 'lucide-react';
import { cn } from '@/lib/utils';

const getIconByType = (iconType: ConfigurableAgent['iconType']) => {
  switch (iconType) {
    case 'leadership': return Crown;
    case 'technical': return Brain;
    case 'design': return Palette;
    case 'product': return Cog;
    default: return Crown;
  }
};

const getColorByType = (iconType: ConfigurableAgent['iconType']) => {
  switch (iconType) {
    case 'leadership': return 'from-purple-500 to-purple-700';
    case 'technical': return 'from-blue-500 to-blue-700';
    case 'design': return 'from-pink-500 to-pink-700';
    case 'product': return 'from-green-500 to-green-700';
    default: return 'from-gray-500 to-gray-700';
  }
};

export default function Gods() {
  const [agents, setAgents] = useState<ConfigurableAgent[]>(configurableAgents);
  const [selectedAgent, setSelectedAgent] = useState<ConfigurableAgent | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<AgentPrompt | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleAgentStatus = (agentId: string) => {
    setAgents(prev => prev.map(agent => 
      agent.id === agentId ? { ...agent, isActive: !agent.isActive } : agent
    ));
  };

  const AgentCard = ({ agent }: { agent: ConfigurableAgent }) => {
    const IconComponent = getIconByType(agent.iconType);
    const gradientColor = getColorByType(agent.iconType);

    return (
      <Card className={cn(
        "transition-all duration-200 hover:shadow-lg border",
        agent.isActive ? "border-accent/20 shadow-md" : "border-border opacity-75"
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
                gradientColor
              )}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-cinzel">{agent.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{agent.role}</p>
              </div>
            </div>
            <Switch
              checked={agent.isActive}
              onCheckedChange={() => toggleAgentStatus(agent.id)}
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {agent.mythology}
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Capacidades</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {agent.capabilities.map((capability) => (
                <Badge key={capability.id} variant="secondary" className="text-xs">
                  {capability.name}
                </Badge>
              ))}
              {agent.capabilities.length === 0 && (
                <span className="text-xs text-muted-foreground">Nenhuma capacidade configurada</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Prompts</span>
              <Badge variant="outline" className="text-xs">
                {agent.prompts.length}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setSelectedAgent(agent)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Visualizar
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5" />
                    {agent.name} - {agent.role}
                  </DialogTitle>
                </DialogHeader>
                <AgentDetailView agent={agent} />
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setSelectedAgent(agent);
                setIsEditing(true);
              }}
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  const AgentDetailView = ({ agent }: { agent: ConfigurableAgent }) => (
    <ScrollArea className="h-[60vh]">
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="prompts">Prompts</TabsTrigger>
          <TabsTrigger value="capabilities">Capacidades</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Mitologia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {agent.mythology}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Descrição</h3>
              <p className="text-sm text-muted-foreground">
                {agent.description}
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Divindades Associadas</h3>
              <Badge variant="secondary" className="font-cinzel">
                {agent.gods}
              </Badge>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="prompts" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Prompts Configurados</h3>
            <Button size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-1" />
              Novo Prompt
            </Button>
          </div>
          
          <div className="space-y-3">
            {agent.prompts.map((prompt) => (
              <Card key={prompt.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h4 className="font-medium">{prompt.title}</h4>
                    <p className="text-sm text-muted-foreground">{prompt.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {prompt.category}
                      </Badge>
                      {prompt.variables.length > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {prompt.variables.length} variáveis
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedPrompt(prompt)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="capabilities" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Capacidades</h3>
            <Button size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-1" />
              Nova Capacidade
            </Button>
          </div>
          
          <div className="space-y-3">
            {agent.capabilities.map((capability) => (
              <Card key={capability.id} className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{capability.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {capability.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                  <div className="text-xs text-muted-foreground">
                    {capability.prompts.length} prompt(s) associado(s)
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </ScrollArea>
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-playfair font-semibold text-3xl">Deuses do Olimpo</h1>
            <p className="text-muted-foreground">
              Configure e gerencie seus agentes de IA personalizados
            </p>
          </div>
          
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Agente
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Agentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{agents.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {agents.filter(a => a.isActive).length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Prompts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {agents.reduce((sum, agent) => sum + agent.prompts.length, 0)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Capacidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {agents.reduce((sum, agent) => sum + agent.capabilities.length, 0)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Prompt Editor Dialog */}
        {selectedPrompt && (
          <Dialog open={!!selectedPrompt} onOpenChange={() => setSelectedPrompt(null)}>
            <DialogContent className="max-w-4xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle>Editor de Prompt: {selectedPrompt.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" value={selectedPrompt.title} />
                  </div>
                  <div>
                    <Label htmlFor="category">Categoria</Label>
                    <Input id="category" value={selectedPrompt.category} />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Input id="description" value={selectedPrompt.description} />
                </div>
                
                <div>
                  <Label htmlFor="variables">Variáveis (separadas por vírgula)</Label>
                  <Input id="variables" value={selectedPrompt.variables.join(', ')} />
                </div>
                
                <div>
                  <Label htmlFor="content">Conteúdo do Prompt (Markdown)</Label>
                  <Textarea 
                    id="content" 
                    value={selectedPrompt.mdContent} 
                    className="min-h-[300px] font-mono text-sm"
                  />
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setSelectedPrompt(null)}>
                    Cancelar
                  </Button>
                  <Button>
                    Salvar Alterações
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </MainLayout>
  );
}