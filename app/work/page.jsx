"use client"
import { m, motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const projects = [
    {
        num: '01',
        category: "frontend",
        title: "project 1",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur. Ducimus saepe commodi placeat officiis',
        stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
        image: '/assets/work/thumb1.png',
        live: '',
        github: ''
    },
    {
        num: '02',
        category: "fullstack",
        title: "project 2",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur. Ducimus saepe commodi placeat officiis',
        stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
        image: '/assets/work/thumb2.png',
        live: '',
        github: ''
    },
    {
        num: '03',
        category: "frontend",
        title: "project 3",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur. Ducimus saepe commodi placeat officiis',
        stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }],
        image: '/assets/work/thumb3.png',
        live: '',
        github: ''
    },
]



const Work = () => {
    const [project, setProject] = useState(project[0])
    return (
        <div>

        </div>
    )
}

export default Work
