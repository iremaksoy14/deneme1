import React, { useState } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda
  // EventSettingsModel
} from "@syncfusion/ej2-react-schedule";

export default function Calendar() {
  const data = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      EndTime: new Date(2021, 7, 31, 17, 0, 50, 0),
      StartTime: new Date(2021, 7, 31, 16, 50, 45, 0)
    }
  ];
  return (
    <ScheduleComponent
      currentView="Month"
      eventSettings={{
        dataSource: data,
        fields: {
          id: "Id",
          subject: { name: "Subject" },
          startTime: { name: "StartTime" },
          endTime: { name: "EndTime" }
        }
      }}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}
