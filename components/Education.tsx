import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
  } from "flowbite-react";

interface EducationItem {
    startDate: string;
    endDate: string;
    schoolName: string;
    Degree: string;
    schoolLocation: string;
}

const educationItems: EducationItem[] = [
    {
        startDate: "September 2023",
        endDate: "Present",
        schoolName: "University of Calgary",
        Degree: "Computer Science",
        schoolLocation: "Calgary, Alberta"
    }
]

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Education</h1>
        <Timeline>
        {educationItems.map((item, index) => (
            <TimelineItem key={index}>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>{item.startDate} - {item.endDate}</TimelineTime>
                    <TimelineTitle>{item.Degree} at {item.schoolName}</TimelineTitle>
                    <TimelineBody className="text-gray-700">{item.schoolLocation}</TimelineBody>
                </TimelineContent>
            </TimelineItem>
        ))}
        </Timeline>
    </div>
  )
}

export default Education