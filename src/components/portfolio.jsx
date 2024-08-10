import { Icons } from "../constans"
import { getIconByName } from "../utils/getIcon"
import { PortfolioContent } from "../constans"

export default function Portfolio(){

    const iconNames = [
        { category: 'general', name: 'portfolio' },
        { category: 'general', name: 'arrow' },
     
    ];

    const icons = iconNames.reduce((acc, icon) => {
        acc[icon.name] = getIconByName(Icons, icon.category, icon.name);
        return acc;
    }, {});



    return(
        <div className="py-12 px-8 flex flex-col gap-12">
            <div  className=" items-center justify-center flex flex-col gap-4 ">
                <img src={icons.portfolio} alt="" width={40} height={40} />
                <div className="flex flex-col items-center justify-center gap-3 ">
                    <h5 className="text-secondary font-medium text-sm ">PORTFOLIO</h5>
                    <h1 className="text-5xl font-medium text-primary  text-center ">Mb9 Code Sympony</h1>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    {PortfolioContent.map((content, index) => (
                    <div key={index} className="bg-backgroundtwo  flex flex-col pt-6 px-4 pb-4 gap-6 rounded-3xl">
                        <div className="flex justify-between">
                            <div >
                                <h2 className="font-medium text-2xl text-primary">{content.title} </h2>
                                <h3 className="text-base font-normal text-third"> {content.description} </h3>
                            </div>
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full bg-customBackground absolute left-0 top-2 z-10"></div>
                                <img src={icons.arrow}  alt={icons.arrow} className="z-20 relative" />
                            </div>
                        </div>
                        <div>
                            <img src={content.image} alt={content.image} />
                        </div>
                    </div>
                    ))}
            </div>

        </div>
    )
}