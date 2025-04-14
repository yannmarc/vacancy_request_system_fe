import { Leave } from "../../interface";

export const LeaveCard = ({ title, cardinality, status }: Leave) => {
  const baseClasses =
    "flex justify-between items-center px-5 rounded-[8px] py-[32px] gap-10";

  const statusStyles: Record<string, string> = {
    APPROVED: "bg-blue-50 text-blue-900",
    REJECTED: "bg-red-50 text-red-800",
    PENDING: "bg-white text-gray-800",
    NEUTRAL: "bg-green-50 text-green-800",
  };

  const cardClass = `${baseClasses} ${
    statusStyles[status] ?? "bg-white text-slate-800"
  }`;

  return (
    <div className={cardClass}>
      <span className="block text-[18px] font-medium">{title}</span>
      <div className="flex flex-col justify-center">
        <span className="block text-center text-3xl font-bold">{cardinality}</span>
        <span>Days</span>
      </div>
    </div>
  );
};
