
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    projectUpdates: true,
    teamMessages: true,
    completionAlerts: true,
    weeklyReports: false,
    marketingUpdates: false
  });

  const [pushNotifications, setPushNotifications] = useState({
    projectUpdates: true,
    teamMessages: true,
    completionAlerts: true,
    resourceAlerts: false,
    tips: false
  });

  const handleToggleEmail = (key: keyof typeof emailNotifications) => {
    setEmailNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleTogglePush = (key: keyof typeof pushNotifications) => {
    setPushNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    // In a real app, this would be an API call
    toast.success("Preferências de notificação atualizadas!");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-olympus-card-bg border-slate-800">
        <CardHeader>
          <CardTitle>Notificações por Email</CardTitle>
          <CardDescription>Gerenciar emails que você recebe da plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Atualizações de Projeto</div>
                <div className="text-sm text-olympus-text-secondary">Receba emails quando houver atualizações nos seus projetos</div>
              </div>
              <button
                onClick={() => handleToggleEmail('projectUpdates')}
                className={`w-12 h-6 rounded-full relative ${emailNotifications.projectUpdates ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${emailNotifications.projectUpdates ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Mensagens da Equipe</div>
                <div className="text-sm text-olympus-text-secondary">Receba emails quando houver novas mensagens da sua equipe</div>
              </div>
              <button
                onClick={() => handleToggleEmail('teamMessages')}
                className={`w-12 h-6 rounded-full relative ${emailNotifications.teamMessages ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${emailNotifications.teamMessages ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Alertas de Conclusão</div>
                <div className="text-sm text-olympus-text-secondary">Receba emails quando um projeto for concluído</div>
              </div>
              <button
                onClick={() => handleToggleEmail('completionAlerts')}
                className={`w-12 h-6 rounded-full relative ${emailNotifications.completionAlerts ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${emailNotifications.completionAlerts ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Relatórios Semanais</div>
                <div className="text-sm text-olympus-text-secondary">Receba emails com relatórios semanais de uso e progresso</div>
              </div>
              <button
                onClick={() => handleToggleEmail('weeklyReports')}
                className={`w-12 h-6 rounded-full relative ${emailNotifications.weeklyReports ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${emailNotifications.weeklyReports ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div>
                <div className="font-medium">Atualizações de Marketing</div>
                <div className="text-sm text-olympus-text-secondary">Receba emails sobre novidades e ofertas da plataforma</div>
              </div>
              <button
                onClick={() => handleToggleEmail('marketingUpdates')}
                className={`w-12 h-6 rounded-full relative ${emailNotifications.marketingUpdates ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${emailNotifications.marketingUpdates ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-olympus-card-bg border-slate-800">
        <CardHeader>
          <CardTitle>Notificações Push</CardTitle>
          <CardDescription>Gerenciar notificações no navegador</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Atualizações de Projeto</div>
                <div className="text-sm text-olympus-text-secondary">Receba alertas quando houver atualizações nos seus projetos</div>
              </div>
              <button
                onClick={() => handleTogglePush('projectUpdates')}
                className={`w-12 h-6 rounded-full relative ${pushNotifications.projectUpdates ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${pushNotifications.projectUpdates ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Mensagens da Equipe</div>
                <div className="text-sm text-olympus-text-secondary">Receba alertas quando houver novas mensagens da sua equipe</div>
              </div>
              <button
                onClick={() => handleTogglePush('teamMessages')}
                className={`w-12 h-6 rounded-full relative ${pushNotifications.teamMessages ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${pushNotifications.teamMessages ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Alertas de Conclusão</div>
                <div className="text-sm text-olympus-text-secondary">Receba alertas quando um projeto for concluído</div>
              </div>
              <button
                onClick={() => handleTogglePush('completionAlerts')}
                className={`w-12 h-6 rounded-full relative ${pushNotifications.completionAlerts ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${pushNotifications.completionAlerts ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div>
                <div className="font-medium">Alertas de Recursos</div>
                <div className="text-sm text-olympus-text-secondary">Receba alertas quando seus recursos estiverem acabando</div>
              </div>
              <button
                onClick={() => handleTogglePush('resourceAlerts')}
                className={`w-12 h-6 rounded-full relative ${pushNotifications.resourceAlerts ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${pushNotifications.resourceAlerts ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div>
                <div className="font-medium">Dicas e Truques</div>
                <div className="text-sm text-olympus-text-secondary">Receba dicas para melhorar seu uso da plataforma</div>
              </div>
              <button
                onClick={() => handleTogglePush('tips')}
                className={`w-12 h-6 rounded-full relative ${pushNotifications.tips ? 'bg-olympus-accent' : 'bg-slate-700'}`}
              >
                <span 
                  className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${pushNotifications.tips ? 'translate-x-6' : 'translate-x-0.5'}`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button 
              onClick={handleSave}
              className="bg-olympus-accent text-black hover:bg-olympus-accent/90"
            >
              Salvar Preferências
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
