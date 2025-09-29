import { ProcessBox } from "./ProcessBox";

interface ProcessStep {
  id: string;
  title: string;
  description?: string;
}

interface SwimlaneRowProps {
  title: string;
  steps: ProcessStep[];
  swimlaneType: 'csm' | 'deploy' | 'manager';
  onStepClick: (step: ProcessStep) => void;
}

const swimlaneBackgrounds = {
  csm: 'bg-swimlane-csm',
  deploy: 'bg-swimlane-deploy', 
  manager: 'bg-swimlane-manager'
};

export const SwimlaneRow = ({ 
  title, 
  steps, 
  swimlaneType, 
  onStepClick 
}: SwimlaneRowProps) => {
  return (
    <div className={`${swimlaneBackgrounds[swimlaneType]} border-b border-border`}>
      <div className="flex">
        {/* Swimlane Label */}
        <div className="w-48 flex-shrink-0 p-6 border-r border-border">
          <h2 className="font-semibold text-text-primary text-lg">
            {title}
          </h2>
        </div>
        
        {/* Process Steps */}
        <div className="flex-1 p-6 overflow-x-auto">
          <div className="flex items-center gap-6 min-w-max">
            {steps.map((step, index) => (
              <ProcessBox
                key={step.id}
                title={step.title}
                description={step.description}
                onClick={() => onStepClick(step)}
                showArrow={index < steps.length - 1}
                swimlaneType={swimlaneType}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};