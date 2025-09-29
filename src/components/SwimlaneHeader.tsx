import { Download, FileImage, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwimlaneHeaderProps {
  onExportPDF: () => void;
  onExportImage: () => void;
}

export const SwimlaneHeader = ({ onExportPDF, onExportImage }: SwimlaneHeaderProps) => {
  return (
    <div className="flex justify-between items-center p-6 bg-background border-b border-border">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">
          Dashboard Fluxograma BETO
        </h1>
        <p className="text-text-secondary mt-1">
          Processo integrado entre CSM, Deploy e Gerência
        </p>
      </div>
      
      <div className="flex gap-3">
        <Button
          onClick={onExportImage}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-process-hover border-process-border"
        >
          <FileImage className="w-4 h-4" />
          Exportar Imagem
        </Button>
        
        <Button
          onClick={onExportPDF}
          size="sm"
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground"
        >
          <FileText className="w-4 h-4" />
          Exportar PDF
        </Button>
      </div>
    </div>
  );
};