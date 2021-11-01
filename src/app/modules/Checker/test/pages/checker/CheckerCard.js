import React, {useMemo} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { CheckerFilter } from "./checker-filter/CheckerFilters";
import  CheckerTable  from "./checker-table/CheckerTable";
import { CheckerGrouping } from "./checker-grouping/CheckerGrouping";
import { useCheckerUIContext } from "./CheckerUIContext";

export function CheckerCard() {
  const CheckerUIContext = useCheckerUIContext();
  const CheckerUIProps = useMemo(() => {
    return {
      ids: CheckerUIContext.ids,
      queryParams: CheckerUIContext.queryParams,
      setQueryParams: CheckerUIContext.setQueryParams,
      newProductButtonClick: CheckerUIContext.newProductButtonClick,
      openDeleteProductsDialog: CheckerUIContext.openDeleteProductsDialog,
      openEditProductPage: CheckerUIContext.openEditProductPage,
      openUpdateProductsStatusDialog:
      useCheckerUIContext.openUpdateProductsStatusDialog,
      openFetchProductsDialog: useCheckerUIContext.openFetchProductsDialog,
    };
  }, [useCheckerUIContext]);

  return (
    <Card>
      <CardHeader title="Checker List">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={CheckerUIProps.newProductButtonClick}
          >
            New Checker
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <CheckerFilter />
        {CheckerUIProps.ids.length > 0 && (
          <>
            <CheckerGrouping />
          </>
        )}
        <CheckerTable />
      </CardBody>
    </Card>
  );
}
