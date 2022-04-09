import React from 'react';
import './Pagination.css';

const Pagination = ({commentsPerPage, totalComments, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={"page-item  m-1"}>
                        <a onChange={() => paginate(number)} href="#" className={"page-link"}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;