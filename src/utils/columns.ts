import moment from "moment";
import { LeaveTableItem } from "../interface";

export const LOCAL_STORAGE_KEY = "leaveRequests";
export const TOTAL_AVAILABLE_LEAVES = 20

export const getLeaveColumns = (
) => [
  { key: "leaveId", label: "Leave ID" },
  { key: "status", label: "Status" },
  {
    key: "dateRequested",
    label: "Date Requested",
    format: (value: string) => moment(value).format("MMM D, YYYY"),
  },
  {
    key: "dateApproved",
    label: "Date Approved",
    format: (value: string | null) =>
      value ? moment(value).format("MMM D, YYYY") : "—",
  },
  { key: "notes", label: "Notes" },
  {
    key: "comment",
    label: "Comments",
    
  }
]

export const getStoredLeaves = (): LeaveTableItem[] => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
  
export const saveLeaveToStorage = (leave: LeaveTableItem) => {
    const currentLeaves = getStoredLeaves();
    const updated = [...currentLeaves, leave];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };