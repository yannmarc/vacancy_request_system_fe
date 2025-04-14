import { HolidayCard } from '../../components/holidayCard'
import { LeaveCard } from '../../components/leaveCard'
import { LeaveTable } from '../../components/leaveTable'
import { useEffect, useState } from 'react'
import { Leave } from '../../interface'
import { getStoredLeaves, TOTAL_AVAILABLE_LEAVES } from '../../utils/columns'

export const EmployeeDashboard: React.FC = () => {

  const [leaveCardinality, setLeaveCardinality] = useState<Leave[]>([]);

  useEffect(() => {
    const allLeaves = getStoredLeaves();
    const approved = allLeaves.filter(l => l.status === "APPROVED").length;
    const rejected = allLeaves.filter(l => l.status === "REJECTED").length;
    const pending = allLeaves.filter(l => l.status === "PENDING").length;
    const totalAvailable =  TOTAL_AVAILABLE_LEAVES - approved

    setLeaveCardinality([
      { title: "Total Available Leaves", cardinality: totalAvailable, status: "NEUTRAL" },
      { title: "Total Approved Leaves", cardinality: approved, status: "APPROVED" },
      { title: "Total Rejected Leaves", cardinality: rejected, status: "REJECTED" },
      { title: "Total Pending Leaves", cardinality: pending, status: "PENDING" }
    ]);
  }, [])

  return (
    <>
      <div className='bg-slate-50 h-full pb-10 relative'>
          <div className="max-w-[1124px] my-0 mx-auto">
            <div className="flex flex-col gap-5 py-[52px]">
              <h3 className='font-medium text-[22px]'>Welcome John Doe</h3>
              <div className="flex justify-between gap-5">
                {leaveCardinality.map(leave => (
                  <LeaveCard 
                    key={leave.title}
                    title={leave.title}
                    cardinality={leave.cardinality}
                    status={leave.status}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-5">
              <LeaveTable />
              <HolidayCard />
            </div>
          </div>
        </div>
    </>
  )
}

export default EmployeeDashboard;