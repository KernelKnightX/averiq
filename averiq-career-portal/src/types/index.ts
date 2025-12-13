interface CareerOption {
  id: string;
  title: string;
  description: string;
}

interface ResumeData {
  name: string;
  email: string;
  careerOption: CareerOption;
  resumeFile: File | null;
}

export type { CareerOption, ResumeData };