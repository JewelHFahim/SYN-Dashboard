import { BsEyeFill, BsThreeDots, BsTrash3Fill } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';



const RecentOrders = () => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="bg-bgColor rounded-xl p-4 max-w-full overflow-x-auto">
            <div className='flex items-center justify-between'>
                <p className="text-[20px] text-white font-semibold">Recent Orders</p>
                <div className='text-2xl text-white'>
                    <button><BsThreeDots /></button>
                </div>
            </div>


            <div className=" w-full mt-2">
                <table className="w-full text-white">

                    <thead>
                        <tr className="bg-gray-500 bg-opacity-[30%]">
                            <th className="py-2 text-left pl-2" >#ID</th>
                            <th className="py-2 text-left" >Product</th>
                            <th className="py-2 text-left" > Quantity</th>
                            <th className="py-2 text-left" > Price</th>
                            <th className="py-2 text-left" > Date</th>
                            <th className="py-2 text-left" > Status</th>
                            <th className="py-2 text-left pl-3" > Actions</th>
                        </tr>
                    </thead>

                    <tbody className="">

                        {
                            data.map((d, i) =>

                            (
                                <>
                                    <tr key={i} className=" border-b border-b-tcolor" >

                                        <td className="pl-2"><p>#89742</p></td>

                                        <td className="py-3">
                                            <div className="flex items-center space-x-3 ">
                                                <div className="">
                                                    <div className="border p-1 rounded-lg w-12 h-12">
                                                        <img src="https://codervent.com/synui/demo/collapsed-menu/assets/images/products/11.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="font-bold">Smart Mobile Phone</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td>2</td>
                                        <td>$214</td>
                                        <td>Apr 8, 2021</td>
                                        <td >
                                            <p className=' text-green-600 px-1 rounded-lg font-semibold bg-green-200  w-[90px]'>Completed</p>
                                        </td>

                                        <td>
                                            <button className="btn btn-ghost btn-xs text-pColor text-lg"><BsEyeFill /></button>
                                            <button className="btn btn-ghost btn-xs text-[#faab4e] text-lg"><HiPencil /></button>
                                            <button className="btn btn-ghost btn-xs text-red-600 text-lg"><BsTrash3Fill /></button>
                                        </td>
                                    </tr>

                                </>
                            )


                            )
                        }

                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default RecentOrders;