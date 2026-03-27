import { CVData } from "./types";

export const INITIAL_CV_DATA: CVData = {
  personalInfo: {
    fullName: "EDWARD SHINE",
    jobTitle: "GRAPHIC DESIGNER",
    email: "info20@gmail.com",
    phone: "+00 952 165",
    address: "uttara dhaka 1230",
    website: "www.edwardshine.com",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a incidunt, voluptatibus doloribus quod praesentium quibusdam provident? Culpa ut, ex laboriosam adipisci est quaerat, autem aspernatur doloribus alias iste amet.",
    photoUrl: "", // Start with empty to avoid CORS issues with external placeholders
  },
  socialLinks: [
    { platform: "Skype", url: "#" },
    { platform: "Instagram", url: "#" },
    { platform: "Facebook", url: "#" },
    { platform: "LinkedIn", url: "#" },
  ],
  experience: [
    {
      id: "1",
      company: "TECH COMPANY",
      position: "JUNIOR DATA",
      startDate: "2016",
      endDate: "2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam voluptates quasi illo! Maiores doloremque quisquam ipsa?",
      current: false,
    },
    {
      id: "2",
      company: "TECHNO COMPANY",
      position: "SENIOR DATA",
      startDate: "2020",
      endDate: "Present",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam voluptates quasi illo! Maiores doloremque quisquam ipsa?",
      current: true,
    },
  ],
  education: [
    {
      id: "1",
      school: "UNIVERSITY DEGREE",
      degree: "Bachelor of Arts",
      startDate: "2014",
      endDate: "2017",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam voluptates quasi illo! Maiores doloremque quisquam ipsa?",
    },
    {
      id: "2",
      school: "UNIVERSITY OF HONOURS",
      degree: "Master of Design",
      startDate: "2017",
      endDate: "2020",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam voluptates quasi illo! Maiores doloremque quisquam ipsa?",
    },
  ],
  skills: [
    { id: "1", name: "WEB DESIGN", level: 80 },
    { id: "2", name: "GRAPHIC DESIGN", level: 50 },
    { id: "3", name: "JAVA SCRIPT", level: 50 },
    { id: "4", name: "HTML", level: 50 },
    { id: "5", name: "CSS", level: 50 },
    { id: "6", name: "PHP", level: 50 },
  ],
  languages: [
    { id: "1", name: "ENGLISH", level: 50 },
    { id: "2", name: "SPANISH", level: 50 },
    { id: "3", name: "CHINESE", level: 50 },
  ],
  hobbies: ["MUSIC", "MOVIE", "WRITING", "FOOTBALL"],
  references: [
    {
      id: "1",
      name: "Johan Doe",
      position: "Job Position",
      company: "Company",
      phone: "+123 456 980",
      relation: "Brother",
    },
    {
      id: "2",
      name: "Marinda Joe",
      position: "Job Position",
      company: "Company",
      phone: "+256 456 980",
      relation: "Student",
    },
  ],
};
