import { Review } from "../constans"
import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { motion,useInView } from "framer-motion"
import { useRef } from "react"

export default function Testimonials(){

    const iconNames =[
        { category: 'general', name: 'testimonials' },
    ]

    const icons = iconNames.reduce((acc, icon) => {
        acc[icon.name] = getIconByName(Icons, icon.category, icon.name);
        return acc;
    }, {});


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); 
    
    return(
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-12 px-8 gap-12">
            
            <div  className=" items-center justify-center flex flex-col gap-4 ">
                <img  src={icons.testimonials} alt="" width={40} height={40} />
                <div className="flex flex-col items-center justify-center gap-3 ">
                    <h5 className="text-secondary font-medium text-sm ">TESTIMONIALS</h5>
                    <h1 className="text-5xl font-medium text-primary  text-center ">Voices of Satisfaction!</h1>
                </div>
            </div>
            
            <div className="flex gap-4 ">
                {Review.map((content, index) =>(
                <div key={index} className="p-8 bg-backgroundtwo rounded-3xl flex flex-col flex-grow gap-8">
                    <div>
                        <h2 className="text-2xl font-medium text-primary">{content.description} </h2>
                    </div>
                    <div className="flex gap-4">
                        <img src={content.avatar} alt="tomavatar" className="rounded-full" />
                        <div className="flex flex-col gap-1 ">
                            <h2 className="text-base font-medium text-primary"> {content.name} </h2>
                            <h5 className="text-sm font-normal text-third">{content.role} </h5>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </motion.div>
    )
}