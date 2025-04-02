import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
  } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface ExperienceItem {
    startDate: string;
    endDate: string;
    companyName: string;
    jobTitle: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        startDate: "October 2024",
        endDate: "Present",
        companyName: "Code The Change",
        jobTitle: "Student Developer",
        description: [
            "Mantaining and expanding the Code The Change Website,"
        ],
    },
    {
        startDate: "April 2023",
        endDate: "Present",
        companyName: "City of Calgary",
        jobTitle: "Swim Instructor",
        description: [
            "Teaching students how to swim and providing important feedback"
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
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>{item.startDate} - {item.endDate}</TimelineTime>
                    <TimelineTitle>{item.jobTitle} at {item.companyName}</TimelineTitle>
                    <TimelineBody>{item.description}</TimelineBody>
                </TimelineContent>
            </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export default Experience
