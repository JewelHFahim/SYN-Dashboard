import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from 'react-icons/bs';


export const TotalTraffic = () => {

    const [state, setState] = useState(
        {

        series: [12, 19, 3, 5, 2, 3],

        options: {
            datasets: [{
                borderColor: ["#fff"]
            }],

            plotOptions: {
                pie: {
                    donut: {
                        size: '85%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: '85%',
                                formatter: () => 'Total Visitors',
                                fontSize: '28px',
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        }
                    }
                }
            },
            colors: ['#8e1cc2', '#f7103a', '#30be62', '#37b5ff', '#f99c2d', '#1a4dbf'],

            legend: {
                show: false,
            },

            dataLabels: {
                enabled: false,
            },
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'right'
                    }
                }
            }]

        },

    })



    return (

        <div className=" bg-[#1e2022] p-4 rounded-xl h-[400px] ">
            <div className="flex justify-between items-center">
                <p className="text-[20px]">Total Traffic</p>
                <div>
                    <BsThreeDots />
                </div>
            </div>

            <div id="chart" className="relative" >
                <ReactApexChart options={state.options} series={state.series} type="donut" width="400px" />
            </div>
        </div>
    );
}

