import React from 'react';
import s from './Paginator.module.css';

let Paginator = ( {totalCount, pagesSize, currentPage, onPageChanged} ) => {
    let pagesCount = Math.ceil(totalCount / pagesSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.countPage}>
        {pages.map(p => {
            if (p === 1 || (p >= currentPage - 2 && p <= currentPage + 2) || p === pages[pages.length - 1]) {
                return <span onClick={(e) => { onPageChanged(p) }}
                    className={currentPage === p ? s.selectedPage : ''} key={p.id}>
                    {p}
                </span>
            }
            else if (p === currentPage - 3 || p === currentPage + 3) {
                return <span>...</span>
            }
            else return null
        })}
    </div>
}

export default Paginator;