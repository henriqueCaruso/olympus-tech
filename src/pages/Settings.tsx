
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { ThemeSettings } from "@/components/settings/ThemeSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { APIKeySettings } from "@/components/settings/APIKeySettings";

const Settings = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <h1 className="font-playfair text-2xl font-semibold mb-6">Configurações</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="theme">Aparência</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="api">Chaves API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <ProfileSettings />
          </TabsContent>
          
          <TabsContent value="theme" className="space-y-6">
            <ThemeSettings />
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <NotificationSettings />
          </TabsContent>
          
          <TabsContent value="api" className="space-y-6">
            <APIKeySettings />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
