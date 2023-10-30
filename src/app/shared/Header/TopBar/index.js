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
                <Row>
                    <Col xs={2}>
                        <Image
                        src="/logo.png"
                        width={300}
                        height={40}
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col xs={5}>
                        <InputGroup>
                            <FormControl
                            style={{
                                lineHeight:'16px !important'
                            }}
                            >

                            </FormControl>
                            <InputGroupText>
                                <Image
                                src="/search.png"
                                width={24}
                                height={24}
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