import React, { useEffect, useState } from 'react'
import style from './approvePayment.module.css'
import { IoCloseSharp } from "react-icons/io5";
const ApprovePayment = () => {
    const [data,setData] = useState('')

    const urlLink = window.location.search
    const params = new URLSearchParams(urlLink)
    const link = params.get('id')

        useEffect(()=>{
getPaymentDetail()
   

        },[link])


async function getPaymentDetail(){
try {
    
    const response = await fetch('https://nu-payment-server-web.vercel.app/payment/single',{

method:'POST',
body:JSON.stringify({id:link}),
headers:{'Content-Type':'application/json'}

})

const resData = await response.json()
if(!response.ok){
    console.log(resData.message)
}else{
   setData(resData?.findedPayment)
}

} catch (error) {
 console.log(error)   
}


}

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
        <p className={style.fromN} >{data?.user?.name}</p>
    </div>
    <div className={style.description} >
        <div className={style.dateS} >
            <span className={style.dateT} >Date</span>
            <span className={style.date} >{new Date(data?.createdAt).toLocaleString()}</span>
        </div>
        <div className={style.statusS} >
            <span className={style.statusT} >status</span>
            <span className={style.status} >{data?.detail?.status}</span>
        </div>
    </div>
    <div className={style.amountS} >
        <span className={style.amountT} >amount</span>
        <span className={style.amount} >${data?.detail?.amount}</span>
    </div>
    <div  className={style.actions} >
        <button className={style.action} >Approve</button>
    </div>
      </div>

    </div>
  )
}

export default ApprovePayment
