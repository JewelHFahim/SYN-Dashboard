import { BsCreditCardFill } from "react-icons/bs";
import { IoBagHandleSharp } from "react-icons/io5";
import ECard from "../ECommerce/EComponent/ECard";

const EarningAndClients = () => {

    const datas = [
        {
            id: 1,
            title: "Total Orders",
            icon: <IoBagHandleSharp />,
            total: 48256,
            rate: 2.4,
            color1: '#00c6fb',
            color2: '#005bea'
        },
        {
            id: 2,
            title: "Total Orders",
            icon: <BsCreditCardFill />,
            total: 48256,
            rate: 5.3,
            color1: '#00c6fb',
            color2: '#005bea'
        },
    ]

    return (
        <div className="grid grid-cols-1 gap-12">

            {
                datas.map((data, i) => <ECard key={i} data={data} />)
            }

        </div>
    );
};

export default EarningAndClients;