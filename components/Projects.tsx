import Image from "next/image";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    link: string
    code: string
    previewImage: string;
    technologies: string[];
}

const projectsData: Project[] = [
    {
        title: "Eco Pal",
        description: "Created for CalHacks 2025, full stack app created with Next.js for facilitating online adoptions with a tamagotchi pet system.",
        link: "https://eco-pal-one.vercel.app/",
        code: "https://github.com/Yemyam/EcoPal",
        previewImage: "/images/ecopals.png",
        technologies: ["Next.js", "Tailwind CSS","React", "Supabase", ]
    },
    {
        title: "BabbleBack (WIP)",
        description: "An AI driven language learning app made with Nextjs. I wanted to build this to experiment with the openAI api and AWS poly for text to speech!",
        link: "",
        code: "https://github.com/Yemyam/Babbleback",
        previewImage: "/images/babbleback.png",
        technologies: ["Next.js", "AWS Poly", "React", "OpenAI API", "Express", "MongoDB"]
    },
    {
        title: "Personal Portfolio",
        description: "You are looking at it. Built with Next.js with components from Shadcn and Flowbite!",
        link: "https://personal-portfolio-navy-one.vercel.app/",
        code: "https://github.com/Yemyam/personal-portfolio",
        previewImage: "/images/portfolio.png",
        technologies: ["Next.js", "Tailwind CSS", "React", "Flowbite", "Shadcn"]
    },
    /*{
        title: "Blog",
        description: "A small blog that I built with Next.js for documenting my thoughts and journey in tech! Posts are markdown files that are parsed with gray-matter and dynamically routed to.",
        link: "https://personal-portfolio-navy-one.vercel.app/",
        code: "https://github.com/Yemyam/my-blog",
        previewImage: "/images/portfolio.png",
        technologies: ["Next.js", "Tailwind CSS", "Shadcn"]
    },*/
]

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            {projectsData.map((item, index) => (
               <div className="flex flex-col border-4 rounded-2xl dark:border-gray-800 border-black overflow-hidden" key={index}>
                    <Image src={item.previewImage} 
                        alt="project image" 
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}>
                    </Image>
                    <div className="flex flex-col gap-2 p-2">
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p className="text-base dark:text-gray-500 text-gray-700">{item.description}</p>
                        <div className="flex gap-1 flex-wrap">
                            {item.technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex border dark:border-black border-white rounded-md px-2 py-1 text-sm bg-teal-400 dark:bg-teal-600 dark:text-white"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-2">
            {/*Possibly change button color to teal 500, and second button to white or something */}
                            <Link href={item.link} target="_blank">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        View
                                    </span>
                                </button>
                            </Link>
                            <Link href={item.code} target="_blank">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        Code
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
               </div> 
            ))}
        </div>
    </div>
  )
}

export default Projects
