import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";


export const TopCategoryPiChart = () => {

    const [state, setState] = useState(

        {
            series: [55, 20, 10],

            options: {
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                },
                chart: {
                    width: 380,
                    type: 'pie',
                },

                labels: ['Clothing', 'Electronics', 'Furniture'],

                dataLabels: {
                    enabled: false,
                },


                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        });

    return (
        <div className=" bg-[#1e2022] p-4 rounded-xl h-[400px] ">
            <div className="flex justify-between items-center">
                <p className="text-[20px] text-white font-semibold">Total Traffic</p>
                <div className="text-xl text-white">
                    <BsThreeDots />
                </div>
            </div>

            <div id="chart" >
                <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
            </div>
        </div>
    );

}
