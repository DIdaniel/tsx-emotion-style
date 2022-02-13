import React, { useState, useEffect } from "react";
import "./App.css";
import GlobalInfo from "./components/GlobalInfo";
import CountryList from "./components/CountryList";
import { ResponseData } from "./types";

const App: React.FC = () => {
  const url = "https://api.covid19api.com/summary";

  const [data, setData] = useState<ResponseData | undefined>(undefined);

  const fetchData = async () => {
    const result = await fetch(url);
    const data: ResponseData = await result.json();

    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {data ? (
        <>
          <GlobalInfo
            newConfirmed={data?.Global.NewConfirmed}
            newDeaths={data?.Global.NewDeaths}
            newRecovered={data?.Global.NewRecovered}
          />
          <CountryList countries={data.Countries} />
        </>
      ) : (
        "Loading.... "
      )}
    </div>
  );
};

export default App;
