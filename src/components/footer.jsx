import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { motion } from "framer-motion";
export default function Footer(){

    const iconNames =[
        { category: 'general', name: 'collabration' },
        { category: 'general', name: 'footercoffe' },
    ]

    const icons=iconNames.reduce((acc,icon) =>{
        acc[icon.name]=getIconByName(Icons, icon.category, icon.name);
        return acc;

    }, {});

    return(
        <div className="flex-col items-center justify-center pt-12 pb-14  px-8">
            <div className="p-10 border border-[#282828] rounded-t-3xl flex gap-11 w-full justify-between items-center">
                <div className="flex gap-10">
                    <img src={icons.collabration} alt="icon" />
                    <h2 className="font-medimum text-[40px] text-primary text-left">Wanna work together?</h2>
                </div>
                <button className="bg-goldenrod font-medium text-[28px] text-customBackground rounded-full py-3.5 px-9  hover:bg-primary transition-colors">Contact Us</button>
            </div>
            <div className="bg-backgroundtwo justify-center flex border border-[#292929] rounded-b-3xl" >
                <h3 className="font-medium text-xs text-secondary py-1">Promise you that I’ll reply back within 24 hours.</h3>
            </div>
            <div className="flex justify-between items-center pt-6">
                <h4 className="font-normal text-sm text-third">© 2024 mbc9. All rights reserved.</h4>
                <motion.button className="flex gap-3 bg-customBackground py-3 px-6 border border-[#282828] rounded-full " whileHover="hover">
                    <motion.img src={icons.footercoffe} alt="coffe"
                     className="group-hover:animate-shake"
                     variants={{
                        hover: {
                          rotate: [0, -15, 15, -15, 15, 0], 
                          transition: {
                            duration: 0.6,
                            ease: "easeInOut",
                            repeat: 1, // Sonsuz sallanma  repeat: Infinity
                          },
                        },
                      }}
                     />
                    <h2 className="font-medium text-sm text-primary">Buy me a coffee</h2>
                </motion.button>
            </div>
        </div>
    )
}