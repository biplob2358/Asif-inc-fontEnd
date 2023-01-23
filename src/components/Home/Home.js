import React from 'react';
import AddPeople from '../AddPeople/AddPeople';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AddPeople></AddPeople>
        </div>
    );
};

export default Home;