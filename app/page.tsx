import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import CustomDock from "@/components/CustomDock";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-full w-full dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
    <div className="lg:w-8/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Intro/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <ContactMe/>
        <CustomDock orientation="vertical"/>
      </main>
    </div>
    </div>

  );
}
