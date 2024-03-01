import React, { useEffect } from 'react'
import style from './approvePayment.module.css'
import { IoCloseSharp } from "react-icons/io5";
const ApprovePayment = () => {

    const urlLink = window.location.search
    const params = new URLSearchParams(urlLink)
    const link = params.get('id')

        useEffect(()=>{

            console.log(link)

        },[link])

    const closeTab = ()=>{
// Close the current tab
window.close();

    }

  return (
    <div className={style.main} >
      <div className={style.card} >

    <div className={style.head} >
        <p className={style.title} >Pending Approval</p>
        <IoCloseSharp onClick={closeTab} className={style.icon} />
    </div>
    <div className={style.sendDetail} >
        <p className={style.fromT} >from</p>
        <p className={style.fromN} >Admin</p>
    </div>
    <div className={style.description} >
        <div className={style.dateS} >
            <span className={style.dateT} >Date</span>
            <span className={style.date} >{new Date().toLocaleString()}</span>
        </div>
        <div className={style.statusS} >
            <span className={style.statusT} >status</span>
            <span className={style.status} >pending...</span>
        </div>
    </div>
    <div className={style.amountS} >
        <span className={style.amountT} >amount</span>
        <span className={style.amount} >$55.25</span>
    </div>
    <div  className={style.actions} >
        <button className={style.action} >Approve</button>
    </div>
      </div>

    </div>
  )
}

export default ApprovePayment
