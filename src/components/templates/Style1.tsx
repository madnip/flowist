import React from 'react';
import { CVData } from '../../types';

interface TemplateProps {
  data: CVData;
}

export const Style1: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full bg-white text-[#1a1a1a] font-sans">
      {/* Header */}
      <div className="bg-[#1e293b] text-white p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 transform skew-x-[-20deg] translate-x-1/4"></div>
        <div className="relative z-10 flex items-center gap-8">
          <div className="w-32 h-32 rounded-full border-4 border-red-600 overflow-hidden bg-slate-200">
            <img src={data.personalInfo.photoUrl} alt={data.personalInfo.fullName} className="w-full h-full object-cover" referrerPolicy="no-referrer" crossOrigin="anonymous" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tighter uppercase">{data.personalInfo.fullName}</h1>
            <p className="text-red-500 font-medium tracking-widest mt-1 uppercase">{data.personalInfo.jobTitle}</p>
            <div className="flex gap-3 mt-4">
              {data.socialLinks.map((link, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px]">
                  {link.platform[0]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Column */}
        <div className="w-[40%] bg-[#f1f5f9] p-8 space-y-8">
          <section>
            <h2 className="bg-[#1e293b] text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">About Me</h2>
            <p className="text-xs leading-relaxed text-slate-600">{data.personalInfo.summary}</p>
          </section>

          <section>
            <h2 className="bg-[#1e293b] text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">Contact</h2>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><span>📞</span> {data.personalInfo.phone}</li>
              <li className="flex items-center gap-2"><span>✉️</span> {data.personalInfo.email}</li>
              <li className="flex items-center gap-2"><span>📍</span> {data.personalInfo.address}</li>
            </ul>
          </section>

          <section>
            <h2 className="bg-[#1e293b] text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">Skill</h2>
            <div className="space-y-3">
              {data.skills.map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between text-[10px] font-bold mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="bg-[#1e293b] text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">Language</h2>
            <div className="space-y-3">
              {data.languages.map(lang => (
                <div key={lang.id}>
                  <div className="flex justify-between text-[10px] font-bold mb-1">
                    <span>{lang.name}</span>
                    <span>{lang.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600" style={{ width: `${lang.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="bg-[#1e293b] text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">Hobby</h2>
            <div className="grid grid-cols-2 gap-4 text-[10px] font-bold text-slate-600">
              {data.hobbies.map((hobby, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center">🎨</div>
                  <span>{hobby}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-[60%] p-8 space-y-8">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-white">🎓</div>
              <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">Education</h2>
            </div>
            <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {data.education.map(edu => (
                <div key={edu.id} className="pl-8 relative">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#1e293b] border-4 border-white"></div>
                  <h3 className="text-sm font-bold text-red-600 uppercase">{edu.school}</h3>
                  <p className="text-[10px] text-slate-500 mb-1">{edu.startDate} - {edu.endDate}</p>
                  <p className="text-[11px] font-medium text-slate-700 mb-1">{edu.degree}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-white">💼</div>
              <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">Experience</h2>
            </div>
            <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {data.experience.map(exp => (
                <div key={exp.id} className="pl-8 relative">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#1e293b] border-4 border-white"></div>
                  <h3 className="text-sm font-bold text-red-600 uppercase">{exp.company} - {exp.position}</h3>
                  <p className="text-[10px] text-slate-500 mb-1">{exp.startDate} - {exp.endDate}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-white">✱</div>
              <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">Reference</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {data.references.map(ref => (
                <div key={ref.id} className="text-[10px]">
                  <h3 className="font-bold text-red-600 text-sm">{ref.name}</h3>
                  <p className="text-slate-700 font-medium">{ref.company} / {ref.position}</p>
                  <p className="text-slate-500">phone: {ref.phone}</p>
                  <p className="text-slate-500">Relation: {ref.relation}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1e293b] p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">▶</div>
          <div className="font-serif italic text-xl opacity-70">Frank Sinatra</div>
        </div>
        <button className="bg-red-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Contact Me</button>
      </div>
    </div>
  );
};
