import { ArrowRight } from "lucide-react";

interface ProcessBoxProps {
  title: string;
  description?: string;
  onClick: () => void;
  showArrow?: boolean;
  swimlaneType: 'csm' | 'deploy' | 'manager';
}

const swimlaneStyles = {
  csm: 'border-swimlane-csm-accent hover:bg-swimlane-csm',
  deploy: 'border-swimlane-deploy-accent hover:bg-swimlane-deploy',
  manager: 'border-swimlane-manager-accent hover:bg-swimlane-manager'
};

export const ProcessBox = ({ 
  title, 
  description, 
  onClick, 
  showArrow = true,
  swimlaneType 
}: ProcessBoxProps) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onClick}
        className={`
          bg-process-box border-2 rounded-xl p-4 min-w-[200px] max-w-[280px]
          shadow-process transition-all duration-200 cursor-pointer
          hover:shadow-lg hover:scale-105 hover:-translate-y-1
          ${swimlaneStyles[swimlaneType]}
          text-left group
        `}
      >
        <h3 className="font-medium text-text-primary text-sm leading-snug mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
            {description}
          </p>
        )}
      </button>
      
      {showArrow && (
        <ArrowRight 
          className="w-6 h-6 text-text-muted flex-shrink-0 transition-colors duration-200"
        />
      )}
    </div>
  );
};