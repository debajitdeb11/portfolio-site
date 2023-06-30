import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { GetStaticProps } from 'next';
import {
  getAbout,
  getExperiences,
  getPageInfo,
  getProjects,
  getSkills,
  getSocialInfo,
} from '@/utils/service';

type Props = {
  info: Info[];
  about: About[];
  experience: Experience[];
  social: Social[];
  projects: Project[];
  skills: Skill[];
};

export default function Home({
  info,
  about,
  social,
  experience,
  projects,
  skills,
}: Props) {
  console.log('Skill => ', skills);

  return (
    <div className="bg-[rgb(36,36,36)] overflow-x-hidden text-white h-screen snap-y snap-mandatory z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/80">
      <Head>
        <title>Debajit Deb</title>
      </Head>
      <Header social={social} info={info} />

      <section id="hero" className="snap-start">
        <Hero info={info} />
      </section>

      <section id="about" className="snap-start">
        <About about={about} />
      </section>

      <section id="experience" className="snap-start">
        <Experience experience={experience} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [info, about, social, experience, projects, skills] = await Promise.all(
    [
      getPageInfo(),
      getAbout(),
      getSocialInfo(),
      getExperiences(),
      getProjects(),
      getSkills(),
    ]
  );

  return {
    props: {
      info: info,
      about: about,
      social: social,
      experience: experience,
      projects: projects,
      skills: skills,
    },
    revalidate: 3600,
  };
};
