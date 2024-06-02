import { useEffect } from "react";

const useUserInfo = (token) => {
  const getUserInfo = async () => {
    console.log("came");
    const data = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const jsonData = await data.json();
    return jsonData;
  };

  useEffect(() => {
    if (token !== null) {
      getUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUserInfo;
