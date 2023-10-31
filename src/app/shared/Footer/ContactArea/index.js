import Link from 'next/link';
import React from 'react';
import {
    Col,
    Row
} from 'react-bootstrap';
import Module from './index.module.css';

const ContactAreaMain=()=>{
    return(
        <>
            <Col
            >
                <Row
                >
                    <Col>
                        <strong><b>About</b></strong><br/><br/>
                        <span>
                            Korean Shop BD is the online platform, one of the largest retail supermarket in Bangladesh. 
                            A business entity that’s defining the standards in innovation and service quality in the nation.
                        </span>
                    </Col>
                    <Col>
                        <strong>QUICK LINKS</strong><br/><br/>
                        <ul>
                            <li>
                                <Link href="/">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Information
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <strong>Service</strong><br/><br/>
                        <ul>
                            <li>
                                <Link href="/">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    BRANDS
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Skip Concern
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <strong><b>Service</b></strong><br/><br/>
                        <span>
                        Zigatola dhanmondi 1209
                        </span><br/>
                        <span>
                        Email: koreanshop@gmail.com
                        </span>
                        <br/>
                        <span>Hotline: +880170000000</span>
                    </Col>
                </Row>
                <hr className={Module.hrStyle}/>
                <Row>
                    <Col 
                    xs={3}
                    style={{
                        textAlign:'left'
                    }}
                    >
                        <span>social icon</span>
                    </Col>
                    <Col 
                    xs={6}
                    style={{
                        justifyContent:'center',
                        textAlign:'center'
                    }}
                    >
                       <span>© 2023 Korean Shop BD | All Rights Reserved.</span> 
                    </Col>
                    <Col 
                    xs={3}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <span>payment method</span>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default ContactAreaMain;