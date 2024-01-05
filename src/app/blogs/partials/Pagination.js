'use client'
import React from 'react';
import {
    Pagination
} from 'react-bootstrap'

const PaginationMain=()=>{
    return(
        <>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </>
    )
}
export default PaginationMain;