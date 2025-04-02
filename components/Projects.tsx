import Image from "next/image";

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
        technologies: ["Next.js", "Tailwind CSS", "Supabase", "React"]
    }
]

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="grid grid-cols-2 gap-4">
            {projectsData.map((item, index) => (
               <div className="flex flex-col border border-gray-100" key={index}>
                    <Image src={item.previewImage} alt="project image" width={500} height={500}></Image>
                    <div className="flex flex-col gap-2 p-2">
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <div className="flex gap-2">
                            {item.technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-500 text-white"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
               </div> 
            ))}
        </div>
    </div>
  )
}

export default Projects
