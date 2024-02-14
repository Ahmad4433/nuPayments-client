import React from "react";
import style from "./banner.module.css";
const Banner = () => {


  const navigateToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


  return (
    <div className={style.main}>
      <div className={style.card}>
      <div className={style.left} >
      <p className={style.haiding} >Business</p>
        <p className={style.detail} >
          nuPayments is for companies of all sizes to process digital
          transactions, accept payments, send payouts, and Invoicing, to help
          companies reach their maximum potential.
        </p>
      </div>
        <div className={style.right} >
            <p className={style.rHiding} >Low Fees, Faster Transactions</p>
            <p className={style.rDetail} >1.7% fee across the board to send money anywhere.</p>
           <div className={style.action} >
           <button onClick={navigateToTop} className={style.action1}>Get Started</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
