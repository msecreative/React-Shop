import React from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form
} from 'react-bootstrap';
import './index.scss'
import Image from 'next/image';

const TopBarMain=()=>{
    return(
        <>
            <Col
            className='top-bar-container'
            >
                <Row
                style={{
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center'
                }}
                >
                    <Col xs={2} className='logo-div'>
                        <Image
                        src="/shop-logo.png"
                        width={250}
                        height={100}
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col xs={5}>
                        <InputGroup>
                            <FormControl
                            className='normal-input'
                            >

                            </FormControl>
                            <InputGroupText
                            className='normal-input global-search'
                            >
                                <Image
                                src="/search.png"
                                width={20}
                                height={20}
                                alt="search"
                                />
                            </InputGroupText>
                        </InputGroup>
                    </Col>
                    <Col xs={5}>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default TopBarMain;