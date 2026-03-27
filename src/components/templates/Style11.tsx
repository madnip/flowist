import React from 'react';
import { CVData } from '../../types';

interface TemplateProps {
  data: CVData;
}

export const Style11: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full bg-white text-[#1a1a1a] font-sans">
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-[35%] bg-[#0ea5e9] text-white p-8 flex flex-col">
          <div className="mb-12 relative">
            <div className="w-48 h-48 mx-auto bg-white/20 p-2 transform rotate-45 overflow-hidden">
               <div className="w-full h-full transform -rotate-45 overflow-hidden bg-slate-200">
                  <img src={data.personalInfo.photoUrl} alt={data.personalInfo.fullName} className="w-full h-full object-cover scale-125" referrerPolicy="no-referrer" crossOrigin="anonymous" />
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <div className="border-l-4 border-white pl-4 mb-6">
                <h1 className="text-3xl font-bold leading-none uppercase">{data.personalInfo.fullName}</h1>
                <p className="text-xs tracking-[0.3em] mt-2 opacity-90 uppercase">{data.personalInfo.jobTitle}</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">#</div>
                <h2 className="text-sm font-bold uppercase tracking-widest">Social</h2>
              </div>
              <div className="flex gap-2">
                {data.socialLinks.map((link, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">
                    {link.platform[0]}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">📞</div>
                <h2 className="text-sm font-bold uppercase tracking-widest">Contact</h2>
              </div>
              <ul className="space-y-3 text-[11px] opacity-90">
                <li>{data.personalInfo.phone}</li>
                <li>{data.personalInfo.email}</li>
                <li>{data.personalInfo.address}</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">⚙️</div>
                <h2 className="text-sm font-bold uppercase tracking-widest">Skill</h2>
              </div>
              <div className="space-y-4">
                {data.skills.map(skill => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-[10px] font-bold mb-1 uppercase">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">🌐</div>
                <h2 className="text-sm font-bold uppercase tracking-widest">Language</h2>
              </div>
              <div className="space-y-4">
                {data.languages.map(lang => (
                  <div key={lang.id}>
                    <div className="flex justify-between text-[10px] font-bold mb-1 uppercase">
                      <span>{lang.name}</span>
                      <span>{lang.level}%</span>
                    </div>
                    <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white" style={{ width: `${lang.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[65%] p-12 space-y-12 bg-slate-50">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-white text-lg">👤</div>
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">About Me</h2>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">{data.personalInfo.summary}</p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-white text-lg">🎓</div>
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">Education</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {data.education.map(edu => (
                <div key={edu.id} className="pl-10 relative">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0ea5e9] border-4 border-white"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-[#0ea5e9] uppercase">{edu.school}</h3>
                    <span className="text-[11px] font-bold text-slate-400">{edu.startDate}</span>
                  </div>
                  <p className="text-[12px] font-bold text-slate-700 mb-2">{edu.degree}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-white text-lg">💼</div>
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">Experience</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {data.experience.map(exp => (
                <div key={exp.id} className="pl-10 relative">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0ea5e9] border-4 border-white"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-[#0ea5e9] uppercase">{exp.company} - {exp.position}</h3>
                    <span className="text-[11px] font-bold text-slate-400">{exp.startDate}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-white text-lg">🎨</div>
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">Hobby</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {data.hobbies.map((hobby, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center text-xl">✨</div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{hobby}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-white text-lg">✱</div>
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-[#1e293b] flex-1 pb-1">Reference</h2>
            </div>
            <div className="grid grid-cols-2 gap-12">
              {data.references.map(ref => (
                <div key={ref.id}>
                  <h3 className="font-bold text-[#0ea5e9] text-sm uppercase">{ref.name}</h3>
                  <p className="text-slate-700 text-[11px] font-bold">{ref.company} / {ref.position}</p>
                  <p className="text-slate-500 text-[11px]">phone: {ref.phone}</p>
                  <p className="text-slate-500 text-[11px]">Relation: {ref.relation}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0ea5e9] p-8 flex justify-between items-center text-white">
        <div className="flex items-center gap-6">
          <div className="font-serif italic text-3xl opacity-80">Frank Sinatra</div>
          <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-xl">▶</div>
        </div>
        <button className="bg-[#1e293b] px-10 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">Contact Me</button>
      </div>
    </div>
  );
};
