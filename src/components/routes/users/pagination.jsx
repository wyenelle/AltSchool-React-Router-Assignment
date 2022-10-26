import React from 'react'
import './pagination.css'
const Pagination = ({postPerPage,totalPost,paginate,currentPage,setCurrentPage}) => {
    const pageNumbers = []
     for(let i  = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i)
     }

     const next = () => (
        currentPage <= pageNumbers.length ? paginate(currentPage++) : setCurrentPage(1)
     )

     const prev = () => (
        currentPage < 1 ? setCurrentPage(1) : paginate(currentPage--)
     )
  return (
    <nav>
{
// this list contains all number of pages in the app
// disabled states implemented depending on the currentpage 
}
        <ul className="pagination">
            <button 
                disabled = {currentPage === 1 ? true : false }
                onClick={prev}>
                     prev
                </button>

                { // mao through the number of values of the pageNumber array to determine the number of pages 
                pageNumbers.map( number =>(
                    <li key={number}>
                        <a onClick={()=> paginate(number)} href='#' className='page-link'>
                            {number}
                            </a>
                    </li>
                ) )
            }
            <button
            disabled = {currentPage === 10 ? true : false }
             onClick={next}>next</button>
        </ul>
    </nav>
  )
}

export default Pagination