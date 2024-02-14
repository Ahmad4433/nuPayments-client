import React from "react";
import style from "./banner2.module.css";
import currency1 from "../../../assets/currency1.png";
import currency2 from "../.././../assets/currency2.png";
import currency3 from "../../../assets/currency3.png";

const Banner2 = () => {


  const navigateToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>Zero Monthly Cost</p>
          <p className={style.haiding2}>1.7% Fee</p>
          <p className={style.detail}>
            nuPayments has no monthly fees. We process a 1.7% transaction fee +
            20 cents. No hidden fees! Sign up to get started today!
          </p>
          <div className={style.action}>
            <button onClick={navigateToTop} className={style.action1}>Sign Up</button>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.inner}>
            <div className={style.image1}>
              <img alt="img" src={currency1} className={style.img1} />
            </div>
            <div className={style.image3}>
              <img alt="img" src={currency3} className={style.img3} />
            </div>
          </div>

          <div className={style.image2}>
            <img src={currency2} alt="img" className={style.img2} />
          </div>
          <p className={style.bottomT}>Our partners are your partners!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
