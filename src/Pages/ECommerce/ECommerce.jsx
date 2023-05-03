import { IoBagHandleSharp, IoWalletSharp, IoPieChartSharp } from 'react-icons/io5';
import { BsCreditCardFill, BsFacebook } from 'react-icons/bs';
import { ImUsers } from 'react-icons/im';
import ECard from './EComponent/ECard';
// import MonthlyOrderChart from './EComponent/MonthlyOrderChart';
import TopCategories from './EComponent/TopCategories';
import Customers from './EComponent/Customers';
import RecentOrders from './RecentOrders';
import { Month } from './EComponent/Month';
// import { TestChart } from './EComponent/TestChart';


const ECommerce = () => {

    const datas = [
        {
            id: 1,
            title: "Total Orders",
            icon: <IoBagHandleSharp />,
            total: 48256,
            rate: -2.8,
            color1: '#00c6fb',
            color2: '#005bea'
        },

        {
            id: 2,
            title: "Total Expenses",
            icon: <BsCreditCardFill />,
            total: 48256,
            rate: 5.9,
            color1: '#00c6fb',
            color2: '#005bea'
        },
        {
            id: 3,
            title: "Total Income",
            icon: <IoWalletSharp />,
            total: 48256,
            rate: 5.9,
            color1: '#00c6fb',
            color2: '#005bea'
        },
        {
            id: 4,
            title: "New Vigitors",
            icon: <ImUsers />,
            total: 48256,
            rate: 8.5,
            color1: '#00c6fb',
            color2: '#005bea'
        },
        {
            id: 5,
            title: "Bounce Rate",
            icon: <IoPieChartSharp />,
            total: 48256,
            rate: -5.6,
            color1: '#00c6fb',
            color2: '#005bea'
        },
        {
            id: 6,
            title: "Followers",
            icon: <BsFacebook />,
            total: 48256,
            rate: 7.6,
            color1: '#00c6fb',
            color2: '#005bea'
        }
    ]

    return (
        <div className=''>
            {/* Summary */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">

                {
                    datas.map((data, i) => <ECard key={i} data={data} />)
                }

            </div>

            {/* Monthly Chart */}
            <div className='mt-10'>
                {/* <MonthlyOrderChart /> */}
                <Month/>

            </div>

            {/* Top Categories and Customers */}
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10'>
                <div>
                    <TopCategories />
                </div>

                <div>
                    <Customers />
                </div>

                {/* <div>
                    <TestChart/>
                </div> */}
            </div>

            {/* Recent Orders */}
            <div className='mt-10'>
                <RecentOrders />
            </div>

            

        </div>
    );
};

export default ECommerce;