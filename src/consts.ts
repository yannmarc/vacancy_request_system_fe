import { PublicHoliday, Leave,  LeaveTableItem } from "./interface"
import moment from "moment";

export const EmployeeTypes = {
  employee: 'employee',
  admin: 'admin'
}

export const publicHolidays: PublicHoliday[] = [
    {
        title: "New Year's Day",
        eventDate: moment("2025-01-01").format("MMMM D, YYYY"),
        eventName: "Wednesday",
      },
      {
        title: "Youth Day",
        eventDate: moment("2025-02-11").format("MMMM D, YYYY"),
        eventName: "Tuesday",
      },
      {
        title: "Djouldé Soumaé (Eid al-Fitr)",
        eventDate: moment("2025-03-31").format("MMMM D, YYYY"),
        eventName: "Monday",
      },
      {
        title: "Good Friday",
        eventDate: moment("2025-04-18").format("MMMM D, YYYY"),
        eventName: "Friday",
      },
      {
        title: "Labour Day",
        eventDate: moment("2025-05-01").format("MMMM D, YYYY"),
        eventName: "Thursday",
      },
      {
        title: "National Day",
        eventDate: moment("2025-05-20").format("MMMM D, YYYY"),
        eventName: "Tuesday",
      },
      {
        title: "Ascension Day",
        eventDate: moment("2025-05-29").format("MMMM D, YYYY"),
        eventName: "Thursday",
      },
]

export const leaveCardinality:Leave[] = [
    {
        title: "Total Available Leaves",
        cardinality: 20,
        status: "NEUTRAL"
    },
    {
        title: "Total Approved Leaves",
        cardinality: 5,
        status: "APPROVED"
    },
    {
        title: "Total Rejected Leaves",
        cardinality: 5,
        status: "REJECTED"
    },
    {
        title: "Total Pending Leaves",
        cardinality: 5,
        status: "PENDING"
    }
]

export const getMockLeaves = (): LeaveTableItem[] => [
    {
      leaveId: "LV-001",
      status: "APPROVED",
      dateRequested: moment().subtract(10, "days").toISOString(),
      dateApproved: moment().subtract(5, "days").toISOString(),
      notes: "Annual leave approved by manager",
    },
    {
      leaveId: "LV-002",
      status: "PENDING",
      dateRequested: moment().subtract(3, "days").toISOString(),
      dateApproved: null,
      notes: "Sick leave request awaiting approval",
    },
    {
      leaveId: "LV-003",
      status: "REJECTED",
      dateRequested: moment().subtract(7, "days").toISOString(),
      dateApproved: null,
      notes: "Leave not approved due to project deadline",
    },
    {
      leaveId: "LV-004",
      status: "APPROVED",
      dateRequested: moment().subtract(20, "days").toISOString(),
      dateApproved: moment().subtract(18, "days").toISOString(),
      notes: "Emergency leave for family reasons",
    },
    {
      leaveId: "LV-005",
      status: "APPROVED",
      dateRequested: moment().subtract(15, "days").toISOString(),
      dateApproved: moment().subtract(13, "days").toISOString(),
      notes: "Medical leave due to surgery",
    },
    {
      leaveId: "LV-006",
      status: "PENDING",
      dateRequested: moment().subtract(2, "days").toISOString(),
      dateApproved: null,
      notes: "Requesting leave for personal development training",
    },
    {
      leaveId: "LV-007",
      status: "REJECTED",
      dateRequested: moment().subtract(12, "days").toISOString(),
      dateApproved: null,
      notes: "Leave denied due to overlapping team schedules",
    },
    {
      leaveId: "LV-008",
      status: "APPROVED",
      dateRequested: moment().subtract(30, "days").toISOString(),
      dateApproved: moment().subtract(28, "days").toISOString(),
      notes: "Leave granted for vacation trip",
    },
  ]
