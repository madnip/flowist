import React from 'react';
import { CVData } from '../types';
import { Plus, Trash2, Sparkles } from 'lucide-react';

interface CVEditorProps {
  data: CVData;
  onChange: (data: CVData) => void;
  onGenerateAI: (field: string) => void;
}

export const CVEditor: React.FC<CVEditorProps> = ({ data, onChange, onGenerateAI }) => {
  const updatePersonalInfo = (field: keyof CVData['personalInfo'], value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    });
  };

  const addExperience = () => {
    const newExp = {
      id: Math.random().toString(36).substr(2, 9),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    };
    onChange({ ...data, experience: [...data.experience, newExp] });
  };

  const removeExperience = (id: string) => {
    onChange({ ...data, experience: data.experience.filter(e => e.id !== id) });
  };

  const updateExperience = (id: string, field: string, value: any) => {
    onChange({
      ...data,
      experience: data.experience.map(e => e.id === id ? { ...e, [field]: value } : e)
    });
  };

  const addEducation = () => {
    const newEdu = {
      id: Math.random().toString(36).substr(2, 9),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onChange({ ...data, education: [...data.education, newEdu] });
  };

  const updateEducation = (id: string, field: string, value: any) => {
    onChange({
      ...data,
      education: data.education.map(e => e.id === id ? { ...e, [field]: value } : e)
    });
  };

  const addSkill = () => {
    const newSkill = { id: Math.random().toString(36).substr(2, 9), name: "", level: 50 };
    onChange({ ...data, skills: [...data.skills, newSkill] });
  };

  const updateSkill = (id: string, field: string, value: any) => {
    onChange({
      ...data,
      skills: data.skills.map(s => s.id === id ? { ...s, [field]: value } : s)
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo('photoUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <section>
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-flowist-blue/10 text-flowist-blue flex items-center justify-center">👤</span>
          Personal Information
        </h2>
        
        <div className="mb-6 flex items-center gap-6 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm flex-shrink-0">
            {data.personalInfo.photoUrl ? (
              <img src={data.personalInfo.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <Plus size={24} />
              </div>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Profile Picture</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePhotoUpload}
              className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-flowist-blue file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
            <input 
              type="text" 
              value={data.personalInfo.fullName} 
              onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-flowist-blue/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Job Title</label>
            <input 
              type="text" 
              value={data.personalInfo.jobTitle} 
              onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-flowist-blue/20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
            <input 
              type="email" 
              value={data.personalInfo.email} 
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-flowist-blue/20"
            />
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-bold text-slate-500 uppercase">Professional Summary</label>
              <button 
                onClick={() => onGenerateAI('summary')}
                className="text-[10px] font-bold text-flowist-blue flex items-center gap-1 hover:underline"
              >
                <Sparkles size={12} /> AI Suggest
              </button>
            </div>
            <textarea 
              value={data.personalInfo.summary} 
              onChange={(e) => updatePersonalInfo('summary', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-flowist-blue/20"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-flowist-green/10 text-flowist-green flex items-center justify-center">💼</span>
            Experience
          </h2>
          <button 
            onClick={addExperience}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="space-y-4">
          {data.experience.map((exp) => (
            <div key={exp.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 relative group">
              <button 
                onClick={() => removeExperience(exp.id)}
                className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={14} />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <input 
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
                <input 
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
                <input 
                  placeholder="Start Date"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
                <input 
                  placeholder="End Date"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
                <div className="col-span-2 flex justify-between items-center">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Description</label>
                  <button 
                    onClick={() => onGenerateAI(`experience-${exp.id}`)}
                    className="text-[10px] font-bold text-flowist-blue flex items-center gap-1 hover:underline"
                  >
                    <Sparkles size={10} /> Optimize
                  </button>
                </div>
                <textarea 
                  placeholder="Describe your achievements..."
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  className="col-span-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                  rows={2}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-flowist-orange/10 text-flowist-orange flex items-center justify-center">🎓</span>
            Education
          </h2>
          <button 
            onClick={addEducation}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 relative group">
              <button 
                onClick={() => onChange({ ...data, education: data.education.filter(e => e.id !== edu.id) })}
                className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={14} />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <input 
                  placeholder="School/University"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
                <input 
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
                <input 
                  placeholder="Start Date"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
                <input 
                  placeholder="End Date"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">⚡</span>
            Skills
          </h2>
          <button 
            onClick={addSkill}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {data.skills.map((skill) => (
            <div key={skill.id} className="flex items-center gap-2 p-2 border border-slate-100 rounded-lg bg-slate-50/50">
              <input 
                placeholder="Skill"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded text-xs"
              />
              <input 
                type="number"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                className="w-12 px-1 py-1 bg-white border border-slate-200 rounded text-xs"
              />
              <button 
                onClick={() => onChange({ ...data, skills: data.skills.filter(s => s.id !== skill.id) })}
                className="text-slate-300 hover:text-red-500"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Add more sections for Education, Skills, etc. */}
    </div>
  );
};
