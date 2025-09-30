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

        <br />
        <h2 className="text-text-primary mt-1">
  <a
    href="https://ibmsc.lightning.force.com/lightning/page/analytics?wave__assetType=lightningDashboard&wave__assetId=01ZKa000000skotMAA"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
      Dashboard do ISC
    </button>
  </a>
</h2>



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