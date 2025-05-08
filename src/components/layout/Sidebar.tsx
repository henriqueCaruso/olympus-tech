
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { 
  Home,
  Folder,
  Plus,
  BarChart as ChartBar,
  BookOpen as Book,
  HelpCircle as HelpCircle,
  Settings
} from "lucide-react";
import { currentUser } from "@/data/user";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("fixed top-0 left-0 h-screen w-60 bg-olympus-card-bg flex flex-col z-40", className)}>
      {/* Logo */}
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-olympus-accent flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <span className="font-cinzel text-lg font-bold text-olympus-accent">OLYMPUS</span>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 py-6 px-3 flex flex-col gap-1">
        <NavItem href="/" icon={<Home size={22} />} label="Dashboard" isActive />
        <NavItem href="/meus-projetos" icon={<Folder size={22} />} label="Meus Projetos" />
        <NavItem href="/novo-projeto" icon={<Plus size={22} />} label="Novo Projeto" />
        <NavItem href="/analytics" icon={<ChartBar size={22} />} label="Analytics" />
        <NavItem href="/tutoriais" icon={<Book size={22} />} label="Tutoriais" />
        <NavItem href="/ajuda" icon={<HelpCircle size={22} />} label="Ajuda & Suporte" />
        <NavItem href="/configuracoes" icon={<Settings size={22} />} label="Configurações" />
      </div>
      
      {/* User Profile */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden">
            <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">{currentUser.name}</div>
            <div className="text-xs text-slate-400">{currentUser.role}</div>
          </div>
          <button className="p-1 rounded-full hover:bg-slate-800">
            <Settings size={16} className="text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function NavItem({ href, icon, label, isActive }: NavItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        isActive 
          ? "bg-slate-800 text-white border-l-2 border-olympus-accent" 
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      )}
    >
      <span className={cn(isActive ? "text-olympus-accent" : "text-slate-400")}>
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}
