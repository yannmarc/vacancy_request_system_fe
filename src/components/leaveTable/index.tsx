import { DynamicTable } from "../dynamicTable";
import { getStoredLeaves } from "../../utils/columns";
import { LeaveTableItem } from "../../interface";
import { useEffect, useState } from "react";
import { RequestVacationModal } from "../requestVacationModal";
import { RequestHistoryLeavesModal } from "../requestHistoryModal";
import moment from "moment";
import { useUser } from "../../context/userContext";


const getLeaveColumns = () => {
    
    const baseClasses =
    "px-1 py-[2px] rounded-[2px]";

    const statusStyles: Record<string, string> = {
        APPROVED: "bg-green-50 text-green-900",
        REJECTED: "bg-red-100 text-red-800",
        PENDING: "bg-orange-100 text-orange-800",
    };
  
    return [
      { key: "leaveId", label: "Leave ID" },
      { key: "status", label: "Status", format: (status: string) => {
        console.log(status)
        return <span className={`${baseClasses} ${statusStyles[status]}`}>{status}</span>
        
      }},
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
    ];
  };
  
      

export const LeaveTable = () => {
  const columnDefs = getLeaveColumns();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [historyModalOpen, setHistoryModalOpen] = useState<boolean>(false);
  const [leaves, setLeaves] = useState<LeaveTableItem[]>([]);
  const { user } = useUser();

  useEffect(() => {
    setLeaves(getStoredLeaves());
  }, [modalOpen]);

  const formattedColumns = columnDefs.map(({ key, label, format }) => ({
    key,
    label,
    format
  }));

  const formattedData = leaves.map((item) => {
    const row: Record<string, unknown> = { ...item };

    columnDefs.forEach(({ key, format }) => {
      if (format) {
        row[key] = format(item[key as keyof LeaveTableItem] as string);
      }
    });

    return row;
  });

  console.log(user)

  return (
    <div className="bg-white rounded-tl-2xl rounded-tr-2xl w-[70%]">
        <div className="py-5 px-5 flex  justify-between">
            <div className="">
                <h2 className="text-xl font-bold">Ongoing vacation</h2>
                <p className="text-[14px]">View active deposit plans</p>
            </div>
            {<div className="flex gap-2 items-center">
                <span className="p-[9px] border-2 border-blue-200 rounded-md cursor-pointer" onClick={() => setHistoryModalOpen(true)}>History</span>
                <button className="!px-[10px] text-white !bg-blue-500 rounded-[6px]" onClick={() => setModalOpen(true)}>Request vacation</button>
            </div>}
        </div>
        <DynamicTable columns={formattedColumns} data={formattedData} />
        <RequestVacationModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>
        <RequestHistoryLeavesModal isOpen={historyModalOpen} onClose={() => setHistoryModalOpen(false)}/>
    </div>
  );
};