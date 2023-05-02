import { Pie } from '@ant-design/plots';

const Customers = () => {
    const data = [
        {
            type: 'Current Customer 66%',
            value: 155,
        },
        {
            type: 'New Customers 48%',
            value: 120,
        },
        {
            type: 'Retargeted Customer 25%',
            value: 110,
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
                    color: 'white'
                },
                content: ' 48K \n Customers',
            },
        },
    };
    return (
        <div className='bg-bgColor p-4 rounded-xl h-[400px]'>
            <p className='text-[20px] font-semibold text-white'>Customers</p>
            <div className='h-[90%]'>
                <Pie {...config} />
            </div>
        </div>);
};

export default Customers;