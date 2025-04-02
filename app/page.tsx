import Image from "next/image";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Intro/>
        <Experience/>
      </main>
    </div>
  );
}
