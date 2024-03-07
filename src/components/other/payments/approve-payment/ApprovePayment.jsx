import React, { useEffect, useState } from "react";
import style from "./approvePayment.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { Alert, Snackbar } from "@mui/material";
import { CiShare2 } from "react-icons/ci";
import Swal from "sweetalert2";
const ApprovePayment = () => {
  const [data, setData] = useState("");
  const [sendData, setSendData] = useState(null);
  const [disOnResult, setDisOnResult] = useState(false);
  const [urlLink2, setUrlLink2] = useState("");
  const [isPassOpen,setIsPassOpen] = useState(false)
  const [pin,setPin] = useState('')

  const urlLink = window.location.search;
  const params = new URLSearchParams(urlLink);

  const link = params.get("id");

  useEffect(() => {
    setUrlLink2(
      `https://quickchart.io/qr?text=${window.location.href}&size=400}`
    );

    getPaymentDetail();
  }, [link]);

  async function getPaymentDetail() {
    try {
      const response = await fetch(
        "https://newapp--4-f1f2be6aa8d1.herokuapp.com/payment/single",
        {
          method: "POST",
          body: JSON.stringify({ id: link }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const resData = await response.json();
      if (!response.ok) {
        console.log(resData.message);
      } else {
        setData(resData?.findedPayment);
        console.log(resData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const closeTab = () => {
    // Close the current tab
    window.close();
  };

  const approveHandler = async () => {

    setIsPassOpen(true)

    // const data2 = {
    //   sender: data?.detail?.name,
    //   amount: data?.detail?.amount,
    //   status: data?.detail?.status,
    //   detail: data?.detail?.description,
    // };
    // const rec = data?.user?._id;
    // console.log(rec, data2);
    // try {
    //   const response = await fetch(
    //     "https://newapp--4-f1f2be6aa8d1.herokuapp.com/transcation/add",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({ data: data2, rec: rec, payId: link }),
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    //   const resData = await response.json();
    //   if (!response.ok) {
    //     console.log(resData.message);
    //     setSendData(resData?.message);
    //   } else {
    //     setSendData(resData?.message);
    //     setDisOnResult(true);
    //     Swal.fire({
    //       title: "Success!",
    //       text: "Payment added successfully!",
    //       icon: "success",
    //       confirmButtonText: "OK",
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('approvePayment_passModel__6ujYC')) {
        setIsPassOpen(false);
      }
    };
  
    document.body.addEventListener('click', handleClickOutside);
  
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  

useEffect(() => {
  if (isPassOpen) {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
  } else {
    // Allow scrolling
    document.body.style.overflow = 'auto';
  }

  // Cleanup function to reset overflow style when component unmounts
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isPassOpen]);


const pinChange = (event)=>{

  setPin(event.target.value)
}


  const confirmHandler = async()=>{

    console.log(pin)
    console.log(data?.detail?.name)

  }

  const shareHandler = () => {
    navigator
      .share({
        title: "Payment request",
        text: "payment",
        URL: window.location.href,
      })
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.main}>

   {
    isPassOpen &&    <div className={style.passModel} >
    <div className={style.form} >
    <input onChange={pinChange} maxLength={4} type="password" placeholder="Enter your 4-digit Pin"  />
    <button onClick={confirmHandler} >Confirm</button>
    </div>

      </div>
   }
      <div className={style.card}>
        <div className={style.head}>
          <p className={style.title}>
            {data?.detail?.status === "Send"
              ? "Pending Request"
              : "Pending Approval"}
          </p>
          <IoCloseSharp onClick={closeTab} className={style.icon} />
        </div>
        <div className={style.sendDetail}>
          <p className={style.fromT}>from</p>
          <img src={data.user?.image} className={style.userImg} />
          <p className={style.fromN}>{data?.user?.name}</p>
        </div>
        <div className={style.description}>
          <div className={style.dateS}>
            <span className={style.dateT}>Date</span>
            <span className={style.date}>
              {new Date(data?.createdAt).toLocaleString()}
            </span>
          </div>
          <div className={style.statusS}>
            <span className={style.statusT}>status</span>
            <span className={style.status}>Pending...</span>
          </div>
        </div>
        <div className={style.amountS}>
          <p className={style.amountT}>amount</p>

          <div className={style.amountLower}>
            <div className={style.qrSection}>
              <span className={style.amount}>{data?.detail?.amount}</span>
              <span className={style.method}>{data?.detail?.method}</span>
            </div>
            <div className={style.qrApi}>
              <img src={urlLink2} className={style.api} />
              <CiShare2 onClick={shareHandler} className={style.share} />
            </div>
          </div>
        </div>
        <div className={style.note}>
          <p>Note</p>
          <p className={style.detail}>{data?.detail?.description}</p>
        </div>
        <div className={style.actions}>
          <button
            disabled={disOnResult}
            onClick={approveHandler}
            className={style.action}
          >
            Approve
          </button>
        </div>
      </div>

      <Snackbar
        autoHideDuration={3000}
        open={sendData}
        onClose={() => setSendData(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSendData(null)}
          open={sendData}
          severity="success"
        >
          {sendData}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ApprovePayment;
