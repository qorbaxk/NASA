import React, { useEffect } from "react";
import moment from "moment";


const Share = ({ item }) => {


  useEffect(() => {
    // 카카오톡 sdk 추가
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  console.log(item);

  const shareToKatalk = () => {
    // kakao sdk script 부른 후 window.Kakao로 접근
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      // 카카오에서 제공하는 javascript key를 이용하여 initialize
      if (!kakao.isInitialized()) {
        kakao.init("5ad88857f6fc678d0ac793d2f3489732");
      }
      //env파일 사용시 키오류가 계속되었음

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: `${moment(item.date).format("LL")} 천문학 사진`,
          description: "내가 선택한 그날의 사진을 공유해요",
          imageUrl: item.url,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "사진보러가기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <div>
      <button onClick={shareToKatalk}>공유</button>
    </div>
  );
};

export default Share;
