
import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';


const Root = () => {

    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return (
            <div className="flex items-center justify-center h-screen bg-[#D5DEEF]">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-t-4 border-t-blue-700 border-gray-200 rounded-full animate-spin"></div>
                    <p className="mt-4 text-xl font-semibold text-[#31487A]">Loading Data...</p>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;