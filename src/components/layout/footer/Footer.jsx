import React from "react";
import style from "./footer.module.css";
import currency2 from "../../../assets/currency2.png";
import currency3 from "../../../assets/currency3.png";
const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>Get The nu App</p>
          <div className={style.action}>
            <button className={style.action1}>Download</button>
          </div>
          <div className={style.image3}>
            <img alt="img" src={currency3} className={style.img3} />
          </div>

          <div className={style.image2}>
            <img src={currency2} alt="img" className={style.img2} />
          </div>
        </div>
        <div className={style.right}>
          <p className={style.rhaiding} >Individual </p>
          <p className={style.rdetail} >
            We make it simple. nu users automatically have direct access to
            nuPayments within the nu application. Don’t have nu mobile? You can
            still nuPayments to send and receive payments.
          </p>
          <p className={style.rhaiding} >Not a nu app user</p>
          <p className={style.rdetail} >
            Do not worry, you can still sign up to use nuPayments with a few
            easy steps. Send links, setup QR codes to send and receive payments.{" "}
          </p>
          <div className={style.lower} >
            <p>Faqs</p>
            <p>Faqs</p>
            <p>Contact US</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
