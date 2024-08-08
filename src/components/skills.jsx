import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { SkillsContent } from "../constans";

export default function Skills(){

    const iconNames =[

        { category: 'general', name: 'skills' },
   
    ]

    const icons = iconNames.reduce((acc,icon) => {
        acc[icon.name] = getIconByName(Icons,icon.category,icon.name);
        return acc;
    } ,{});


    return(
        <div className="flex flex-col items-center justify-center py-12 px-8 gap-12">
            <div  className=" items-center justify-center flex flex-col gap-4 ">
                <img src={icons.skills} alt="" width={40} height={40} />
                <div className="flex flex-col items-center justify-center gap-3 ">
                    <h5 className="text-secondary font-medium text-sm ">SKILLS</h5>
                    <h1 className="text-5xl font-medium text-primary  text-center ">Skills & Expertise</h1>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 "> 
                {SkillsContent.map((content,index) => (
                <div key={index} className="p-8 flex  justify-center border border-[#292929] rounded-3xl gap-6">
                    <div>
                        {<img src={content.image} alt={content.image} /> }
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-medium text-primary">{content.title} </h2>
                            <p className="font-normal text-lg text-third"> {content.description} </p>
                        </div>
                        <h5 className="text-xs font-medium text-secondary">{content.role} </h5>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}