//e-commerce--->test
//products-->checker
//Product-->Checker
import React from "react";
import { Route } from "react-router-dom";
import { CheckerLoadingDialog } from "./checker-loading-dialog/CheckerLoadingDialog";
import { CheckerDeleteDialog } from "./checker-delete-dialog/CheckerDeleteDialog";

import { CheckerFetchDialog } from "./checker-fetch-dialog/CheckerFetchDialog";
import { CheckerUpdateStatusDialog } from "./checker-update-status-dialog/CheckerUpdateStatusDialog";
import { CheckerCard } from "./CheckerCard";
import { CheckerUIProvider } from "./CheckerUIContext";;

export function CheckerPage({ history }) {
  const checkerUIEvents = {
    newCheckerButtonClick: () => {
      history.push("/test/checker/new");
    },
    openCheckerPage: (id) => {
      history.push(`/test/checker/${id}/edit`);
    },
    openDeleteCheckerDialog: (id) => {
      history.push(`/test/checker/${id}/delete`);
    },
    openDeleteCheckersDialog: () => {
      history.push(`/text/checker/deleteChecker`);
    },
    openFetchCheckesrDialog: () => {
      history.push(`/test/checker/fetch`);
    },
    openUpdateCheckerStatusDialog: () => {
      history.push("/test/checker/updateStatus");
    },
  };

  return (
    <CheckerUIProvider checkerUIEvents={checkerUIEvents}>
      <CheckerLoadingDialog/>
      
      <Route path="/test/checker/deleteChecker">
        {({ history, match }) => (
          <CheckerDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/test/checker");
            }}
          />
        )}
      </Route>
      <Route path="test/checker/:id/delete">
        {({ history, match }) => (
          <CheckerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/test/checker");
            }}
          />
        )}
      </Route>
      <Route path="/test/checker/fetch">
        {({ history, match }) => (
          <CheckerFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/test/checker");
            }}
          />
        )}
      </Route>
      <Route path="/test/checker/updateStatus">
        {({ history, match }) => (
          <CheckerUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/test/checker");
            }}
          />
        )}
      </Route>
      <CheckerCard />
    </CheckerUIProvider>
  );
}
