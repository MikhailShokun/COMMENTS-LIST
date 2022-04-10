import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./Pagination.css"

const AppPagination = ({commentsPerPage, totalComments, setCurrentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className={'pagesWrap'}>
            <div className={'pagination'}>
                    <Pagination onChange={handleChange}
                                count={pageNumbers.length}
                                showFirstButton showLastButton/>
            </div>
        </div>
    );
};

export default AppPagination;