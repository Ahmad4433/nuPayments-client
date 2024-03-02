import React, { useEffect, useState } from "react";
import style from "./approvePayment.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { Alert, Snackbar } from "@mui/material";
const ApprovePayment = () => {
  const [data, setData] = useState("");
  const [sendData, setSendData] = useState(null);
  const [disOnResult, setDisOnResult] = useState(false);

  const urlLink = window.location.search;
  const params = new URLSearchParams(urlLink);
  const link = params.get("id");

  useEffect(() => {
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
    const data2 = {
      sender: data?.detail?.name,
      amount: data?.detail?.amount,
      status: data?.detail?.status,
      detail: data?.detail?.description,
    };
    const rec = data?.user?._id;
    console.log(rec, data2);
    try {
      const response = await fetch(
        "https://newapp--4-f1f2be6aa8d1.herokuapp.com/transcation/add",
        {
          method: "POST",
          body: JSON.stringify({ data: data2, rec: rec,payId:link }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const resData = await response.json();
      if (!response.ok) {
        console.log(resData.message);
        setSendData(resData?.message);
      } else {
        setSendData(resData?.message);
        setDisOnResult(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.head}>
          <p className={style.title}>Pending Approval</p>
          <IoCloseSharp onClick={closeTab} className={style.icon} />
        </div>
        <div className={style.sendDetail}>
          <p className={style.fromT}>from</p>
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
            <span className={style.status}>{data?.detail?.status}</span>
          </div>
        </div>
        <div className={style.amountS}>
          <span className={style.amountT}>amount</span>
          <span className={style.amount}>${data?.detail?.amount}</span>
        </div>
        <p className={style.detail}>{data?.detail?.description}</p>
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
