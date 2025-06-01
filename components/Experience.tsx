import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
  } from "flowbite-react";

interface ExperienceItem {
    startDate: string;
    endDate: string;
    companyName: string;
    jobTitle: string;
    description: string[];
    skills: string[]
}

const experiences: ExperienceItem[] = [
    {
        startDate: "October 2024",
        endDate: "Present",
        companyName: "Code The Change",
        jobTitle: "Full Stack Developer",
        description: [
            "• Maintaining and expanding the Code The Change Website.",
            "• Working in an Agile team utilizing Jira, Next.js, Tailwind CSS, Supabase and Contentful!"
        ],
        skills: [
            "Jira", "Agile", "Next.js", "Tailwind CSS", "Supabase", "Figma", "Express"
        ]
    },
    {
        startDate: "April 2023",
        endDate: "Present",
        companyName: "City of Calgary",
        jobTitle: "Swim Instructor",
        description: [
            "• Instructing students on swimming techniques and water safety.",
            "• Working closely with students and parents to create learning plans and provide feedback."
        ],
        skills: [
            "Leadership", "Communication"
        ]
    }
]



const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Experience</h1>
        <Timeline>
        {experiences.map((item, index) => (
            <TimelineItem key={index}>
                <TimelinePoint/>
                <TimelineContent>
                    <TimelineTime className="dark:text-gray-500">{item.startDate} - {item.endDate}</TimelineTime>
                    <TimelineTitle>{item.jobTitle} at {item.companyName}</TimelineTitle>
                    <TimelineBody className="text-gray-700">{item.description[0]}<br/>{item.description[1]}</TimelineBody>
                    <div className="flex flex-wrap gap-4 w-3/4">
                        {item.skills.map((skill, index) => (
                            <div 
                                key={index} 
                                className="flex border dark:border-black border-white rounded-md p-4 dark:bg-teal-600 dark:text-white text-sm px-2 py-1 bg-teal-400">
                                {skill}
                            </div>
                        ))}
                    </div>
                </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export default Experience
