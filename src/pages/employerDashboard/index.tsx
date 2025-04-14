import React from "react";
import { LeaveRequestTable } from "../../components/requestTable";

export const EmployerDashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-[1112px] mx-auto space-y-6">
      <h1 className="!text-[22px] font-bold">Welcome Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-green-50 text-green-700 rounded-[8px] px-5 py-6">
          <h2 className="text-[20px] font-semibold text-gray-700 mb-2">Total Incoming requests</h2>
          <p className="text-[48px] font-bold text-[inherit]">20</p>
        </div>

        <div className="bg-blue-50 rounded-[8px] text-blue-900 px-5 py-6">
          <h2 className="text-[20px] font-semibold text-[inherit] mb-2">Total Approval
          vacations</h2>
          <p className="text-[48px] font-bold text-[inherit]">20</p>
        </div>
      </div>

      <div className="">
        <div className="bg-white py-5 px-6 rounded-tl-lg rounded-tr-lg">
          <span className="text-[17px] font-medium">Incoming Requests</span>
          <p className="text-[14px] font-normal">View income vacation requests</p>
        </div>
        <div className="overflow-x-auto bg-white rounded-xl">
          <LeaveRequestTable />
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
