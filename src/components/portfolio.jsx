import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { PortfolioContent } from "../constans"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Portfolio(){

    const iconNames = [
        { category: 'general', name: 'portfolio' },
        { category: 'general', name: 'arrow' },
     
    ];

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
        className="py-12 px-8 flex flex-col gap-12">
            <div  className=" items-center justify-center flex flex-col gap-4 ">
                <img src={icons.portfolio} alt="" width={40} height={40} />
                <div className="flex flex-col items-center justify-center gap-3 ">
                    <h5 className="text-secondary font-medium text-sm ">PORTFOLIO</h5>
                    <h1 className="text-5xl font-medium text-primary  text-center ">Mb9 Code Sympony</h1>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    {PortfolioContent.map((content, index) => (
                    <div key={index} className="bg-backgroundtwo  flex flex-col pt-6 px-4 pb-4 gap-6 rounded-3xl group cursor-pointer hover:bg-[#292929] transition-colors">
                        <div className="flex justify-between">
                            <div >
                                <h2 className="font-medium text-2xl text-primary">{content.title} </h2>
                                <h3 className="text-base font-normal text-third"> {content.description} </h3>
                            </div>
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full bg-customBackground absolute left-0 top-2 z-10 group-hover:bg-goldenrod transition-colors"></div>
                                <img  src={icons.arrow}  alt={icons.arrow} className="z-20 relative transform transition-transform duration-500 group-hover:translate-x-2 group-hover:fill-white" />
                            </div>
                        </div>
                        <div>
                            <img src={content.image} alt={content.image}  className=" transform transition-transform duration-500 group-hover:rotate-2" />
                        </div>
                    </div>
                    ))}
            </div>

        </motion.div>
    )
}