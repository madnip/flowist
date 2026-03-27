import React from 'react';
import { CVData } from '../../types';

interface TemplateProps {
  data: CVData;
}

export const Style10: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full bg-[#f3f4f6] text-[#1a1a1a] font-sans">
      {/* Header */}
      <div className="bg-[#1e293b] text-white p-12 flex justify-between items-center relative">
        <div className="flex gap-4 absolute top-8 left-8">
          {data.socialLinks.map((link, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 cursor-pointer">
              {link.platform[0]}
            </div>
          ))}
        </div>
        
        <div className="flex-1 text-right pr-12">
           <h1 className="text-4xl font-bold tracking-widest uppercase text-[#d4af37]">{data.personalInfo.fullName}</h1>
           <p className="text-sm tracking-[0.4em] mt-2 opacity-80 uppercase">{data.personalInfo.jobTitle}</p>
        </div>

        <div className="w-48 h-48 rounded-full border-8 border-[#d4af37]/30 p-2 relative z-10">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-200">
            <img src={data.personalInfo.photoUrl} alt={data.personalInfo.fullName} className="w-full h-full object-cover" referrerPolicy="no-referrer" crossOrigin="anonymous" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 p-12 gap-12">
        {/* Left Column */}
        <div className="w-1/2 space-y-12">
          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">About Me</h2>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 italic">{data.personalInfo.summary}</p>
          </section>

          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">Skill</h2>
            </div>
            <div className="space-y-4">
              {data.skills.map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between text-[10px] font-bold mb-1 uppercase">
                    <span>{skill.name}</span>
                    <span className="text-[#d4af37]">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-slate-200 overflow-hidden">
                    <div className="h-full bg-[#1e293b]" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">Education</h2>
            </div>
            <div className="space-y-6">
              {data.education.map(edu => (
                <div key={edu.id} className="relative pl-6 border-l border-slate-300">
                  <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#d4af37]"></div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#1e293b]">{edu.startDate}</span>
                    <h3 className="text-[11px] font-bold text-[#d4af37] uppercase">{edu.school}</h3>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">Hobby</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {data.hobbies.map((hobby, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-sm">✨</div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase">{hobby}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-1/2 space-y-12">
          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">Contact</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                <div className="w-8 h-8 bg-[#d4af37] text-white flex items-center justify-center rounded">📞</div>
                <span className="text-[11px] font-bold text-slate-600">{data.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                <div className="w-8 h-8 bg-[#d4af37] text-white flex items-center justify-center rounded">✉️</div>
                <span className="text-[11px] font-bold text-slate-600">{data.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                <div className="w-8 h-8 bg-[#d4af37] text-white flex items-center justify-center rounded">📍</div>
                <span className="text-[11px] font-bold text-slate-600">{data.personalInfo.address}</span>
              </div>
            </div>
          </section>

          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">Language</h2>
            </div>
            <div className="space-y-4">
              {data.languages.map(lang => (
                <div key={lang.id} className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-bold uppercase">
                    <span>{lang.name}</span>
                    <span>{lang.level}%</span>
                  </div>
                  <div className="h-1 bg-slate-200">
                    <div className="h-full bg-[#d4af37]" style={{ width: `${lang.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">Experience</h2>
            </div>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-6 border-l border-slate-300">
                  <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#d4af37]"></div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#1e293b]">{exp.startDate}</span>
                    <h3 className="text-[11px] font-bold text-[#d4af37] uppercase">{exp.company} - {exp.position}</h3>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#d4af37]"></div>
              <h2 className="text-xl font-bold uppercase tracking-widest bg-[#d4af37]/10 px-4 py-1 inline-block skew-x-[-15deg]">Reference</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.references.map(ref => (
                <div key={ref.id} className="bg-white p-3 rounded shadow-sm">
                  <h3 className="font-bold text-[#d4af37] text-[11px] uppercase">{ref.name}</h3>
                  <p className="text-slate-700 text-[9px] font-bold">{ref.company} / {ref.position}</p>
                  <p className="text-slate-500 text-[9px]">phone: {ref.phone}</p>
                  <p className="text-slate-500 text-[9px]">Relation: {ref.relation}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1e293b] p-8 flex justify-between items-center text-white mt-auto">
        <div className="font-serif italic text-2xl opacity-60">Frank Sinatra</div>
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-white/20 cursor-pointer">▶</div>
        <button className="border border-[#d4af37] text-[#d4af37] px-8 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37] hover:text-[#1e293b] transition-colors">Contact Me</button>
      </div>
    </div>
  );
};
