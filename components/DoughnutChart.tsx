"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1000000, 2000000, 3000000, 4000000, 5000000],
                backgroundColor: ["#006F4A", "#009E63", "#00B176", "#00C78B", "#00DDA2"]
            }
        ],
        labels: ["Bank 1", "Bank 2", "Bank 3", "Bank 4", "Bank 5"],
    }
    return (
        <>
            <Doughnut 
                data={data} 
                options={{
                    cutout: "50%",
                    plugins: {
                        legend: { display: false },
                    },
                }}
            />
        </>
    )
}

export default DoughnutChart;