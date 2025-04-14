export interface PublicHoliday {
    title: string,
    eventName: string,
    eventDate: string
}

export type LeaveStatus = {
    Approved:  "APPROVED"
    Pending: "PENDING",
    Rejected: "REJECTED",
    Neutral: "NEUTRAL"
}

export interface Leave{
    title: string,
    cardinality: number,
    status: string
}

export type LeaveTableItem = {
    leaveId: string;
    status: "APPROVED" | "PENDING" | "REJECTED";
    dateRequested: string;
    dateApproved: string | null;
    notes: string;
    type?: string;
    endDate?: string;
    comment?: string;
    attachments?: string[]
  };