import { Column } from '@ant-design/plots';

const MonthlyOrderChart = () => {

    const data = [
        {
            "name": "Sales",
            "month": "Jan.",
            "AMR": 18.9
        },
        {
            "name": "Sales",
            "month": "Feb.",
            "AMR": 28.8
        },
        {
            "name": "Sales",
            "month": "Mar.",
            "AMR": 39.3
        },
        {
            "name": "Sales",
            "month": "Apr.",
            "AMR": 41.5
        },
        {
            "name": "Sales",
            "month": "May",
            "AMR": 47
        },
        {
            "name": "Sales",
            "month": "Jun.",
            "AMR": 20.3
        },
        {
            "name": "Sales",
            "month": "Jul.",
            "AMR": 24
        },
        {
            "name": "Sales",
            "month": "Aug.",
            "AMR": 55.6
        },
        {
            "name": "Sales",
            "month": "Sept.",
            "AMR": 35.6
        },
        {
            "name": "Sales",
            "month": "Oct.",
            "AMR": 36.6
        },

        {
            "name": "Sales",
            "month": "Nov.",
            "AMR": 30.6
        },

        //   Visits
        {
            "name": "Visits",
            "month": "Jan.",
            "AMR": 12.4
        },
        {
            "name": "Visits",
            "month": "Feb.",
            "AMR": 23.2
        },
        {
            "name": "Visits",
            "month": "Mar.",
            "AMR": 34.5
        },
        {
            "name": "Visits",
            "month": "Apr.",
            "AMR": 39.7
        },
        {
            "name": "Visits",
            "month": "May",
            "AMR": 52.6
        },
        {
            "name": "Visits",
            "month": "Jun.",
            "AMR": 35.5
        },
        {
            "name": "Visits",
            "month": "Jul.",
            "AMR": 37.4
        },
        {
            "name": "Visits",
            "month": "Aug.",
            "AMR": 42.4
        },
        {
            "name": "Visits",
            "month": "Sept.",
            "AMR": 45.4
        },
        {
            "name": "Visits",
            "month": "Oct.",
            "AMR": 45.4
        },

        {
            "name": "Visits",
            "month": "Nov.",
            "AMR": 10.4
        },
    ]


    const config = {
        data,
        isGroup: true,
        xField: 'month',
        yField: 'AMR',
        seriesField: 'name',
        dodgePadding: 2,
        color: ['#ee0979', '#ff6a00'],

        dataLabels: {
            enabled: false,
        },

        columnStyle: {
            radius: [40, 40, 0, 0],
        },
        
    };

    return (
        <div className='bg-bgColor p-4 rounded-xl'>
            <p className='text-lg font-semibold text-white my-4'>Monthly Orders</p>
            <Column {...config} />
        </div>
    );
};

export default MonthlyOrderChart;