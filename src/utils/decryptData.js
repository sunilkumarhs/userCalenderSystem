import CryptoJS from "crypto-js";
import { DECRYPT_KEY } from "./constants";

const decryptData = (data) => {
  console.log(DECRYPT_KEY);
  const bytes = CryptoJS.AES.decrypt(data, `${DECRYPT_KEY}`);
  console.log(bytes);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

export default decryptData;
