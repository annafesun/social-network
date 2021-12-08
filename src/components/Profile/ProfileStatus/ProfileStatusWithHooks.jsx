// import React, { useEffect, useState } from 'react'
// import { updateStatus } from '../../redux/profileReducer'
//
// const ProfileStatusWithHooks = (props) => {
//   let [editMode, setEditMode] = useState(false)
//   let [status, setStatus] = useState(props.status)
//
//   useEffect( () => {
//     setStatus(props.status)
//   },[props.status])
//
//   const activateEditMode = () => {
//     setEditMode(true)
//   }
//
//   const deactivateEditMode = () => {
//     setEditMode(false)
//     updateStatus(status)
//   }
//
//   const onStatusChanged = (e) => {
//     setStatus(e.currentTarget.value)
//   }
//
//   return (
//       <div>
//         {!editMode &&
//         <div>
//           <b>Status:</b> <span onClick={activateEditMode}>{props.status || 'Write your status'}</span>
//         </div>
//         }
//         {editMode &&
//         <div>
//           <input
//               onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode}
//               value={status}
//           />
//         </div>
//         }
//       </div>
//   )
//
// }
//
// export default ProfileStatusWithHooks