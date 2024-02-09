import React from "react";
import style from "./hero.module.css";
import currency1 from "../../../assets/currency1.png";
import currency2 from "../.././../assets/currency2.png";
import currency3 from "../../../assets/currency3.png";
import Banner2 from "../banne2/Banner2";
import Banner from "../banner/Banner";
const Hero = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>Borderless Digital Payments</p>
          <p className={style.detail}>
            Zero knowledge payments that provide cross-borders solutions
          </p>
          <div className={style.action}>
            <button className={style.action1}>Individual</button>
            <button className={style.action2}>Business</button>
          </div>
        </div>
        <div className={style.right}>
         <div className={style.image2} >
         <img  src={currency2} alt='img' className={style.img2} />
         </div>
          <div className={style.inner}>
           <div className={style.image3} >
           <img alt="img" src={currency3} className={style.img3} />
           </div>
           
           <div className={style.image1} >
           <img alt="img" src={currency1} className={style.img1} />
           </div>
          </div>
        </div>
      </div>
     <Banner/>
     <Banner2/>
    </div>
  );
};

export default Hero;
