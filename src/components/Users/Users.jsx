import React, { useEffect, useState } from 'react'
import usersPhoto from '../../images/avatarGirls.png'
import arrowRight1 from '../../images/arrowRight1.png'
import arrowLeft from '../../images/arrowLeft.png'
// components
import { NavLink } from 'react-router-dom'
// utils
import { LS } from '../utilits/LocalStorage'
// styles
import styles from './users.module.css'

const Users = ({
                 users,
                 totalUsersCount,
                 currentPage,
                 onPageChanged,
                 pageSize,
                 positionSize = 10,
                 followingInProgress,
                 follow,
                 unfollow
               }) => {
  const [positionNumber, setPositionNumber] = useState(1)
  const leftPositionPageNumber = (positionNumber - 1) * positionSize + 1
  const rightPositionPageNumber = positionNumber * positionSize
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const positionCount = Math.ceil(pagesCount / positionSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const handleChange = (direction) => {
    const prev = direction === 'prev'

    setPositionNumber(prevPosition => {
      const operationNumber = prev ? prevPosition - 1 : positionNumber + 1

      LS.set('position', operationNumber)
      return operationNumber
    })
  }

  useEffect(() => {
    const position = LS.get('position')
    if (position) {
      setPositionNumber(position)
    }
  }, [])

  return (
      <div className={styles.usersPage}>
        <div className={styles.page}>
          {positionNumber > 1 &&
          <button onClick={() => handleChange('prev')}>
            <img className={styles.arrowUser} src={arrowRight1} />
          </button>}
          {pages
              .filter(p => p >= leftPositionPageNumber && p <= rightPositionPageNumber)
              .map(p => {
                return <span
                    key={p}
                    className={currentPage === p ? styles.selectedPage : null}
                    onClick={() => {
                      onPageChanged(p)
                    }}
                >{p}</span>
              })}
          {positionCount > positionNumber &&
          <button onClick={() => handleChange('next')}>
            <img className={styles.arrowUser} src={arrowLeft} />
          </button>}

        </div>
        {users?.map(u =>
              (
                  <div className={styles.users} key={u.id}>
                    <div>
                      <div>
                        <NavLink to={'/profile/' + u.id}>
                          <img
                              src={u.photos.small != null ? u.photos.small : usersPhoto} className={styles.userPhoto}
                          />
                        </NavLink>
                        <div>
                          {u.name}
                          <p>{u.status}</p>
                          {u.contacts}
                        </div>
                      </div>
                      {u.followed
                          ? <button
                              style={{opacity: `${followingInProgress ? 0.5 : 1}`}}
                              className={styles.btnUsers}
                              disabled={followingInProgress}
                              onClick={() => {
                                unfollow(u.id)
                              }}
                          >Unfollow</button>
                          : <button
                              className={styles.btnUsers}
                              disabled={followingInProgress}
                              onClick={() => {
                                follow(u.id)
                              }}
                          >Follow</button>}
                    </div>
                  </div>
              )
          )
        }
      </div>
  )
}


export default Users