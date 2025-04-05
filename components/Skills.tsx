import { Card, CardContent } from "./ui/card"

const skillsData: string[] = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Node.js",
    "Express",
    "SQL",
    "Java",
    "Python"
]

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Skills</h1>
        <div className="flex flex-wrap gap-4 md:w-3/4 w-full">
            {skillsData.map((skill, index) => (
                <div key={index} className="">
                    <Card className="w-full max-w-md dark:hover:border-teal-600 hover:border-teal-400 transition-all hover:scale-105 shadow-xl">
                        <CardContent>
                            <span>{skill}</span>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills