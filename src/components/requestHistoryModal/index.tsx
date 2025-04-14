import { useEffect, useState } from "react";
import { getStoredLeaves } from "../../utils/columns";
import { LeaveTableItem } from "../../interface";

export const RequestHistoryLeavesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [leaves, setLeaves] = useState<LeaveTableItem[]>([]);

    const baseClasses =
    "px-1 py-[2px] rounded-[2px]";

    const statusStyles: Record<string, string> = {
        APPROVED: "bg-green-50 text-green-900",
        REJECTED: "bg-red-100 text-red-800",
        PENDING: "bg-orange-100 text-orange-800",
    };
  
    useEffect(() => {
      if (isOpen) {
        setLeaves(getStoredLeaves());
      }
    }, [isOpen]);
  
    if (!isOpen) return null;
  
    return (
      <div className="absolute top-0 left-0 w-full h-[100vh] bg-black opacity-96 flex items-center justify-center z-[9999]">
        <div className="bg-gray-100 p-10 rounded-[16px] shadow w-[546px] max-h-[80vh] overflow-y-auto">
          <h3 className="text-[22px] font-semibold">Request History</h3>
          <p className="pb-6">Below you can find the history of your requests history</p>
          {leaves.map((leave) => (
            <div key={leave.leaveId} className="bg-white rounded-[8px] p-[12px] mb-3 flex justify-between items-center">
              <div className="flex gap-x-2">
                <div className="">
                    <p className="text-[16px] font-normal text-gray-900">{leave.type ? leave.type : leave.notes}</p>
                    <p className="text-[12px] font-bold">{leave.leaveId}</p>
                </div>
                <div className="w-[181px]">
                    <p className="w-full text-balance break-normal h-[49px]">{leave.comment}</p>
                </div>
              </div>
              <p className={`${baseClasses} ${statusStyles[leave.status]}`}>{leave.status}</p>
            </div>
          ))}
          <div className="text-right mt-4">
            <button onClick={onClose} className="text-white">Close</button>
          </div>
        </div>
      </div>
    );
  };