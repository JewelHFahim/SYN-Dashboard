import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";

export const Month = () => {

    const [state, setState] = useState({

        series: [{
            name: 'Net Profit',
            data: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13]
        },
        {
            name: 'Revenue',
            data: [15, 30, 22, 55, 14, 35, 20, 35, 20, 15, 18, 5]
        }
        ],

        options: {
            colors: ['#39c1fa', '#f84b29'],

            grid: {
                show: true,
                borderColor: '#1A1716',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true,
                    }
                },
                row: {
                    opacity: 0.5
                },
                column: {
                    opacity: 0.5
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 5
                },
            },

            chart: {
                type: 'bar',
                height: 350
            },

            plotOptions: {

                bar: {
                    horizontal: false,
                    columnWidth: '35%',
                    borderRadius: 8,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },

            fill: {
                opacity: 1
              },


            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },

    });



    return (
        <div className=" bg-[#1e2022] p-4 rounded-xl h-[400px] ">
            <div className="flex justify-between items-center">
                <p className="text-[20px] text-white font-semibold">Monthly Orders</p>
                <div className="text-white text-xl">
                    <BsThreeDots />
                </div>
            </div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
            </div>
        </div>
    )
}
