import React, { useEffect, useState } from "react";
import qrcode from "qrcode";
import style from "./invoiceQr.module.css";
import { Alert, Snackbar } from "@mui/material";
import { VscChromeClose } from "react-icons/vsc";


const InvoiceQr = () => {
  const [qrCodeData, setQRCodeData] = useState("");
  const [copied, setCopied] = useState("");
  const [loading,setLoading] = useState(true)
  const queryParams = window.location.search;
  const params = new URLSearchParams(queryParams);
  const url = params.get("url");

  useEffect(() => {
    generateQRCode(url);
  }, [url]);

  const generateQRCode = async (data) => {
    try {
      const qrData = await qrcode.toDataURL(data);
      setQRCodeData(qrData);
      setLoading(false)
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const cpoyHandler = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        // If copying is successful
        setCopied(url);
        console.log("URL copied to clipboard:", url);
      } else {
        // Clipboard API not supported
        console.error("Clipboard API not available");
      }
    } catch (error) {
      // Error handling
      console.error("Error copying to clipboard:", error);
      // Optionally set an error state or show an error message to the user
    }
  };


  const bachHandler = ()=>{

    window.location.href='http://localhost:3000/invoice.html'
  }
  

  return (
    <div className={style.main}>
      <div className={style.model}>
      
        <div className={style.backContainer} >
        <VscChromeClose onClick={bachHandler} className={style.back} />
        </div>
     {loading ? <p>please wait...</p>:   <div className={style.card}>
  
  {qrCodeData && <img src={qrCodeData} alt="QR Code" />}

    <button onClick={cpoyHandler} className={style.copyBtn}>
      click to copy link
    </button>
  </div>}
      </div>

      <Snackbar
        open={copied}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success">Link copied successfully...</Alert>
      </Snackbar>
    </div>
  );
};

export default InvoiceQr;
