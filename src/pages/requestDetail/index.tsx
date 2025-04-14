import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LeaveTableItem } from "../../interface";
import { getStoredLeaves, LOCAL_STORAGE_KEY } from "../../utils/columns";
import moment from "moment";

export const RequestDetail:React.FC = () => {

const { leaveId } = useParams();
const [leave, setLeave] = useState<LeaveTableItem | null>(null);

const allLeaves = getStoredLeaves();

const saveLeaves = (leaves: LeaveTableItem[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(leaves));
  };

  useEffect(() => {
    const allLeaves = getStoredLeaves();
    const found = allLeaves.find((item) => item.leaveId === leaveId);
    setLeave(found ?? null);
  }, [leaveId]);

  const approveItem = (itemId: string) => {
    const updatedLeaves = allLeaves.map((item) => {
      if (item.leaveId === itemId) {
        return {
          ...item,
          status: "APPROVED" as LeaveTableItem['status'],
          dateApproved: moment().format("MMM D, YYYY, h:mm A"),
        };
      }
      return item;
    });
  
    saveLeaves(updatedLeaves)
}
  
const rejectItem = (itemId: string) => {
    const updatedLeaves = allLeaves.map((item) => {
      if (item.leaveId === itemId) {
        return {
          ...item,
          status: "REJECTED" as LeaveTableItem['status'],
          dateApproved: moment().format("MMM D, YYYY, h:mm A"),
        };
      }
      return item;
    });
  
    saveLeaves(updatedLeaves);
}

  return (
    <div className="bg-gray-50 p-8 rounded-2xl max-w-[733px] mx-auto">
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="text-sm text-gray-500">Request ID</h4>
          <p className="text-xl font-semibold">{leave?.leaveId}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">Request Type</h4>
          <p className="text-xl font-semibold">{leave?.type ? leave?.type : "N/A"}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">Date Requested</h4>
          <p className="text-xl font-semibold">{moment(leave?.dateRequested).format("MMM D, YYYY")}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">End Date</h4>
          <p className="text-xl font-semibold">{moment(leave?.endDate).format("MMM D, YYYY")}</p>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-sm text-gray-700 mb-2">Notes</h4>
        <div className="border border-dashed border-blue-400 p-4 rounded-lg h-40 overflow-y-auto text-sm text-gray-600 whitespace-pre-wrap">
          {leave?.notes}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-gray-700 mb-2">Attachments</h4>
        <div className="flex gap-4">
          {leave?.attachments?.map((img) => (
            <div
              key={img}
              className="w-32 h-20 bg-gray-100 rounded-lg shadow-inner"
            >
                <img src={img}/>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button className="px-4 py-2 rounded-lg !bg-red-50 text-red-600 hover:bg-red-100" onClick={() => rejectItem(leaveId as string)}>
          Reject
        </button>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700" onClick={() => approveItem(leaveId as string)}>
          Approve
        </button>
      </div>
    </div>
  );
}
