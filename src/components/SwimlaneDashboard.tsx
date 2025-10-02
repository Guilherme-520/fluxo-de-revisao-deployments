import { useState } from "react";
import { SwimlaneHeader } from "./SwimlaneHeader";
import { SwimlaneRow } from "./SwimlaneRow";
import { ProcessModal } from "./ProcessModal";
import { swimlaneData, ProcessStep } from "@/data/processData"; // ✅ Importa o tipo correto
import { exportAsImage, exportAsPDF } from "@/utils/exportUtils";



export const SwimlaneDashboard = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);
  const [selectedSwimlane, setSelectedSwimlane] = useState<'csm' | 'deploy' | 'manager' | null>(null);

  const handleStepClick = (step: ProcessStep, swimlaneType: 'csm' | 'deploy' | 'manager') => {
    setSelectedStep(step);
    setSelectedSwimlane(swimlaneType);
  };

  const handleCloseModal = () => {
    setSelectedStep(null);
    setSelectedSwimlane(null);
  };

  const handleExportImage = () => {
    exportAsImage('swimlane-container');
  };

  const handleExportPDF = () => {
    exportAsPDF('swimlane-container');
  };

  return (
    <div className="min-h-screen bg-background">
      <SwimlaneHeader 
        onExportPDF={handleExportPDF}
        onExportImage={handleExportImage}
      />
      
      <div id="swimlane-container" className="border border-border bg-background">
        {swimlaneData.map((swimlane) => (
          <SwimlaneRow
            key={swimlane.type}
            title={swimlane.title}
            steps={swimlane.steps}
            swimlaneType={swimlane.type}
            onStepClick={(step) => handleStepClick(step, swimlane.type)}
          />
        ))}
      </div>

    <div className="w-full mt-6">
  <img
    src="/Fluxo.png"
    alt="Fluxo"
    className="w-full h-auto rounded-xl shadow-lg"
  />
</div>

      {/* Modal corrigido */}
      {selectedStep && selectedSwimlane && (
        <ProcessModal
          isOpen={true}
          onClose={handleCloseModal}
          step={selectedStep} // ✅ Passando o step correto
          swimlaneType={selectedSwimlane}
        />
      )}
    </div>
  );
};
