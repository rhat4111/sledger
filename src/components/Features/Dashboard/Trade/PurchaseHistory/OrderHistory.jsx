import React from "react";
import { Button, DataTable, TableCell, TableRow } from "components/Common/Base";
import Tag from "./Tag";

const OrderHistory = () => {
  const cols = [
    "Selling / Buying",
    "Amount - XLM",
    "Price - USD",
    "Total - USD",
  ];
  const rows = [
    {
      id: 1,
      type: "Selling",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
    {
      id: 2,
      type: "Buying",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
    {
      id: 3,
      type: "Selling",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
    {
      id: 4,
      type: "Buying",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
    {
      id: 5,
      type: "Selling",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
    {
      id: 6,
      type: "Buying",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
    {
      id: 7,
      type: "Selling",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
    {
      id: 8,
      type: "Buying",
      price: 0.115847,
      amount: 119.9283712,
      total: 13.8115847,
    },
  ];

  const renderRow = (row) => {
    return (
      <TableRow className="odd:h-[88px] even:h-16">
        <TableCell>
          <Tag
            label={row.type}
            color={row.type === `Buying` ? `success` : `danger`}
          />
        </TableCell>
        <TableCell>{row.amount}</TableCell>
        <TableCell>{row.price}</TableCell>
        <TableCell>{row.total}</TableCell>
      </TableRow>
    );
  };

  return (
    <>
      <div className="w-full hidden lg:flex">
        <DataTable rows={rows} cols={cols} renderRow={renderRow} />
      </div>
      <div className="block lg:hidden">
        {rows.map((row) => (
          <div className="flex items-center justify-between mb-3 border border-input-border dark:border-0 dark:bg-card-dark rounded-[5px] text-xs p-3">
            <Tag
              label={row.type}
              color={row.type === `Buying` ? `success` : `danger`}
            />
            <span>Buying Order</span>
            <p>
              {row.amount} <span className="text-[#C0C0C0]">USD</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderHistory;
