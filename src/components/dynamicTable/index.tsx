import { useNavigate } from "react-router";

type TableColumn<T> = {
  key: keyof T;
  label: string;
  format?: (value: unknown, row: T) => React.ReactNode;
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
};

export const DynamicTable = <T extends object>({ columns, data }: TableProps<T>) => {
  const navigate = useNavigate()
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {columns.map((col) => (
              <th key={col.key as string} className="px-4 py-3 text-left text-sm font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              {columns.map((col) => {
                const rawValue = row[col.key];
                const cellContent = col.format
                  ? col.format(rawValue, row)
                  : String(rawValue); 

                return (
                  <td key={col.key as string} onClick={() => navigate(`/request-request/${rawValue}`)} className="px-4 py-3 text-sm text-slate-700">
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
