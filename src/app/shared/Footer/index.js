import React from 'react';
import Row from 'react-bootstrap/Row';
import ContactFormMain from './ContactForm';
import ContactAreaMain from './ContactArea';
import './index.scss'

const FooterMain=()=>{
    return(
        <>
            <Row
            className='contact-form-container'
            >
                <ContactFormMain/>
            </Row>
            <Row>
                <ContactAreaMain/>
            </Row>
        </>
    )
}
export default FooterMain;