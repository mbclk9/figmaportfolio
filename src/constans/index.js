import avatar from "../assets/images/avatar.png"
import twitter from "../assets/icons/socialmedia/xx.svg"
import dribble from "../assets/icons/socialmedia/dribbble.svg"
import instagram from "../assets/icons/socialmedia/instagram.svg"
import linkedin from "../assets/icons/socialmedia/linkedin.svg"
import arrow from "../assets/icons/general/rightarrow.svg"
import about from "../assets/icons/general/about.svg"
import collabration from "../assets/icons/general/collabration.svg"
import design from "../assets/icons/general/design.svg"
import location from "../assets/icons/general/location.svg"
import portfolio from "../assets/icons/general/portfolio.svg"
import skills from "../assets/icons/general/skills.svg"
import testimonials from "../assets/icons/general/testimionals.svg"
import tools from "../assets/icons/general/toolst.svg"
import footercoffe from "../assets/icons/general/footercoffe.svg"
import creavity from "../assets/icons/skills/creavity.svg"
import problem from "../assets/icons/skills/problem.svg"
import ux from "..//assets/icons/skills/ux.svg"
import visual from "../assets/icons/skills/visual.svg"
import chat from "../assets/icons/toolsicon/chat.svg"
import figma from "../assets/icons/toolsicon/figma.svg"
import framer from "../assets/icons/toolsicon/framer.svg"
import photoshop from "../assets/icons/toolsicon/photoshop.svg"
import webflow from "../assets/icons/toolsicon/webflow.svg"
import luvyImage from "../assets/images/portfolio/luvy.png"
import mercuryImage from "../assets/images/portfolio/mercury.png"
import spectraImage from "../assets/images/portfolio/spectra.png"
import verselImage from "../assets/images/portfolio/versel.png"
import tomAvatar from "../assets/images/testimonials/tom.png"
import barisAvatar from "../assets/images/testimonials/baris.png"

export const Icons=[
    {
        category:'general',
        icons:{
            arrow:arrow,
            about:about,
            collabration:collabration,
            design:design,
            location:location,
            portfolio:portfolio,
            skills:skills,
            testimonials:testimonials,
            tools:tools,
            footercoffe:footercoffe
        }
    },
    {
        category:'skills',
        icons:{
            creavity:creavity,
            problem:problem,
            ux:ux,
            visual:visual

        }
    },
    {
        category:'tools',
        icons:{
            chat:chat,
            figma:figma,
            framer:framer,
            photoshop:photoshop,
            webflow:webflow,

        }
    },
    {
        category:'social',
        icons:{
            twitter:twitter,
            dribble:dribble,
            instagram:instagram,
            linkedin:linkedin,
        }
    }
]
   

  



export const Hero_Content= [
    {
        title:"Muhammet Çelik",
        about:`A frontend developer from Samsun with 3 years of experience. Specializing in Figma, 
                        I create visually stunning and user-friendly websites. 
                        My design philosophy focuses on seamless user experiences. 
                        Check out my portfolio for a glimpse of my work, and lets bring your digital visions to life!`,
        image:avatar,
    },

]

export const Counter =[
    {
        title:"PROJECT COMPLETED",
        number:"48",
        
    },
    {
        
        title:"CLIENTS CONTACTED",
        number:"99+"
    },
    {
    
        title:"PUBLICATIONS",
        number:"36"
    },
]


export const PortfolioContent =[
    {
        title:"Luvy",
        description:"Coming Soon!",
        image:luvyImage
    },
    {
        title:"Mercury",
        description:"Finans APP Template",
        image:mercuryImage
    },
    {
        title:"Spectra",
        description:"SaaS Template",
        image:spectraImage
    },
    {
        title:"Versel",
        description:"Coming Soon!",
        image:verselImage
    },
]


export const Review =[
    {
        name:"Tom Bekkers",
        role:"Founder • Flowbase ",
        avatar:tomAvatar,
        description:`Wei Chen's design prowess is unmatched. 
                    His attention to detail and innovative 
                    approach have transformed our products 
                    into sleek, user-centric experiences.`
    },
    {
        name:"Barış Çelik",
        role:"Founder • SienK ",
        avatar:barisAvatar,
        description:`Mr. Celik is a complete visionary designer. 
                        His ability to translate complex ideas into 
                        intuitive interfaces has elevated our 
                        products to new heights.`
    },
]

export const SkillsContent =[
    {
        title:"Problem Solving",
        description:"Innovative problem-solving and impactful solutions for a better experience.",
        role:"DESIGN",
        image:problem
    },
    {
        title:"UX Metrics",
        description:"Data-driven insights for improving user engagement and satisfaction.",
        role:"RESEARCH",
        image:ux
    },
    {
        title:"Visual Hierarchy",
        description:"Compelling visual hierarchy and composition in order to design better.",
        role:"DESIGN",
        image:visual
    },
    {
        title:"Design Decisions",
        description:"Leveraging valuable data insights to make informed design decisions.",
        role:"RESEARCH",
        image:creavity
    },
]
