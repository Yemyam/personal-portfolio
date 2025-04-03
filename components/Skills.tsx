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
        <div className="flex flex-wrap gap-4 w-3/4">
            {skillsData.map((skill, index) => (
                <div key={index} className="flex border dark:border-black border-white rounded-md p-4 dark:bg-teal-600 dark:text-white text-sm px-2 py-1 bg-teal-400">
                    {skill}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills