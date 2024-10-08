import React, { useState } from 'react'
import NabBar from '../utility/Navbar/NavBar'
import axios from 'axios';
import { useEffect } from 'react';
import MonthDropDown from '../TransactionsTable/reusableComp/SelectMonth';

const CombineJson = () => {

    const [json, setJson] = useState();

    const [filters, setFilters] = useState({
        month: "march"
    });

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/transactions/statistics/combine`, {
                params: filters
            });
            setJson(response.data);

        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    return (
        <div className='Statistics-container boxShadow'>
            <div  className='flex_center_center'>
                <h2 >
                    Combine Json for  <span style={{textTransform:"capitalize"}}>{filters.month}</span>
                </h2>
            </div>
            <div >
            {JSON.stringify(json)}
                
            </div>

            <div  className='flex_space_center'>
                <h2 >
                    
                </h2>
                <MonthDropDown setFilters={setFilters} filters={filters} />
            </div>
        </div>
    )
}

export default CombineJson