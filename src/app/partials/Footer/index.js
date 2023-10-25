import React from 'react';
import Row from 'react-bootstrap/Row';
import ContactFormMain from './ContactForm';
import ContactAreaMain from './ContactArea';

const FooterMain=()=>{
    return(
        <>
            <Row>
                <ContactFormMain/>
            </Row>
            <Row>
                <ContactAreaMain/>
            </Row>
        </>
    )
}
export default FooterMain;