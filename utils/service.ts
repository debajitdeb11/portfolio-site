export const getPageInfo = async (): Promise<Info[]> => {
    const response = await fetch('http://0.0.0.0:3000/api/info');

    const data = await response.json();
    const info: Info[] = data.info;

    return info;
}

export const getAbout = async (): Promise<About[]> => {
    const response = await fetch('http://0.0.0.0:3000/api/about');

    const data = await response.json();
    const about: About[] = data.about;

    return about;
}

export const getSocialInfo = async (): Promise<Social[]> => {
    const response = await fetch('http://0.0.0.0:3000/api/social');

    const data = await response.json();
    const socials: Social[] = data.socials;

    return socials;
}

export const getExperiences = async (): Promise<Experience[]> => {
    const response = await fetch('http://0.0.0.0:3000/api/experience');

    const data = await response.json();
    const experience: Experience[] = data.experience;

    return experience;
}

export const getProjects = async (): Promise<Project[]> => {
    const response = await fetch('http://0.0.0.0:3000/api/project');

    const data = await response.json();
    const projects: Project[] = data.projects;

    return projects;
}

export const getSkills = async (): Promise<Skill[]> => {
    const response = await fetch('http://0.0.0.0:3000/api/skill');

    const data = await response.json();
    const skills: Skill[] = data.skills;

    return skills;
}