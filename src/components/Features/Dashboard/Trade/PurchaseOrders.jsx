import React from "react";
import { DataTable, TableCell, TableRow } from "components/Common/Base";

const PurchaseOrders = () => {
  const cols = [
    { id: 1, label: "Price", unit: "USD" },
    { id: 2, label: "Amount", unit: "XLM" },
    { id: 3, label: "Total", unit: "USD" },
  ];
  const rows = [
    { id: 1, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 2, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 3, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 4, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 5, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 6, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 7, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 8, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 9, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 10, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
    { id: 11, price: 0.115847, amount: 119.9283712, total: 13.8115847 },
  ];

  const renderCols = (cols) => {
    return (
      <TableRow>
        {cols.map((col) => (
          <TableCell key={col.id}>
            <div className="font-normal text-xxs lg:text-base dark:opacity-70">
              <span className="text-white">{col.label}</span>
              <span className="text-[#BFBFBF] dark:text-[#A6ACD2] ml-1">
                {col.unit}
              </span>
            </div>
          </TableCell>
        ))}
      </TableRow>
    );
  };

  const renderRow = (row) => {
    return (
      <TableRow>
        <TableCell>
          <span className="text-success">{row.price}</span>
        </TableCell>
        <TableCell>{row.amount}</TableCell>
        <TableCell>{row.total}</TableCell>
      </TableRow>
    );
  };

  return (
    <div className="h-full bg-card-light dark:bg-card-dark p-5 lg:px-8 lg:py-7">
      <p className="hidden lg:flex font-semibold text-[22px] leading-normal mb-11">
        Purchase Orders
      </p>
      <DataTable
        rows={rows}
        cols={cols}
        renderRow={renderRow}
        renderCols={renderCols}
      />
    </div>
  );
};

export default PurchaseOrders;
