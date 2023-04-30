import { DChart } from "../../component/Charts/DChart";
import Pichart from "../../component/Charts/piChart";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 items-center mx-[350px] text-white">

            <div className="">
               <Pichart/>
            </div>

            <div>
                <DChart/>
            </div>

            <div>
                3
            </div>
        </div>
    );
};

export default Dashboard;