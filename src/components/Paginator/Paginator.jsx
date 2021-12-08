
// import React from 'react'
// import styles from './users.module.css'
//
//
// const Paginator = ({ totalUsersCount, pageSize, currentPage, v }) => {
//   let pagesCount = Math.ceil(totalUsersCount / pageSize)
//
//   let pages = []
//   for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i)
//   }
//
//   return <div>
//           {/*<div*/}
//           {/*    style={{*/}
//           {/*      maxWidth: '200px',*/}
//           {/*      overflowX: 'scroll',*/}
//           {/*      margin: '0 auto'*/}
//           {/*    }}*/}
//           {/*>*/}
//             {pages.map(p => {
//               return <span
//                   style={{
//                     padding: '0 3px'
//                   }}
//                   className={currentPage === p && styles.selectedPage}
//                   onClick={(e) => {
//                     onPageChanged(p)
//                   }}
//               >{p}</span>
//             })}
//           </div>
//
//  export default Paginator;