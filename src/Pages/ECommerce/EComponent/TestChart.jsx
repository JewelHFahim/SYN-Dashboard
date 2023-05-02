import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const TestChart = () => {

    const [state, setState] = useState({

        series: [44, 55, 41, 17, 15],
        options: {
            dataLabels: {
                enabled: false
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

        <div className="relative bg-[#1e2022] p-4 rounded-xl h-[400px] "> 
            <p className="absolute top-[40%] left-[25%] text-white text-[24px] font-[600]">48K <br /> <span>Customers</span> </p>
            <div id="chart" >
                <ReactApexChart options={state.options} series={state.series} type="donut" />
            </div>
        </div>
    );
}

