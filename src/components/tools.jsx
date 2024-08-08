import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"


export default function Tools(){


    const iconNames =[

        { category: 'general', name: 'tools' },
        { category: 'tools', name: 'chat' },
        { category: 'tools', name: 'figma' },
        { category: 'tools', name: 'framer' },
        { category: 'tools', name: 'photoshop' },
        { category: 'tools', name: 'webflow' },
  
   
    ]

    const icons = iconNames.reduce((acc,icon) => {
        acc[icon.name] = getIconByName(Icons,icon.category,icon.name);
        return acc;
    } ,{});

    return(
        <div className="flex flex-col items-center justify-center py-12 px-8 gap-6">
          <div  className=" items-center justify-center flex flex-col gap-4 ">
                <img src={icons.tools} alt="" width={40} height={40} />
                <div className="flex flex-col items-center justify-center gap-3 ">
                    <h5 className="text-secondary font-medium text-sm ">Mb9 TOOLS</h5>
                    <h1 className="text-5xl font-medium text-primary  text-center ">Tools & Software</h1>
                </div>
            </div>
           
            <div className="w-[760px] border border-[#282828] rounded-[32px] mt-4  ">
                <div className="bg-[#191919] rounded-t-[32px]  justify-center flex">
                       <h5 className="text-sm font-medium text-secondary ">Here are the tools and software I use</h5> 
                </div>
                <div className="">
                      <div  className=" flex items-center justify-center pt-5 pb-9 ">
                            <div className="flex flex-col items-center justify-center gap-3 flex-grow" >
                                <div className="w-2 h-2  bg-[#333333] rounded-3xl"></div>
                                <div  className="flex items-center justify-center bg-backgroundtwo rounded-3xl ">
                                    <img src={icons.photoshop} alt="photoshop" width={80} height={80} />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 flex-grow" >
                                <div className="w-2 h-2  bg-[#333333] rounded-3xl"></div>
                                <div  className="flex items-center justify-center bg-backgroundtwo rounded-3xl ">
                                    <img src={icons.figma} alt="figma" width={80} height={80} />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 flex-grow" >
                                <div className="w-2 h-2  bg-[#333333] rounded-3xl"></div>
                                <div  className="flex items-center justify-center bg-backgroundtwo rounded-3xl ">
                                    <img src={icons.framer} alt="framer" width={80} height={80} />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 flex-grow" >
                                <div className="w-2 h-2  bg-[#333333] rounded-3xl"></div>
                                <div  className="flex items-center justify-center bg-backgroundtwo rounded-3xl ">
                                    <img src={icons.chat} alt="chat" width={80} height={80} />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 flex-grow" >
                                <div className="w-2 h-2  bg-[#333333] rounded-3xl"></div>
                                <div  className="flex items-center justify-center bg-backgroundtwo rounded-3xl ">
                                    <img src={icons.webflow} alt="webflow" width={80} height={80} />
                                </div>
                            </div>
                      </div>
                </div>
            </div>
            <div>
                <h5 className=" max-w-[420px] text-xs font-normal text-secondary  text-center">Explore the tools and software that enable me to craft remarkable designs,
                combining technology and creativity seamlessly.</h5>
            </div>
        </div>
    )
}