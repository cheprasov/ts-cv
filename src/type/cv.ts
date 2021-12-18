export interface CVInf {
    update: string;
    profile: ProfileInf;
    contacts: ContactsInf;
    links: LinksInf;
    skills: TechnologiesType[];
    about: string[];
    requirements: string[];
    educations: EducationInf[];
    experiences: ExperienceInf[];
    projects: ProjectInf[];
    awards: AwardInf[];
}

export type TechnologyType = string | string[];
export type TechnologiesType = TechnologyType[];


export interface AwardInf {
    title: string;
    organizer: string;
    logo?: string;
    date: DateType;
    description: string[] | string;
}

export type DateType = string[] | string;

export interface ContactsInf {
    phone: string;
    email: string;
}

export interface EducationInf {
    name: string;
    field: string;
    degree: string;
    dateBeg: string;
    dateEnd: string;
    country: string;
    city: string;
}

export interface ExperienceInf {
    title: string;
    company: string;
    logo?: string;
    country: string;
    city: string;
    visa: null | string;
    dateBeg: string;
    dateEnd: string;
    description: string;
    duties: string[];
    department: string;
    technologies: TechnologiesType[];
}

export interface LinksInf {
    linkedin: string;
    github: string;
    packagist: string;
    npm: string;
}

export interface ProfileInf {
    photoUrl: string;
    firstName: string;
    lastName: string;
    dateBirth: string;
    headline: string;
    country: string;
    city: string;
    postCode: string;
    status: string;
}

export interface ProjectInf {
    imageUrl: string;
    title: string;
    subTitle?: string;
    date?: string;
    description: string[];
    technologies?: TechnologiesType[];
}
