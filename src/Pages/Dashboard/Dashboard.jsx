import UserActivity from "./UserActivity";
import { TotalTraffic } from "./TotalTraffic";
import EarningAndClients from "./EarningAndClients";
import RecentOrders from "../ECommerce/RecentOrders";
import { StatisticsMixedChart } from "./StatisticsMixedChart";
import { TopCategoryPiChart } from "./TopCategoryPiChart";

const Dashboard = () => {
    return (
        <div className="">

            <div className="grid grid-cols-3 gap-5 items-center text-white">
                <div className="">
                    <TotalTraffic />
                </div>

                <div className="">
                    <UserActivity />
                </div>

                <div className="">
                    <EarningAndClients />
                </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5">
                <div className="col-span-2 ">
                    <StatisticsMixedChart />
                </div>

                <div>
                    <TopCategoryPiChart />
                </div>
            </div>

            {/* Recent Orders */}
            <div className='mt-10'>
                <RecentOrders />
            </div>


        </div>
    );
};

export default Dashboard;