import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
//The constant parent component

const Main = () => {
    return (
        <div style={{maxWidth:'1440px',margin:'0 auto'}}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;