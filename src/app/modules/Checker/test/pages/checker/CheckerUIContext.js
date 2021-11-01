import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./CheckerUIHelpers";

const CheckerUIContext = createContext();

export function useCheckerUIContext() {
  return useContext(CheckerUIContext);
}
//TODO
export const CheckerUIConsumer = CheckerUIContext.Consumer;

export function CheckerUIProvider({ CheckerUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);



  // sadece ilk sefer kontrol edilir
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    newProductButtonClick: CheckerUIEvents.newProductButtonClick,
    openEditProductPage: CheckerUIEvents.openEditProductPage,
    openDeleteProductDialog: CheckerUIEvents.openDeleteProductDialog,
   openDeleteProductsDialog: CheckerUIEvents.openDeleteProductsDialog,
    openFetchProductsDialog: CheckerUIEvents.openFetchProductsDialog,
    openUpdateProductsStatusDialog:
    CheckerUIEvents.openUpdateProductsStatusDialog,
  };

  return (
    <CheckerUIContext.Provider value={value}>
      {children}
    </CheckerUIContext.Provider>
  );
}
