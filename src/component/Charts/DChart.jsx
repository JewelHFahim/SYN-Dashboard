import { Pie } from '@ant-design/plots';

export const DChart = () => {
  const data = [
    {
      type: 'Type-1',
      value: 27,
    },
    {
      type: 'Type-2',
      value: 25,
    },
    {
      type: 'Type-3',
      value: 18,
    },
    {
      type: 'Type-4',
      value: 15,
    },
    {
      type: 'Type-5',
      value: 10,
    },
    {
      type: 'Type-6',
      value: 5,
    },
  ];
  const config = {
    
    appendPadding: 1,
    data,
    angleField: 'value',
    colorField: 'type',
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
          fontSize: 30,
        },
        content: '85% \n Total Visitors',
      },
    },
  };
  return <Pie {...config} />;
};


// ReactDOM.render(<DChart />, document.getElementById('container'));
