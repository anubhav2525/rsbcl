import React, { useState, useEffect } from 'react'
import RevenueShortcut from './RevenueShortcut';
import RevenueSearch from "./RevenueSearch";
import RevenueList from "./RevenueList";
import axios from 'axios';
import RevenueListBeer from './RevenueTable/RevenueListBeer';
import RevenueListCl from './RevenueTable/RevenueListCl';
import RevenueListIml from './RevenueTable/RevenueListIml';
import RevenueListRml from './RevenueTable/RevenueListRml';

const Revenue = () => {

    // api call beer 
    const [revenueBeer, setrevenueBeer] = useState([]);

    const [year, setYear] = useState(2024);

    useEffect(() => {
        const getRevenueBeer = async () => {
            try {
                const response = await axios.get(`/api/v1/revenue/beer-by-year-and-range?year=${year}`) // Use the proxied URL
                setrevenueBeer(response.data)
            }
            catch (error) {
                console.error('Error:', error); // Log any errors
            }
        }
        getRevenueBeer();
    }, [year])


    // api call cl
    const [revenuecl, setrevenuecl] = useState([]);
    useEffect(() => {
        const getRevenueCl = async () => {
            try {
                const response = await axios.get(`/api/v1/revenue/countryLiquor-by-year-and-range?year=${year}`)
                setrevenuecl(response.data)
            }
            catch (error) {
                console.error('Error:', error);
            }
        }
        getRevenueCl();
    }, [year]);


    // api call revenue iml
    const [revenuerml, setrevenuerml] = useState([]);
    useEffect(() => {
        const getRevenueRml = async () => {
            try {
                const response = await axios.get(`/api/v1/revenue/rml-by-year-and-range?year=${year}`)
                setrevenuerml(response.data);
            }
            catch (error) {
                console.error('Error:', error); // Log any errors
            }
        }
        getRevenueRml();
    }, [year]);


    // api call revenue rml       
    const [revenueiml, setrevenueiml] = useState([]);
    useEffect(() => {
        const getRevenueIml = async () => {
            try {
                const response = await axios.get(`/api/v1/revenue/iml-by-year-and-range?year=${year}`)
                setrevenueiml(response.data);
            }
            catch (error) {
                console.error('Error:', error); // Log any errors
            }
        }
        getRevenueIml();
    }, [year]);

    return (
        <div className='w-auto p-3 h-auto'>
            {/* countryLiquor */}
            <div className='shadow-md bg-slate-100 dark:bg-slate-900'>
                {/* <RevenueSearch >Country liquor</RevenueSearch> */}
                <RevenueListBeer data={revenueBeer} />
                <nav className='flex justify-end items-center py-2 px-3'>
                    <button type="button" className='px-5 py-2 text-sm font-normal text-white from-blue-500 via-blue-600 to-blue-700 bg-gradient-to-br rounded-xl ease-in-out  transition-all dark:text-white hover:text-white hover:shadow-2xl hover:shadow-blue-700'>
                        View all
                    </button>
                </nav>
            </div>

            {/* countryLiquor */}
            <div className='py-4 shadow-md bg-slate-100 dark:bg-slate-900'>
                {/* <RevenueSearch >Beer</RevenueSearch> */}
                <RevenueListCl data={revenuecl} />
                <nav className='flex justify-end items-center py-2 px-3'>
                    <button type="button" className='px-5 py-2 text-sm font-normal text-white from-blue-500 via-blue-600 to-blue-700 bg-gradient-to-br rounded-xl ease-in-out  transition-all dark:text-white hover:text-white hover:shadow-2xl hover:shadow-blue-700'>
                        View all
                    </button>
                </nav>
            </div>

            {/* countryLiquor */}
            <div className='py-4 shadow-md bg-slate-100 dark:bg-slate-900'>
                {/* <RevenueSearch /> */}
                <RevenueListIml data={revenueiml} />
                <nav className='flex justify-end items-center py-2 px-3'>
                    <button type="button" className='px-5 py-2 text-sm font-normal text-white from-blue-500 via-blue-600 to-blue-700 bg-gradient-to-br rounded-xl ease-in-out  transition-all dark:text-white hover:text-white hover:shadow-2xl hover:shadow-blue-700'>
                        View all
                    </button>
                </nav>
            </div>

            {/* countryLiquor */}
            <div className='py-4 shadow-md bg-slate-100 dark:bg-slate-900'>
                {/* <RevenueSearch /> */}
                <RevenueListRml data={revenuerml} />
                <nav className='flex justify-end items-center py-2 px-3'>
                    <button type="button" className='px-5 py-2 text-sm font-normal text-white from-blue-500 via-blue-600 to-blue-700 bg-gradient-to-br rounded-xl ease-in-out  transition-all dark:text-white hover:text-white hover:shadow-2xl hover:shadow-blue-700'>
                        View all
                    </button>
                </nav>
            </div>

            <div><RevenueShortcut /></div>
        </div>
    )
}

export default Revenue
