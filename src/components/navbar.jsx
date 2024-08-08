export default function Navbar(){

    return(
        <div className="text-primary  flex py-6 px-8  justify-between  ">
            <div className="grow shrink basis-0 self-stretch pr-[704.08px] pb-[0.50px] justify-start items-center gap-[9.88px] inline-flex">
                <h2 className="text-2xl font-medium"><span className="text-neon">.</span>mbc9</h2>
                <button className="jobbutton text-four text-xs fontnor  bg-backgroundtwo border-t-2  border-r-2 border-[#292929] py-2 px-1 rounded-lg ">Frontend Developer</button>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className=" bg-backgroundtwo text-white rounded-3xl text-sm font-medium px-4 py-2 border-t-2 border-[#292929] ">X</button>
                <button className=" bg-backgroundtwo text-white rounded-3xl text-sm font-medium px-4 py-2 border-t-2 border-[#292929] ">Dribbble</button>
                <button className=" bg-neon text-customBackground rounded-3xl text-sm font-medium px-4 py-2 ">contact.</button>
       
            </div>
        </div>
    )
}