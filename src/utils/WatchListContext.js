import React, { createContext, useContext, useState } from "react";

const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => {
  return useContext(WatchListContext);
};
