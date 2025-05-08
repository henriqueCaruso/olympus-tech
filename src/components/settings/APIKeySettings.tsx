
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface APIKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed?: string;
  scopes: string[];
}

export const APIKeySettings = () => {
  const [apiKeys, setApiKeys] = useState<APIKey[]>([
    {
      id: "key-1",
      name: "Development Key",
      key: "olym_dev_23fXaBc78EwQ9z",
      created: "15/04/2025",
      lastUsed: "08/05/2025",
      scopes: ["read:projects", "write:projects", "read:artifacts"]
    },
    {
      id: "key-2",
      name: "Read-only Key",
      key: "olym_read_19tYzPq45RsT7w",
      created: "01/05/2025",
      scopes: ["read:projects", "read:artifacts"]
    }
  ]);
  
  const [isCreating, setIsCreating] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
  
  const availableScopes = [
    { id: "read:projects", label: "Leitura de Projetos" },
    { id: "write:projects", label: "Escrita de Projetos" },
    { id: "read:artifacts", label: "Leitura de Artefatos" },
    { id: "write:artifacts", label: "Escrita de Artefatos" },
    { id: "read:analytics", label: "Leitura de Analytics" },
    { id: "admin", label: "Administração" },
  ];
  
  const toggleScope = (scopeId: string) => {
    if (selectedScopes.includes(scopeId)) {
      setSelectedScopes(selectedScopes.filter(s => s !== scopeId));
    } else {
      setSelectedScopes([...selectedScopes, scopeId]);
    }
  };
  
  const generateKey = () => {
    if (!newKeyName.trim()) {
      toast.error("Por favor, dê um nome à sua chave API");
      return;
    }
    
    if (selectedScopes.length === 0) {
      toast.error("Por favor, selecione pelo menos um escopo");
      return;
    }
    
    // In a real app, this would be an API call to generate a key
    const generatedKey = `olym_${Math.random().toString(36).substring(2, 10)}_${Math.random().toString(36).substring(2, 10)}`;
    
    const newKey: APIKey = {
      id: `key-${apiKeys.length + 1}`,
      name: newKeyName,
      key: generatedKey,
      created: new Date().toLocaleDateString('pt-BR'),
      scopes: selectedScopes
    };
    
    setApiKeys([...apiKeys, newKey]);
    setIsCreating(false);
    setNewKeyName("");
    setSelectedScopes([]);
    
    toast.success("Nova chave API gerada com sucesso!");
  };
  
  const deleteKey = (keyId: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== keyId));
    toast.success("Chave API revogada com sucesso");
  };

  return (
    <Card className="bg-olympus-card-bg border-slate-800">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <CardTitle>Chaves API</CardTitle>
          <CardDescription>Gerencie chaves de acesso para a API da plataforma</CardDescription>
        </div>
        {!isCreating && (
          <Button 
            onClick={() => setIsCreating(true)}
            className="bg-olympus-accent text-black hover:bg-olympus-accent/90"
          >
            Nova Chave
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {isCreating ? (
          <div className="bg-olympus-background p-4 rounded-lg border border-slate-700 mb-6">
            <h3 className="text-lg font-medium mb-4">Gerar Nova Chave API</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-olympus-text-secondary mb-1">Nome da Chave</label>
                <input
                  type="text"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="Ex: Development Key"
                  className="w-full bg-olympus-card-bg border border-slate-700 rounded px-3 py-2"
                />
              </div>
              
              <div>
                <label className="block text-sm text-olympus-text-secondary mb-2">Escopos</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {availableScopes.map((scope) => (
                    <div 
                      key={scope.id} 
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        id={scope.id}
                        checked={selectedScopes.includes(scope.id)}
                        onChange={() => toggleScope(scope.id)}
                        className="rounded border-slate-600 bg-olympus-card-bg text-olympus-accent focus:ring-0"
                      />
                      <label htmlFor={scope.id}>{scope.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end pt-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreating(false)} 
                  className="border-slate-700"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={generateKey}
                  className="bg-olympus-accent text-black hover:bg-olympus-accent/90"
                >
                  Gerar Chave
                </Button>
              </div>
            </div>
          </div>
        ) : null}
        
        {apiKeys.length > 0 ? (
          <div className="border border-slate-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-olympus-background">
                  <th className="text-left p-3 font-medium">Nome</th>
                  <th className="text-left p-3 font-medium">Chave</th>
                  <th className="text-left p-3 font-medium">Criada</th>
                  <th className="text-left p-3 font-medium">Último Uso</th>
                  <th className="text-right p-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {apiKeys.map((key, index) => (
                  <tr 
                    key={key.id} 
                    className={`border-t border-slate-800 ${index % 2 === 0 ? "bg-olympus-background/30" : ""}`}
                  >
                    <td className="p-3">
                      <div>{key.name}</div>
                      <div className="text-xs text-olympus-text-secondary">
                        {key.scopes.map(scope => {
                          const scopeInfo = availableScopes.find(s => s.id === scope);
                          return scopeInfo?.label || scope;
                        }).join(", ")}
                      </div>
                    </td>
                    <td className="p-3 font-mono">
                      {key.key.substring(0, 12)}...
                    </td>
                    <td className="p-3 text-sm">{key.created}</td>
                    <td className="p-3 text-sm">{key.lastUsed || "Nunca"}</td>
                    <td className="p-3 text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(key.key);
                          toast.success("Chave copiada para a área de transferência");
                        }}
                        className="mr-2 border-slate-700"
                      >
                        Copiar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteKey(key.id)}
                        className="border-red-900 text-red-500 hover:bg-red-900/10"
                      >
                        Revogar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center p-8 border border-dashed border-slate-700 rounded-lg">
            <p className="text-olympus-text-secondary mb-4">Você não possui chaves API</p>
            <Button 
              onClick={() => setIsCreating(true)}
              className="bg-olympus-accent text-black hover:bg-olympus-accent/90"
            >
              Criar Primeira Chave
            </Button>
          </div>
        )}
        
        <div className="mt-6 text-sm text-olympus-text-secondary">
          <p className="mb-1"><strong>Importante:</strong> As chaves API oferecem acesso programático à plataforma Olympus.</p>
          <p>Mantenha suas chaves seguras e nunca compartilhe com terceiros. Em caso de comprometimento, revogue imediatamente.</p>
        </div>
      </CardContent>
    </Card>
  );
};
