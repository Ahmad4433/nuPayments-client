import React, { useEffect, useRef, useState } from "react";
import style from "./getproductsbyuserid.module.css";
const GetProductByUserId = ({ userId }) => {

    const [copied,setCopied] = useState(false)
    const codeRef = useRef()

  const htmlCode = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Products</title>
    
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            .product-container {
                display: flex;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
                font-family: sans-serif;
            }
    
            .card {
                padding: 1rem;
                width: 100%;
                max-width: 260px;
                border: 1px solid #ccc;
                border-radius: 10px;
            }
    @media(max-width:450px){
        .card{
            max-width:100%
        }
    }
            .pro-image {
                max-width: 100%;
                max-height: 100%;
                display: block;
                padding: 1rem;
                background-color: #f5f5f5;
                border-radius: 10px;
                margin-bottom: 1rem;
            }
    
            .pro-name {
    
                font-size: 1rem;
                font-weight: 600;
                letter-spacing: 0.4px;
                white-space: nowrap;
                margin-bottom: 1rem;
    
            }
    
            .pro-price {
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 1.4rem;
    
            }
    
            .pro-detail {
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 1.4rem;
            }
    
            .pro-detail-btn {
                padding: 1rem;
                border: none;
                background-color: #333;
                color: white;
                font-family: sans-serif;
                text-transform: uppercase;
                width: 100%;
                border-radius: 10px;
                letter-spacing: 0.4px;
                cursor: pointer;
    
                &:hover {
                    background-color: #333333e4;
                }
            }
        </style>
    
        <script defer>
            console.log('running')
    
            const getProducts = async () => {
    
                try {
                    const local = "http://localhost:8000/plugin/product/by-user";
                    const live =
                        "https://newapp--4-f1f2be6aa8d1.herokuapp.com/plugin/product/by-user-id";
                    const response = await fetch(live, {
                        method: "POST",
                        body: JSON.stringify({ userId: '${userId}'}),
                        headers: { "Content-Type": "application/json" },
                    });
    
                    const resData = await response.json();
                    if (!response.ok) {
                        console.log(resData.message);
                    } else {
                        console.log(resData);
                        const gridDiv = document.querySelector('.product-container')
                        const newArray = resData?.filterArray.map((ele, index) => {
    
                            return \`<div class='card'>
                                    <img src=\${ele.image} class='pro-image'/>
                                    <h5 class='pro-name' >\${ele.name}</h5>
                                    <h3 class='pro-price'>Price: $\${ele.price}</h3>
                                    <p class='pro-detail'>\${ele.description}</p>
                                    <button class='pro-detail-btn'>Detail</button>
                                </div>\`
    
                        })
    
                        gridDiv.innerHTML = newArray.join('');
    
                    }
                } catch (error) {
                    console.log(error);
                }
    
    
    
            }
    
            getProducts()
    
        </script>
    
    </head>
    
    <body>
    
        <div class="product-container">
    
    
    
        </div>
    
    </body>
    
    </html>`;

useEffect(()=>{

    codeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

},[userId])

    const copyHandler = () => {
        const textarea = document.createElement('textarea');
        textarea.textContent = htmlCode;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        setCopied(true)
    };

  return (
    <div className={style.main}>
        <div className={style.copy} >
            <button ref={codeRef} onClick={copyHandler} >{copied ? 'Copied':'Copy'} </button>
   
        </div>
      <div  className={style.card}>
     
        <pre  >
          <code className={style.code}>{htmlCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default GetProductByUserId;
