import React from 'react';
import SecurityGuard from './SecurityGuard';
import SecurityHouse from './SecurityHouse';
import SecurityPlaza from './SecurityPlaza';
import SecurityInstallations from './SecurityInstallations';
import OurService from './OurService';

const AllServicePage = () => {
    return (
        <div>
            <SecurityGuard></SecurityGuard>
            <SecurityHouse></SecurityHouse>
            <SecurityPlaza></SecurityPlaza>
            <SecurityInstallations></SecurityInstallations>
            <OurService></OurService>
        </div>
    );
};

export default AllServicePage;