import { BsThreeDots } from "react-icons/bs";

const ECard = ({data}) => {
    return (
        <>
            <div className='h-[174px] rounded-lg bg-[#1e2022] p-4'>

                <div className='w-full h-[52px] flex justify-between items-center'>

                    <div
                    
                     className={`w-[52px] h-[52px] flex justify-center items-center text-2xl rounded-lg text-white bg
                     
                     bg-gradient-to-t from-[${data.color1}] to-[${data.color2}]
                     
                     `}>
                        {data.icon}
                    </div>
                    <div className='text-xl text-white'>
                        <BsThreeDots />
                    </div>
                </div>

                <p className=' text-[20px] font-semibold text-white mt-2'>{data.title}</p>

                <div className='w-full h-[5px] bg-slate-700 mt-2 rounded-xl'>
                    <div className={`w-[70%] h-full rounded-xl bg-gradient-to-t from-[${data.color1}] to-[${data.color2}]`} ></div>
                </div>

                <div className='flex justify-between mt-2'>
                    <p className='text-white'>{data.total}</p>
                    <p className={` ${data.rate > 0 ? "text-green-600" : "text-red-600"}`}>{data.rate}%</p>
                </div>
            </div>
        </>
    );
};

export default ECard;