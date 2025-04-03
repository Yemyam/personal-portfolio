import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import CustomDock from "@/components/CustomDock";

export default function Home() {
  return (
    <div className="w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Intro/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <ContactMe/>
        <div className="fixed left-40 top-1/2 bottom-1/2 flex items-center justify-center">
          <CustomDock orientation="vertical"/>
        </div>
      </main>
    </div>
  );
}

