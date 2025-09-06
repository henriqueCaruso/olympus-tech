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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
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
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const { signOut } = useAuth();
  const [isHovered, setIsHovered] = React.useState(false);
  
  const isCollapsed = state === "collapsed";
  const shouldShowExpanded = isHovered || !isCollapsed;
  
  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const NavGroup = ({ items, label }: { items: typeof mainItems; label: string }) => (
    <SidebarGroup>
      {shouldShowExpanded && (
        <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={isActive(item.url)}>
                <Link to={item.url} className={cn(
                  "flex items-center gap-3 px-3 py-2",
                  !shouldShowExpanded && "justify-center"
                )}>
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {shouldShowExpanded && <span className="font-medium">{item.title}</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Sidebar 
        collapsible="icon"
        className={cn(
          "transition-all duration-300 ease-in-out border-r border-sidebar-border fixed left-0 top-0 h-full z-50",
          shouldShowExpanded ? "w-64" : "w-16"
        )}
      >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3",
          !shouldShowExpanded && "justify-center"
        )}>
          <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sidebar-primary-foreground">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          {shouldShowExpanded && (
            <span className="font-cinzel text-lg font-bold text-sidebar-primary">
              OLYMPUS
            </span>
          )}
        </div>
      </div>
      
      <SidebarContent className="px-2 py-4">
        <NavGroup items={mainItems} label="Principal" />
        <NavGroup items={analyticsItems} label="Análise" />
        <NavGroup items={resourceItems} label="Recursos" />
      </SidebarContent>
      
      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border mt-auto">
        <div className={cn(
          "flex items-center gap-3",
          !shouldShowExpanded && "justify-center"
        )}>
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback className="text-xs">
              {currentUser.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {shouldShowExpanded && (
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">{currentUser.name}</div>
              <div className="text-xs text-muted-foreground truncate">{currentUser.role}</div>
            </div>
          )}
          {shouldShowExpanded && (
            <button
              onClick={signOut}
              className="w-4 h-4 flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors"
              title="Sair"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </Sidebar>
    </div>
  );
}