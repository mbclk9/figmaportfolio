import { Hero_Content } from "../constans"
import { Counter } from "../constans"
import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { useEffect, useState } from "react"
import { motion} from "framer-motion"


export default function Hero(){

    const [counts, setCounts] = useState(Counter.map(() => 0));

    useEffect(() => {
      Counter.forEach((content, index) => {
        const targetNumber = content.number;
        let startNumber = 0;
  
        const interval = setInterval(() => {
          startNumber += Math.ceil(targetNumber / 100); // Her adımda artış miktarı
          if (startNumber >= targetNumber) {
            clearInterval(interval);
            startNumber = targetNumber;
          }
  
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = startNumber;
            return newCounts;
          });
        }, 20); // Artış hızı
      });
    }, []);

    const iconNames = [
        { category: 'general', name: 'about' },
     
    ];

    const icons = iconNames.reduce((acc, icon) => {
        acc[icon.name] = getIconByName(Icons, icon.category, icon.name);
        return acc;
    }, {});

    return (
        <div className="flex pt-8 px-8 items-center justify-center flex-col gap-12">
            <div className=" items-center justify-center flex flex-col gap-4 ">
                <img src={icons.about} alt="" width={40} height={40} />
                <div className="flex flex-col items-center justify-center gap-2 ">
                    <h5 className="text-secondary font-medium text-sm ">ABOUT ME</h5>
                    <h1 className="text-5xl font-medium text-primary max-w-[445px] text-center ">Exploring the Depths of Creativity</h1>
                </div>
            </div>
            {Hero_Content.map((content,index) => (
                    <div key={index} className="flex  items-center  mx-auto gap-8 ">
                        <motion.div
                        whileHover={{rotate:4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className=" bg-backgroundtwo p-3 rounded-3xl items-center justify-center cursor-pointer  ">
                            <img src={content.image} alt="avatar"  className="rounded-xl w-[296px]" />
                            <h3 className="max-w-60 text-center font-caveat font-normal text-2xl text-four mx-auto">My style is all about daring to defy conventions!</h3>
                        </motion.div>
                        <div className="">
                            <h3 className="text-3xl font-medium text-primary">Helloooo! I m {content.title} ✨</h3>
                            <p className="max-w-[385px] text-[18px] text-third pt-3"> {content.about} </p>
                            <h3 className="text-xl font-medium text-secondary pt-2.5"> {content.title} </h3>
                        </div>
                    </div>
            ))}
            <div  className="bg-backgroundtwo rounded-3xl p-8 flex flex-wrap items-center gap-4 w-full justify-center ">
                {Counter.map((content,index) =>(

                <div key={index} className={`flex flex-col flex-grow items-center text-center gap-2  ${index !== Counter.length - 1 ? 'border-r-2 border-[#292929]' : ''}`}>
                    <h3 className="font-medium text-sm text-third">{content.title}  </h3>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                        className="font-medium text-5xl text-primary">
                          {counts[index]}
                        </motion.span>
                </div>
                ))}
           
            </div>
            

        </div>
    )
}