import CryptoJS from "crypto-js";
import { DECRYPT_KEY } from "./constants";

const decryptData = (data) => {
  // console.log(DECRYPT_KEY);
  // const decryptedData = CryptoJS.AES.decrypt(data, `${DECRYPT_KEY}`).toString();
  // return decryptedData;
  const decData = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  const bytes = CryptoJS.AES.decrypt(decData, DECRYPT_KEY).toString(
    CryptoJS.enc.Utf8
  );
  return JSON.parse(bytes);
};

export default decryptData;
