import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";

export const StatisticsMixedChart = () => {

    const [state, setState] = useState(
        {

            series: [
                {
                    name: 'TEAM B',
                    type: 'area',
                    data: [8, 15, 9, 18, 10, 16, 8]
                }, {
                    name: 'TEAM C',
                    type: 'line',
                    data: [12, 10, 13, 25, 14, 10, 14]
                }
            ],

            options: {
                
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
                    height: 350,
                    type: 'line',
                    stacked: false,
                },

                stroke: {
                    width: [5, 5],
                    curve: 'smooth',
                },

                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },
                colors: ['#148948', '#8009C9'],

                fill: {
                    opacity: [0.85, 0.25, 1],
                    colors: ['#1e4231'],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },

                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],

                markers: {
                    size: 5
                },
                xaxis: {
                    type: 'month'
                },
                yaxis: {
                    title: {
                        text: 'Points',
                    },
                    min: 0
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " points";
                            }
                            return y;

                        }
                    }
                }
            },
        }
    )


    return (
        <div className=" bg-[#1e2022] p-4 rounded-xl h-[400px] ">
            <div className="flex justify-between items-center">
                <p className="text-[20px] text-white font-semibold">Statistics</p>
                <div className="text-white text-xl">
                    <BsThreeDots />
                </div>
            </div>
            
            <div id="chart" className="">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
            </div>
        </div>
    );

}