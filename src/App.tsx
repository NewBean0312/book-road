import axios from "axios";
import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";

// API 데이터 타입
interface Item {
  schNm: string;
  fcltyNm: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // API 가져오기
  useEffect(() => {
    axios
      .get(
        "http://api.kcisa.kr/openapi/API_CNV_065/request?serviceKey=0fccf770-5e48-4b83-9eec-f5b7a8849575&numOfRows=10&pageNo=1&schNm=%EB%8C%80%EC%A0%84%EC%86%A1%EC%B4%8C&dist=100"
      )
      .then((response) => {
        setData(response.data.response.body.items.item);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>; // 로딩
  if (error) return <div>Error: {error.message}</div>; // 에러

  return (
    <>
      <MainPage />
    </>
  );
};

export default App;
