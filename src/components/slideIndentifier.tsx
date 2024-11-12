interface indentifierProps{
    num:number,
    index:number
}
export default function SlideIndicator({num,index}:indentifierProps){
    const indicaters=Array.from({length:num},(_,i)=>i);
    return(
        <div className="absolute flex gap-5 bottom-20 md:bottom-24 mt-10 md:mt-0 text-gray-500 left- uppercase tracking-[12px]">
            {indicaters.map(i=>{
                return<div className={`h-2 w-2 rounded-full ${index===i?'bg-blue-700':'bg-[white]'}`}></div>
            })}
        </div>
    )
}