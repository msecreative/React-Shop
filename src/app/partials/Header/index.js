import React from 'react';
import Row from 'react-bootstrap/Row';
import DiscountMain from './Discount';
import TopBarMain from './TopBar';
import NavBarMain from './NavBar';

const HeaderMain=()=>{
    return(
        <>
            <Row>
                <DiscountMain/>
            </Row>
            <Row>
                <TopBarMain/>
            </Row>
            <Row>
                <NavBarMain/>
            </Row>
        </>
    )
}
export default HeaderMain;