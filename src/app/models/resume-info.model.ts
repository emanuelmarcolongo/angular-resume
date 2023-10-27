export interface ResumeInfoData {
  firstName: string;
  lastName: string;
  job: string;
  socials: {
    linkedin: string;
    github: string;
  };
  about: string;
  location: string;
  phone: string;
  email: string;
  education: EducationInfoData[];
}

export interface EducationInfoData {
  id: number;
  institution: string;
  type: string;
  currentOn: boolean;
  course: string;
  startDate: string;
  conclusionDate: string;
  about: string;
  additionalInfo: string;
}
