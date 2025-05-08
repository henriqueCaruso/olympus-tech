
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@/data/user";
import { toast } from "sonner";

export const ProfileSettings = () => {
  const [userData, setUserData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    role: currentUser.role,
    company: currentUser.company,
    bio: currentUser.bio || ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real app, this would be an API call
    setIsEditing(false);
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <Card className="bg-olympus-card-bg border-slate-800">
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
        <CardDescription>Gerencie suas informações de perfil</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-olympus-background">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Button variant="ghost" className="text-white text-sm">
                    Alterar
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-olympus-text-secondary mb-1">Nome</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="w-full bg-olympus-background border border-slate-700 rounded px-3 py-2"
                  />
                ) : (
                  <div className="text-olympus-text-primary">{userData.name}</div>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-olympus-text-secondary mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="w-full bg-olympus-background border border-slate-700 rounded px-3 py-2"
                  />
                ) : (
                  <div className="text-olympus-text-primary">{userData.email}</div>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-olympus-text-secondary mb-1">Cargo</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="role"
                    value={userData.role}
                    onChange={handleChange}
                    className="w-full bg-olympus-background border border-slate-700 rounded px-3 py-2"
                  />
                ) : (
                  <div className="text-olympus-text-primary">{userData.role}</div>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-olympus-text-secondary mb-1">Empresa</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="company"
                    value={userData.company}
                    onChange={handleChange}
                    className="w-full bg-olympus-background border border-slate-700 rounded px-3 py-2"
                  />
                ) : (
                  <div className="text-olympus-text-primary">{userData.company}</div>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-olympus-text-secondary mb-1">Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={userData.bio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-olympus-background border border-slate-700 rounded px-3 py-2"
                />
              ) : (
                <div className="text-olympus-text-primary">
                  {userData.bio || "Nenhuma bio definida."}
                </div>
              )}
            </div>
            
            <div className="flex justify-end pt-4">
              {isEditing ? (
                <>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(false)} 
                    className="mr-2 border-slate-700 text-olympus-text-secondary hover:text-white"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleSave}
                    className="bg-olympus-accent text-black hover:bg-olympus-accent/90"
                  >
                    Salvar Alterações
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={() => setIsEditing(true)}
                  className="border border-olympus-accent text-olympus-accent hover:bg-olympus-accent/10"
                  variant="outline"
                >
                  Editar Perfil
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
