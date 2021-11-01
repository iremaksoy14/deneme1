/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/checker/CheckerAction";
import { useCheckerUIContext } from "../CheckerUIContext";

export function CheckerDeleteDialog({ show, onHide }) {
  // Products UI Context
  const checkerUIContext = useCheckerUIContext();
  const checkerUIProps = useMemo(() => {
    return {
      ids:checkerUIContext.ids,
      setIds:checkerUIContext.setIds,
      queryParams:checkerUIContext.queryParams,
    };
  }, [checkerUIContext]);

  // Products Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.products.actionsLoading }),
    shallowEqual
  );

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  // if there weren't selected products we should close modal
  useEffect(() => {
    if (!checkerUIProps.ids || checkerUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkerUIProps.ids]);

  const deleteChecker = () => {
    // server request for deleting product by seleted ids
    dispatch(actions.deleteCheckers(checkerUIProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchCheckers(checkerUIProps.queryParams)).then(() => {
        // clear selections list
        checkerUIProps.setIds([]);
        // closing delete modal
        onHide();
      });
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Products Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete selected products?</span>
        )}
        {isLoading && <span>Products are deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
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
            onClick={deleteChecker}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
