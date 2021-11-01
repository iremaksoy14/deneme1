import React, { useMemo } from "react";
import { useCheckerUIContext } from "../CheckerUIContext";

export function CheckerGrouping() {
  // Products UI Context
  const CheckerUIContext = useCheckerUIContext();
  const CheckerUIProps = useMemo(() => {
    return {
      ids: CheckerUIContext.ids,
      setIds: CheckerUIContext.setIds,
      openDeleteProductsDialog: CheckerUIContext.openDeleteProductsDialog,
      openFetchProductsDialog: CheckerUIContext.openFetchProductsDialog,
      openUpdateProductsStatusDialog:
      CheckerUIContext.openUpdateProductsStatusDialog,
    };
  }, [CheckerUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="-font-bold font-danger-">
                <span>
                  Selected records count: <b>{CheckerUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={CheckerUIProps.openDeleteProductsDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={CheckerUIProps.openFetchProductsDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={CheckerUIProps.openUpdateProductsStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
