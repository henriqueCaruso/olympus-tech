
import { MainLayout } from "@/components/layout/MainLayout";
import { useState } from "react";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/ui/template-card";
import { useNavigate } from "react-router-dom";

const Templates = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const categories = Array.from(new Set(templates.map(t => t.category)));
  
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = !category || template.category === category;
    const matchesSearch = !searchQuery || 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-playfair text-2xl font-semibold">Templates</h1>
          
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-olympus-card-bg border border-slate-800 rounded-md px-4 py-2 text-sm w-60"
              />
              <svg
                className="absolute right-3 top-2.5 h-4 w-4 text-olympus-text-secondary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setCategory(null)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
              !category ? "bg-olympus-accent text-black" : "bg-olympus-card-bg text-olympus-text-secondary"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                category === cat ? "bg-olympus-accent text-black" : "bg-olympus-card-bg text-olympus-text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                name={template.name}
                description={template.description}
                icon={template.icon}
                onClick={() => navigate(`/novo-projeto?template=${template.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-olympus-card-bg p-8 rounded-lg text-center">
            <p className="text-olympus-text-secondary">Nenhum template encontrado com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Templates;
