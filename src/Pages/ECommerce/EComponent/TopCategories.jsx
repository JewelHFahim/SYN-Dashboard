import { Pie } from '@ant-design/plots';

const TopCategories = () => {

    const data = [
        {
            type: 'Electronics',
            value: 155,
        },
        {
            type: 'Furniture',
            value: 120,
        },
        {
            type: 'Fashion',
            value: 110,
        },
        {
            type: 'Accessories',
            value: 150,
        },
        {
            type: 'Mobiles',
            value: 90,
        },

    ];

    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        color: ['#2362eb', '#f42e4a', '#80e02e', '#9c1db6', '#f89d1a'],
        radius: 1,
        innerRadius: 0.85,
        label: {
            display: false,
            enabled: false,
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],

        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: 'white',
                    fontSize: "25px",
                    fontWeight: "normal"
                },
                content: ' 68% \n Total Sales',
            },
        },


    };
    return (
        <div className='bg-bgColor p-4 rounded-xl h-[400px] '>
            <p className='text-[20px] font-semibold text-white'>Top Categories</p>
            <div className='h-[90%] z-[-10]'>
                <Pie {...config} />
            </div>
        </div>);
};

export default TopCategories;