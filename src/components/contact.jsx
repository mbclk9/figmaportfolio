import avatar from "../assets/images/baris.jpg"
import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { motion } from "framer-motion";

export default function Contact(){

    const iconNames = [
        { category: 'general', name: 'design' },
        { category: 'general', name: 'arrow' },
        { category: 'social', name: 'twitter' },
        { category: 'social', name: 'dribble' },
        { category: 'social', name: 'instagram' },
        { category: 'social', name: 'linkedin' },
        { category: 'general', name: 'collabration' },
        { category: 'general', name: 'location' },
    ];


        const icons = iconNames.reduce((acc, icon) => {
            acc[icon.name] = getIconByName(Icons, icon.category, icon.name);
            return acc;
        }, {});

    return(
        <div className="w-full flex flex-col  py-16 px-8 gap-16">
            <div className="h-1 w-full bg-backgroundtwo rounded-full"></div>
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex w-full gap-4 h-fit ">
                <div className="bg-backgroundtwo flex flex-col p-8 rounded-3xl gap-5 flex-grow cursor-pointer group">
                    <div className="flex justify-between">
                        <img src={avatar} alt="avatar" width={80} height={80} className="rounded-full" />
                        { <img src={icons.arrow}  alt="rightarrow" className="transform transition-transform duration-500 group-hover:translate-x-2 " /> }
                    </div>
                    <h2 className="font-medium text-[40px] text-primary max-w-[300px] text-left leading-[48px]">Mb9 Weaving a Digital Canvas of Innovation!</h2>
                    <h3 className="text-base text-secondary">Muhammet Çelik  •  Frontend Developer</h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={ { opacity: 1, y: 0 } }
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className=" flex flex-col flex-grow gap-4 h-fit">
                    <div className="flex justify-between bg-backgroundtwo p-6 rounded-3xl group ">
                        <div >
                            <h2 className="text-[28px] text-secondary leading-9">Code</h2>
                            <h1 className="text-[28px] text-primary leading-9">Frontend Developer</h1>
                        </div>
                        <div className="flex justify-center">
                            { <img src={icons.design} alt="design" className="transform transition-transform duration-500 group-hover:translate-x-2" /> }
                        </div>
                    </div>
                    <div className="flex gap-4 h-fit">
                        <div className=" p-7 bg-backgroundtwo rounded-3xl h-fit ">
                            <img src={icons.twitter} width={26} height={26} alt="twitter" />
                        </div>
                        <div className="p-7 bg-backgroundtwo rounded-3xl h-fit ">
                            <img src={icons.dribble} width={26} height={26} alt="dribble" />
                        </div>
                        <div className="p-7 bg-backgroundtwo rounded-3xl h-fit">
                            <img src={icons.instagram} alt="instagram" />
                        </div>
                        <div className="p-7 bg-backgroundtwo rounded-3xl h-fit">
                            <img src={icons.linkedin} alt="linkedin" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between bg-backgroundtwo p-6 rounded-3xl h-fit group cursor-pointer ">
                            <div>
                                <h2 className="text-[28px] text-secondary leading-9">Based In</h2>
                                <h1 className="text-[28px] text-primary leading-9">Samsun, Turkey</h1>
                            </div>
                            <div className=" flex justify-center">
                                {<img src={icons.location} alt="location" className="transform transition-transform duration-500 group-hover:translate-x-2"/> }
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div  className="bg-backgroundtwo flex flex-col items-center w-1/3 p-8 rounded-3xl gap-6 justify-between h-auto">
                    {<img src={icons.collabration} alt="collabration" /> }
                    <h1 className="font-medium text-[40px] text-primary text-center leading-[48px]">Interested In Collabration?</h1>
                    <button className="bg-goldenrod text-customBackground py-4 w-full rounded-full font-medium text-[28px] hover:bg-primary transition-colors">Contact Us</button>
                </div>
            </motion.div>
        </div>
    )
}