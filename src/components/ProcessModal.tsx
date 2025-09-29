import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProcessStep } from "@/data/processData"; // ✅ importa o tipo correto

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  step?: ProcessStep; // usa o tipo importado
  swimlaneType: "csm" | "deploy" | "manager";
}

const swimlaneColors = {
  csm: "border-swimlane-csm-accent",
  deploy: "border-swimlane-deploy-accent",
  manager: "border-swimlane-manager-accent",
};

const swimlaneLabels = {
  csm: "CSM",
  deploy: "Turma do Deploy",
  manager: "Gerente",
};

export const ProcessModal = ({
  isOpen,
  onClose,
  step,
  swimlaneType,
}: ProcessModalProps) => {
  if (!isOpen) return null;

  // transforma URLs em links clicáveis
  const formatDescription = (text?: string) => {
    if (!text) return "Sem descrição disponível.";
    return text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary underline">$1</a>'
    );
  };

  return (
    <div className="fixed inset-0 bg-modal-overlay z-50 flex items-center justify-center p-4">
      <div className="bg-modal-background rounded-2xl shadow-modal max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div
          className={`px-6 py-4 border-b-2 ${swimlaneColors[swimlaneType]} bg-gradient-to-r from-background to-gray-50`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-1">
                {step?.title || "Etapa do processo"}
              </h2>
              <p className="text-sm text-text-secondary">
                Etapa do processo • {swimlaneLabels[swimlaneType]}
              </p>
            </div>

            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Descrição Detalhada */}
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">
                Descrição Detalhada
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] border border-border">
                <div
                  className="text-black text-sm leading-relaxed space-y-2 whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: formatDescription(
                      step?.descricaoDetalhada || step?.description
                    ),
                  }}
                />
              </div>
            </div>

            {/* Responsável */}
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">
                Responsável
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border-2 ${swimlaneColors[swimlaneType]} bg-background`}
                >
                  {swimlaneLabels[swimlaneType]}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-6 pt-4 border-t border-border">
            <Button
              onClick={onClose}
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-6"
            >
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
