import React, { useEffect, useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import MonthDropDown from '../../TransactionsTable/reusableComp/SelectMonth';
import axios from 'axios';


const PieChart_ = () => {

    const [pieData, setPieData] = useState([]);
    const [chartHeight, setchartHeight] = useState(250);
    const [legend, setlegend] = useState({
        legend: {
            direction: 'column',
            position: { vertical: 'middle', horizontal: 'right' },
        },
    });
    const [filters, setFilters] = useState({
        month: "march"
    });

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/transactions/statistics/pieChart`, {
                params: filters
            });
            setPieData(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    useEffect(() => {
        if (window.innerWidth < 600) {

            setlegend({
                legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'right' },
                    labelStyle: {
                        fontSize: 10,
                    },
                    itemMarkWidth: 12,
                    itemMarkHeight: 2,
                    markGap: 4,
                    itemGap: 7,
                },
            })
        } else {

        }
    }, [window.innerWidth])





    return (
        <div className='Statistics-container boxShadow'>
            <div className='flex_center_center'>
                <h2> Pie Chart for  <span style={{ textTransform: "capitalize" }}>{filters.month}</span></h2>

            </div>

            <PieChart
                className='margin_auto chart pieChart'
                series={[
                    {
                        data: pieData
                    },
                ]}
                height={chartHeight}
                slotProps={legend}
                colors={[
                    '#f28e2c',
                    '#e15759',
                    '#4e79a7',
                    '#76b7b2',
                    '#59a14f',
                    '#edc949',
                    '#ff9da7',
                    '#af7aa1',
                    '#9c755f',
                    '#bab0ab',
                  ]}

            />
            <div className='flex_space_center'>
                <h2>  </h2>
                <MonthDropDown setFilters={setFilters} filters={filters} />

            </div>


        </div>
    )
}

export default PieChart_