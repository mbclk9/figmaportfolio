export default function Navbar(){

    return(
        <div className="text-primary  flex py-6 px-8  justify-between top-0 sticky bg-customBackground z-50 shadow  ">
            <div className="grow shrink basis-0 self-stretch pr-[704.08px] pb-[0.50px] justify-start items-center gap-[9.88px] inline-flex">
                <h2 className="text-2xl font-medium"><span className="text-goldenrod">.</span>mbc9</h2>
                <button className="jobbutton text-four text-xs fontnor  bg-backgroundtwo border-t-2  border-r-2 border-[#292929] py-1 px-1 rounded-lg ">Frontend Developer</button>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className=" bg-backgroundtwo text-white rounded-3xl text-sm font-medium px-4 py-2 border-t-2 border-[#292929] hover:bg-[#292929] transition-colors">X</button>
                <button className=" bg-backgroundtwo text-white rounded-3xl text-sm font-medium px-4 py-2 border-t-2 border-[#292929] hover:bg-[#292929] transition-colors">Dribbble</button>
                <button className=" bg-goldenrod text-customBackground rounded-3xl text-sm font-medium px-4 py-2 hover:bg-primary transition-colors">contact.</button>
       
            </div>
        </div>
    )
}