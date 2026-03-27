export interface CVData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    summary: string;
    photoUrl?: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
  experience: {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    current: boolean;
  }[];
  education: {
    id: string;
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: {
    id: string;
    name: string;
    level: number; // 0-100
  }[];
  languages: {
    id: string;
    name: string;
    level: number; // 0-100
  }[];
  hobbies: string[];
  references: {
    id: string;
    name: string;
    position: string;
    company: string;
    phone: string;
    relation: string;
  }[];
}

export type TemplateId = 'style-1' | 'style-10' | 'style-11';

export interface CVState {
  data: CVData;
  templateId: TemplateId;
  themeColor: string;
}
