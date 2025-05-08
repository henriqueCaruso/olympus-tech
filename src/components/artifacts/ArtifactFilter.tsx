
import { useState } from "react";

interface ArtifactFilterProps {
  onFilterChange: (type: string | null, format: string | null) => void;
}

export const ArtifactFilter = ({ onFilterChange }: ArtifactFilterProps) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const handleTypeChange = (type: string | null) => {
    setSelectedType(type);
    onFilterChange(type, selectedFormat);
  };

  const handleFormatChange = (format: string | null) => {
    setSelectedFormat(format);
    onFilterChange(selectedType, format);
  };

  return (
    <div className="bg-olympus-card-bg p-4 rounded-lg mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm text-olympus-text-secondary mb-2">
            Tipo de Artefato
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleTypeChange(null)}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedType === null
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleTypeChange("document")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedType === "document"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Documentos
            </button>
            <button
              onClick={() => handleTypeChange("requirements")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedType === "requirements"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Requisitos
            </button>
            <button
              onClick={() => handleTypeChange("analysis")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedType === "analysis"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Análises
            </button>
            <button
              onClick={() => handleTypeChange("design")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedType === "design"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => handleTypeChange("code")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedType === "code"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Código
            </button>
          </div>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm text-olympus-text-secondary mb-2">
            Formato
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFormatChange(null)}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedFormat === null
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleFormatChange("markdown")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedFormat === "markdown"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Markdown
            </button>
            <button
              onClick={() => handleFormatChange("pdf")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedFormat === "pdf"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              PDF
            </button>
            <button
              onClick={() => handleFormatChange("code")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedFormat === "code"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Código
            </button>
            <button
              onClick={() => handleFormatChange("image")}
              className={`px-3 py-1 rounded-md text-sm ${
                selectedFormat === "image"
                  ? "bg-olympus-accent text-black"
                  : "bg-olympus-background text-olympus-text-primary"
              }`}
            >
              Imagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
