
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const themeOptions = [
  { id: "olympus", name: "Olympus (Padrão)", primary: "#D4AF37", background: "#10152B" },
  { id: "athena", name: "Athena", primary: "#9370DB", background: "#121419" },
  { id: "apollo", name: "Apollo", primary: "#FF6B6B", background: "#130F0F" },
  { id: "artemis", name: "Artemis", primary: "#48BB78", background: "#0F1613" },
  { id: "poseidon", name: "Poseidon", primary: "#4299E1", background: "#0E141B" },
];

export const ThemeSettings = () => {
  const [selectedTheme, setSelectedTheme] = useState("olympus");
  const [fontsize, setFontsize] = useState("normal");
  const [contrast, setContrast] = useState("normal");

  const handleSaveTheme = () => {
    // In a real app, this would be an API call or context update
    toast.success("Tema atualizado com sucesso!");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-olympus-card-bg border-slate-800">
        <CardHeader>
          <CardTitle>Temas</CardTitle>
          <CardDescription>Escolha o tema visual para a interface</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themeOptions.map((theme) => (
              <div 
                key={theme.id} 
                className={`
                  border rounded-lg cursor-pointer p-4 transition-all
                  ${selectedTheme === theme.id 
                    ? 'border-olympus-accent' 
                    : 'border-slate-700 hover:border-slate-500'}
                `}
                onClick={() => setSelectedTheme(theme.id)}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">{theme.name}</span>
                  {selectedTheme === theme.id && (
                    <span className="text-olympus-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  )}
                </div>
                <div 
                  className="h-20 rounded-md"
                  style={{ background: theme.background, borderTop: `3px solid ${theme.primary}` }}
                ></div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Button 
              onClick={handleSaveTheme}
              className="bg-olympus-accent text-black hover:bg-olympus-accent/90"
            >
              Aplicar Tema
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-olympus-card-bg border-slate-800">
        <CardHeader>
          <CardTitle>Acessibilidade</CardTitle>
          <CardDescription>Personalize a experiência de visualização</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-olympus-text-secondary mb-2">
                Tamanho da Fonte
              </label>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setFontsize("small")}
                  className={`px-4 py-2 rounded-md ${fontsize === "small" 
                    ? "bg-olympus-accent text-black" 
                    : "bg-olympus-background text-olympus-text-primary"}`}
                >
                  Pequena
                </button>
                <button 
                  onClick={() => setFontsize("normal")}
                  className={`px-4 py-2 rounded-md ${fontsize === "normal" 
                    ? "bg-olympus-accent text-black" 
                    : "bg-olympus-background text-olympus-text-primary"}`}
                >
                  Normal
                </button>
                <button 
                  onClick={() => setFontsize("large")}
                  className={`px-4 py-2 rounded-md ${fontsize === "large" 
                    ? "bg-olympus-accent text-black" 
                    : "bg-olympus-background text-olympus-text-primary"}`}
                >
                  Grande
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-olympus-text-secondary mb-2">
                Contraste
              </label>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setContrast("low")}
                  className={`px-4 py-2 rounded-md ${contrast === "low" 
                    ? "bg-olympus-accent text-black" 
                    : "bg-olympus-background text-olympus-text-primary"}`}
                >
                  Baixo
                </button>
                <button 
                  onClick={() => setContrast("normal")}
                  className={`px-4 py-2 rounded-md ${contrast === "normal" 
                    ? "bg-olympus-accent text-black" 
                    : "bg-olympus-background text-olympus-text-primary"}`}
                >
                  Normal
                </button>
                <button 
                  onClick={() => setContrast("high")}
                  className={`px-4 py-2 rounded-md ${contrast === "high" 
                    ? "bg-olympus-accent text-black" 
                    : "bg-olympus-background text-olympus-text-primary"}`}
                >
                  Alto
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button 
                onClick={() => toast.success("Configurações de acessibilidade atualizadas!")}
                className="bg-olympus-accent text-black hover:bg-olympus-accent/90"
              >
                Salvar Preferências
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
