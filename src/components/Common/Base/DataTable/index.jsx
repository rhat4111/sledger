import React from "react";
import Cell from "./Cell";
import Row from "./Row";

const DataTable = ({
  rows,
  cols,
  renderRow,
  renderCols,
  className,
  headerCellClassName,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <table className="w-full border-0 relative">
        <thead className="h-14 lg:h-20 bg-[#4C4C4C] dark:bg-[#434A77]">
          {!renderCols ? (
            <tr>
              {cols.map((col, index) => (
                <th
                  className={`h-12 font-normal text-xxs lg:text-[19px] text-white dark:text-[#FFFFFF72] ${headerCellClassName}`}
                  key={index}
                >
                  {col}
                </th>
              ))}
            </tr>
          ) : (
            <>{renderCols(cols)}</> 
          )}
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <React.Fragment key={index}>{renderRow(row, index)}</React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
export { Cell, Row };
