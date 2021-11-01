import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ProductStatusCssClasses } from "../CheckerUIHelpers";
import * as actions from "../../../_redux/checker/CheckerAction";
import { useCheckerUIContext } from "../CheckerUIContext";

const selectedChecker = (entities, ids) => {
  const _products = [];
  ids.forEach((id) => {
    const product = entities.find((el) => el.id === id);
    if (product) {
      _products.push(product);
    }
  });
  return _products;
};

export function CheckerUpdateStatusDialog({ show, onHide }) {
  // Products UI Context
  const CheckerUIContext = useCheckerUIContext();
  const CheckerUIProps = useMemo(() => {
    return {
      ids: CheckerUIContext.ids,
      setIds: CheckerUIContext.setIds,
      queryParams: CheckerUIContext.queryParams,
    };
  }, [CheckerUIContext]);

  // Products Redux state
  const { products, isLoading } = useSelector(
    (state) => ({
      products: selectedChecker(state.products.entities, CheckerUIProps.ids),
      isLoading: state.products.actionsLoading,
    }),
    shallowEqual
  );

  // if there weren't selected products we should close modal
  useEffect(() => {
    if (CheckerUIProps.ids || CheckerUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CheckerUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for updateing product by ids
    dispatch(actions.updateCheckerStatus(CheckerUIProps.ids, status)).then(
      () => {
        // refresh list after deletion
        dispatch(actions.fetchChecker(CheckerUIProps.queryParams)).then(
          () => {
            // clear selections list
            CheckerUIProps.setIds([]);
            // closing delete modal
            onHide();
          }
        );
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status has been updated for selected products
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block cursor-default">
        {isLoading && (
          <div className="overlay-layer bg-transparent">
            <div className="spinner spinner-lg spinner-warning" />
          </div>
        )}
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {products.map((product) => (
              <div className="list-timeline-item mb-3" key={product.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${
                      ProductStatusCssClasses[product.status]
                    } label-inline`}
                    style={{ width: "60px" }}
                  >
                    ID: {product.id}
                  </span>{" "}
                  <span className="ml-5">
                    {product.manufacture}, {product.model}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className={`form-control ${ProductStatusCssClasses[status]}`}
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Selling</option>
            <option value="1">Sold</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
