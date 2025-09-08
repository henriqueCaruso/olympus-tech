import React from 'react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  Folder,
  Plus,
  BarChart as ChartBar,
  BookOpen as Book,
  HelpCircle,
  Settings,
  Crown,
  Kanban,
  LogOut
} from "lucide-react";
import { currentUser } from "@/data/user";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Tarefas", url: "/tarefas", icon: Kanban },
  { title: "Projetos", url: "/meus-projetos", icon: Folder },
  { title: "Novo Projeto", url: "/novo-projeto", icon: Plus },
];

const analyticsItems = [
  { title: "Analytics", url: "/analytics", icon: ChartBar },
];

const resourceItems = [
  { title: "Deuses", url: "/deuses", icon: Crown },
  { title: "Tutoriais", url: "/tutoriais", icon: Book },
  { title: "Ajuda", url: "/ajuda", icon: HelpCircle },
  { title: "Configurações", url: "/configuracoes", icon: Settings },
];

export function CollapsibleSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { signOut } = useAuth();
  const [isHovered, setIsHovered] = React.useState(false);
  
  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const NavGroup = ({ items, label }: { items: typeof mainItems; label: string }) => (
    <div className="space-y-1">
      {isHovered && (
        <div className="px-3 py-2">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            {label}
          </h3>
        </div>
      )}
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.url}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                isActive(item.url)
                  ? "bg-sidebar-accent text-sidebar-primary font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary",
                !isHovered && "justify-center"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isHovered && (
                <span className="font-medium whitespace-nowrap">
                  {item.title}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-50 transition-all duration-300 ease-in-out flex flex-col",
        isHovered ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3",
          !isHovered && "justify-center"
        )}>
          <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sidebar-primary-foreground">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          {isHovered && (
            <span className="font-cinzel text-lg font-bold text-sidebar-primary whitespace-nowrap">
              OLYMPUS
            </span>
          )}
        </div>
      </div>
      
      {/* Navigation Content */}
      <div className="flex-1 px-2 py-4 space-y-6 overflow-hidden">
        <NavGroup items={mainItems} label="Principal" />
        <NavGroup items={analyticsItems} label="Análise" />
        <NavGroup items={resourceItems} label="Recursos" />
      </div>
      
      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3",
          !isHovered && "justify-center"
        )}>
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback className="text-xs bg-sidebar-accent text-sidebar-primary">
              {currentUser.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {isHovered && (
            <>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate text-sidebar-foreground">{currentUser.name}</div>
                <div className="text-xs text-muted-foreground truncate">{currentUser.role}</div>
              </div>
              <button
                onClick={signOut}
                className="w-4 h-4 flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors"
                title="Sair"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}