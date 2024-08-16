import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { motion,useInView } from "framer-motion";
import  { useRef } from "react";

export default function Tools(){

    const iconNames =[
        { category: 'general', name: 'tools' },
        { category: 'tools', name: 'slack' },
        { category: 'tools', name: 'figma' },
        { category: 'tools', name: 'framer' },
        { category: 'tools', name: 'photoshop' },
        { category: 'tools', name: 'webflow' },
    ]

    const icons = iconNames.reduce((acc,icon) => {
        acc[icon.name] = getIconByName(Icons,icon.category,icon.name);
        return acc;
    } ,{});

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true}); 

    return(
        <motion.div
        ref={ref}
        initial= {{opacity:0 , y:50}}
        animate={isInView ? {opacity:1, y:0} :{}}
        transition={{duration :0.8, ease:"easeOut"}}
        className="flex flex-col items-center justify-center py-12 px-8 gap-6">
          <div  className=" items-center justify-center flex flex-col gap-4 ">
                <img src={icons.tools} alt="" width={40} height={40} />
                <div className="flex flex-col items-center justify-center gap-3 ">
                    <h5 className="text-secondary font-medium text-sm ">Mb9 TOOLS</h5>
                    <h1 className="text-5xl font-medium text-primary  text-center ">Tools & Software</h1>
                </div>
            </div>
           
            <div className="w-[760px] border border-[#282828] rounded-[32px] mt-4  ">
                <div className="bg-[#191919] rounded-t-[32px]  justify-center flex p-1.5">
                       <h5 className="text-xs font-medium text-secondary leading-3 ">HERE ARE THE TOOLS AND SOFTWARE I USE</h5> 
                </div>
                <div className="">
                      <div  className=" flex items-center justify-center pt-5 pb-9 ">
                        {iconNames.slice(1).map((icon,index) => (

                            <div key={index} className="flex flex-col items-center justify-center gap-3 flex-grow group relative"  >
                                <div className="w-2 h-2  bg-[#333333] rounded-3xl transform transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:bg-goldenrod"></div>
                                <div  className="flex items-center justify-center bg-backgroundtwo rounded-3xl p-4 border border-[#282828]  transform transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:bg-[#101010] ">
                                    <img src={icons[icon.name]} alt={icon.name} width={80} height={80} />             
                                </div>
                                <div className="absolute bottom-[-60px] opacity-0 group-hover:opacity-100 transform transition-opacity duration-500 ease-in-out bg-[#333333] text-white py-4 px-6 rounded-[10px]">
                                     {icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}
                                </div>
                            </div>
                        ))}
                      </div>
                </div>
            </div>
            <div>
                <h5 className=" max-w-[420px] text-xs font-normal text-secondary  text-center">Explore the tools and software that enable me to craft remarkable designs,
                combining technology and creativity seamlessly.</h5>
            </div>
        </motion.div>
    )
}