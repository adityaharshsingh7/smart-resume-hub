import React, { useRef } from "react";
import { useResume } from "@/context/ResumeContext";
import SimpleTemplate from "./templates/SimpleTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";

const ResumePreview: React.FC = () => {
  const { resume } = useResume();
  const { templateId } = resume;
  const resumeRef = useRef<HTMLDivElement>(null);

  const renderTemplate = () => {
    switch (templateId) {
      case "simple":
        return <SimpleTemplate />;
      case "professional":
        return <ProfessionalTemplate />;
      case "modern":
        return <ModernTemplate />;
      case "creative":
        return <CreativeTemplate />;
      default:
        return <SimpleTemplate />;
    }
  };

  return (
    <div className="h-full overflow-auto bg-gray-100 p-6 flex justify-center items-start">
      <div 
        ref={resumeRef}
        className="transform scale-[0.75] origin-top print:scale-100 transition-transform duration-200"
        style={{ 
          width: "8.5in",
          marginBottom: "40px",
          transformOrigin: "top center"
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
