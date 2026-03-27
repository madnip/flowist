import { useState, useRef } from 'react';
import { CVEditor } from './components/CVEditor';
import { CVPreview } from './components/CVPreview';
import { INITIAL_CV_DATA } from './constants';
import { CVData, TemplateId } from './types';
import { generateSummary, optimizeExperience } from './services/aiService';
import { Download, Layout, Sparkles, FileText, Settings, Share2, Eye } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [data, setData] = useState<CVData>(INITIAL_CV_DATA);
  const [templateId, setTemplateId] = useState<TemplateId>('style-1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  
  const handleGenerateAI = async (field: string) => {
    setIsGenerating(true);
    if (field === 'summary') {
      const summary = await generateSummary(data.personalInfo.jobTitle, data.skills.map(s => s.name));
      if (summary) {
        setData(prev => ({
          ...prev,
          personalInfo: { ...prev.personalInfo, summary }
        }));
      }
    } else if (field.startsWith('experience-')) {
      const id = field.split('-')[1];
      const exp = data.experience.find(e => e.id === id);
      if (exp) {
        const optimized = await optimizeExperience(exp.description);
        if (optimized) {
          setData(prev => ({
            ...prev,
            experience: prev.experience.map(e => e.id === id ? { ...e, description: optimized } : e)
          }));
        }
      }
    }
    setIsGenerating(false);
  };

  const downloadPDF = async () => {
    const element = document.getElementById('cv-preview');
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-flowist-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">F</div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-none">Flowist CV</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ultimate Builder</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('edit')}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeTab === 'edit' ? 'bg-white text-flowist-blue shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <div className="flex items-center gap-2"><FileText size={16} /> Content</div>
            </button>
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeTab === 'preview' ? 'bg-white text-flowist-blue shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <div className="flex items-center gap-2"><Eye size={16} /> Preview</div>
            </button>
          </div>

          <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden md:block"></div>

          <button 
            onClick={downloadPDF}
            className="bg-flowist-blue text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-flowist-blue/20"
          >
            <Download size={18} /> Export PDF
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Template Selector */}
        <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 no-print">
          <div className="p-2 text-slate-400 hover:text-flowist-blue cursor-pointer transition-colors">
            <Layout size={24} />
          </div>
          <div className="flex flex-col gap-4">
            {(['style-1', 'style-10', 'style-11'] as TemplateId[]).map((id) => (
              <button 
                key={id}
                onClick={() => setTemplateId(id)}
                className={`w-12 h-16 rounded-lg border-2 transition-all overflow-hidden ${templateId === id ? 'border-flowist-blue ring-4 ring-flowist-blue/10' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <div className={`w-full h-full bg-slate-100 flex items-center justify-center text-[8px] font-bold ${templateId === id ? 'text-flowist-blue' : 'text-slate-400'}`}>
                  {id.split('-')[1]}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-auto p-2 text-slate-400 hover:text-flowist-blue cursor-pointer transition-colors">
            <Settings size={24} />
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Editor Column */}
          <div className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${activeTab === 'preview' ? 'hidden md:block' : 'block'}`}>
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Build your CV</h2>
                  <p className="text-slate-500 text-sm">Fill in your details and watch the magic happen.</p>
                </div>
                {isGenerating && (
                  <div className="flex items-center gap-2 text-flowist-blue text-xs font-bold animate-pulse">
                    <Sparkles size={14} /> AI is thinking...
                  </div>
                )}
              </div>
              <CVEditor data={data} onChange={setData} onGenerateAI={handleGenerateAI} />
            </div>
          </div>

          {/* Preview Column */}
          <div className={`flex-1 bg-slate-200 overflow-y-auto p-12 transition-all duration-300 ${activeTab === 'edit' ? 'hidden lg:block' : 'block'}`}>
            <div className="scale-[0.6] origin-top md:scale-[0.7] lg:scale-[0.8] xl:scale-100 transition-transform">
              <CVPreview data={data} templateId={templateId} />
            </div>
            
            {/* Watermark for Free Tier */}
            <div className="mt-8 text-center text-slate-400 text-xs font-medium flex items-center justify-center gap-2">
              Created with <span className="text-red-500">♥</span> at FlowistCV.com
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Bar (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 flex gap-2 z-50">
        <button 
          onClick={() => setActiveTab('edit')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'edit' ? 'bg-flowist-blue text-white' : 'text-slate-400'}`}
        >
          <FileText size={20} />
        </button>
        <button 
          onClick={() => setActiveTab('preview')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'preview' ? 'bg-flowist-blue text-white' : 'text-slate-400'}`}
        >
          <Eye size={20} />
        </button>
        <button className="p-3 text-slate-400">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
}
