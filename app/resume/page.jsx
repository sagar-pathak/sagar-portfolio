"use client"

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from 'react-icons/fa'

import {
    SiTailwindcss,
    SiNextdotjs
} from 'react-icons/si'

// about
const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus, nobis temporibus, aliquid reiciendis sit fuga adipisci quam pariatur itaque inventore odit culpa minima fugiat vitae non dolorem consectetur labore!',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sagar Pathak",
        },
        {
            fieldName: "Phone",
            fieldValue: "+1 901 857 xxxx",
        },
        {
            fieldName: "Experience",
            fieldValue: "8+ Years",
        },
        {
            fieldName: "Email",
            fieldValue: "sagarpaathak[@]gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Nepali",
        }
    ]
}


const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Co-founded and led front-end development at Inspiring Lab, implementing real-time vehicle tracking systems and optimizing logistics management. At Zakipoint Health, managed a team of six to deliver client-focused software solutions and developed proof of concepts for new features. At Verisk Health, improved database efficiency by 87%, designed internal tools, and contributed to high-impact projects like ClaimSearch 2.0.',
    items: [
        {
            company: "Inspiring Lab",
            position: 'Co-founder and Senior Software Engineer',
            duration: 'May 2020 - August 2021'
        },
        {
            company: "Zakipoint Health",
            position: 'Principal Software Engineer',
            duration: 'July 2018 - April 2020'
        },
        {
            company: "Verisk Health Inc.",
            position: 'Software Engineer',
            duration: 'Jan 2015 - June 2018'
        }
    ]
}


const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'Relevant Coursework: Algorithms | Software Engineering | Machine Learning | Artificial Intelligence | Cryptography | Distributed System | Data Mining | Natural Language Processing',
    items: [
        {
            institution: 'University of Memphis',
            degree: 'MS in Computer Science',
            duration: 'January 2022 - August 2024'
        },
        {
            institution: 'Kathmandu University',
            degree: 'Bachelor of Computer Engineering',
            duration: 'August 2010 - December 2014'
        }
    ]
}

const skills = {
    title: 'My skills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime suscipit consequuntur numquam impedit quibusdam, perferendis aperiam illum fuga quis',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5'
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3'
        },
        {
            icon: <FaJs />,
            name: 'javascript'
        },
        {
            icon: <FaReact />,
            name: 'react.js'
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js'
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind.css'
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js'
        },
        {
            icon: <FaFigma />,
            name: 'figma'
        },
    ]
}

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >

            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <di className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </di>
                            </div>
                        </TabsContent>



                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <di className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </di>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="div flex flex-col gap-[30px]">
                                <div className="div flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 xl:gap-[30px] gap-4'>
                                    {skills.skillList.map((skill, index)=>{
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={180}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-600'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 fap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index)=>{
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span>{item.fieldValue}</span>
                                            </li> 
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>


            </div>

        </motion.div>
    )
}

export default Resume
