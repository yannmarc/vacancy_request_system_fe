import { JSX } from "react";
import { publicHolidays } from "../../consts";
import { PublicHoliday } from "../../interface";

const HolidayDays = ({ title, eventDate, eventName }: PublicHoliday): JSX.Element => {
  return (
    <div className="flex justify-between text-[inherit] items-center text-left pb-5 border-b-2 border-gray-100">
      <div>
        <span className="block text-[14px] font-medium">{eventDate}</span>
        <span className="block text-[10px]">{eventName}</span>
      </div>
      <p className="block text-[15px] font-medium max-w-[120px] text-right">{title}</p>
    </div>
  );
};

export const HolidayCard = (): JSX.Element => {
  return (
    <div className="p-5 border-2 w-[30%] text-slate-900 border-slate-100 rounded-lg bg-white space-y-5">
      <h2 className="text-left text-[20px] font-medium">Upcoming public holidays</h2>
      {publicHolidays.map((holiday, index) => (
        <HolidayDays key={index} {...holiday} />
      ))}
    </div>
  );
};
