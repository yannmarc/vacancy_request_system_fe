import { useState } from "react";
import { LeaveTableItem } from "../../interface";
import moment from 'moment'
import { saveLeaveToStorage } from "../../utils/columns";



export const RequestVacationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [comments, setComments] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
    
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageFiles = Array.from(files).filter(file => file.type.startsWith("image/"));
      const readers = imageFiles.map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readers).then(setAttachments);
    }
  };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newLeave: LeaveTableItem = {
        leaveId: `LV-${Math.floor(100 + Math.random() * 900)}`,
        status: "PENDING",
        dateRequested: moment(startDate).toISOString(),
        endDate: moment(endDate).toISOString(),
        dateApproved: null,
        notes: leaveType,
        comment: comments,
        attachments,
      };
  
      saveLeaveToStorage(newLeave);
      onClose();
    };

    
  
    if (!isOpen) return null;
  
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-96 flex items-center justify-center">
        <div className="bg-white p-5 rounded-[16px] shadow w-[546px]">
          <div className="pb-10">
            <h3 className="text-[20px] font-semibold">Request Vacation</h3>
            <p>Fill the form below to request a vacation</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 z-50">
            <input
              type="text"
              placeholder="Type of leave (e.g. Sick Leave)"
              className="border px-[10px] py-4 rounded border-slate-300"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              required
            />
            <input
              type="date"
              className="border px-[10px] py-4 text-gray-700 rounded border-slate-300"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <input
              type="date"
              className="border px-[10px] py-4 text-gray-700 rounded border-slate-300"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
            <input
              type="file"
              className="border px-[10px] py-4 rounded border-slate-300"
                accept="image/*"
                multiple
              onChange={handleFileChange}
              required
            />
            <textarea
              className="border-2 px-[10px] py-4 rounded h-[120px] border-slate-300"
              onChange={(e) => setComments(e.target.value)}
              required
            />
            <div className="flex justify-end gap-3 pt-[27px]">
              <button type="button" onClick={onClose} className="text-gray-600 !bg-gray-100">Cancel</button>
              <button type="submit" className="!bg-blue-500 text-white px-4 py-1 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };