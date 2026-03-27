import React from 'react';
import { Style1 } from './templates/Style1';
import { Style10 } from './templates/Style10';
import { Style11 } from './templates/Style11';
import { CVData, TemplateId } from '../types';

interface CVPreviewProps {
  data: CVData;
  templateId: TemplateId;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ data, templateId }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case 'style-1':
        return <Style1 data={data} />;
      case 'style-10':
        return <Style10 data={data} />;
      case 'style-11':
        return <Style11 data={data} />;
      default:
        return <Style1 data={data} />;
    }
  };

  return (
    <div id="cv-preview" className="cv-preview-container">
      {renderTemplate()}
    </div>
  );
};
