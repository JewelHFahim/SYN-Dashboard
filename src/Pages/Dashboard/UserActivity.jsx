import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";

const UserActivity = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "PRODUCT A",
                data: [12, 19, 13, 15, 20, 10],
            },
            {
                name: "PRODUCT B",
                data: [7, 15, 9, 12, 17, 16],
            },
        ],
        options: {

            grid: {
                show: true,
                borderColor: '#1A1716 ',
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
                type: "bar",
                stacked: true,
                toolbar: {
                    show: false,
                },
            },
            
            dataLabels: {
                enabled: false,
                offsetY: -20,
            },
            colors: ["#8e1cc2", "#441f55"],
            //   responsive: [
            //     {
            //       breakpoint: 480,
            //       options: {
            //         legend: {
            //           position: "bottom",
            //           offsetX: -10,
            //           offsetY: 0,
            //         },
            //       },
            //     },
            //   ],
            plotOptions: {
                bar: {
                    columnWidth: 23,
                    horizontal: false,
                    borderRadius: 0,
                    dataLabels: {
                        total: {
                            enabled: false,
                        },
                    },
                },
            },
            xaxis: {
                // type: "datetime",
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
        },
    });

    return (
        <>
            <div className=" bg-[#1e2022] p-4 rounded-xl h-[400px] ">

                <div className="flex justify-between items-center">
                    <p className="text-[20px]">User Activity</p>
                    <div> <BsThreeDots /> </div>
                </div>

                <div>
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="bar"
                    />
                </div>
            </div>
        </>
    );
};

export default UserActivity;