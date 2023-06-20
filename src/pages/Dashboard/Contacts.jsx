import React, { useState } from "react";
import { Button, DataTable, TableCell, TableRow } from "components/Common/Base";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";
import AddContact from "components/Modal/AddContact";
import DeleteContact from "components/Modal/DeleteContact";
import EditContact from "components/Modal/EditContact";

import User from "assets/images/user/3.png";
import Copy from "assets/images/icons/copy-address.svg";
import PlusIcon from "assets/images/icons/plus.svg";
import TrashIcon from "assets/images/icons/trash.svg";
import SearchField from "components/Common/SearchField";

const Contacts = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [key, setKey] = useState("");
  const cols = ["User Name", "Wallet Address", "Status"];
  const rows = [
    {
      id: 1,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 2,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 3,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 4,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 5,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 6,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 7,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 8,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 9,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
    {
      id: 10,
      user: "Rania Ahmed",
      wallet: "GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS",
    },
  ];

  const renderRow = (row) => {
    return (
      <TableRow className="odd:h-[105px] even:h-20">
        <TableCell>
          <div className="flex justify-center items-center">
            <img src={User} />
            <span className="font-semibold text-[17px] ml-6">{row.user}</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex justify-center items-center">
            <span className="font-semibold text-[17px] mr-8">{row.wallet}</span>
            <img
              src={Copy}
              className="opacity-100 hover:opacity-60 cursor-pointer transition-all"
            />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex justify-center -mx-2.5">
            <Button
              className="!w-14 mx-2.5"
              color="danger"
              onClick={handleToggleDeleteModal}
            >
              <img src={TrashIcon} />
            </Button>
            <Button
              className="!w-[100px] font-normal mx-2.5"
              color="transparent"
              onClick={handleToggleEditModal}
            >
              Edit
            </Button>
            <Button className="!w-[100px] font-normal mx-2.5" color="success">
              Receive
            </Button>
            <Button className="!w-[100px] font-normal mx-2.5">Send</Button>
          </div>
        </TableCell>
      </TableRow>
    );
  };
  const handleToggleAddModal = () => setIsOpenAddModal(!isOpenAddModal);
  const handleToggleEditModal = () => setIsOpenEditModal(!isOpenEditModal);
  const handleToggleDeleteModal = () =>
    setIsOpenDeleteModal(!isOpenDeleteModal);

  return (
    <>
      <div>
        <div className="flex flex-wrap -mx-1.5 lg:-mx-4 mb-7 lg:mb-9">
          <div className="w-1/2 px-1.5 lg:px-4">
            <BitcoinBusinessCard className="h-25" />
          </div>
          <div className="w-1/2 px-1.5 lg:px-4">
            <CryptoCurrencyCard className="h-25" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-[22px] lg:mb-11">
          <div className="mb-[18px] lg:mb-0">
            <p className="font-semibold text-lg lg:text-[22px] mb-1">
              Contacts
            </p>
            <p className="text-[11px] lg:text-[17px] opacity-30">
              View your contacts and make transactions
            </p>
          </div>
          <div className="w-full lg:w-auto flex items-center relative">
            <SearchField
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Search Contacts"
            />
            <Button
              className="!w-12 lg:!w-53 ml-[27px] right-0 lg:right-auto bottom-[68px] lg:bottom-auto !absolute lg:!relative flex-shrink-0"
              size="large"
              onClick={handleToggleAddModal}
            >
              <img src={PlusIcon} />
              <span className="ml-[18px] hidden lg:block">Add Contact</span>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <DataTable rows={rows} cols={cols} renderRow={renderRow} />
        </div>
        <div className="block lg:hidden">
          {rows.map((row) => (
            <div
              key={row.id}
              className="h-12 flex items-center rounded-[5px] px-3 mb-[14px] last:mb-0 border border-input-border dark:border-0 dark:bg-card-dark"
            >
              <img src={User} className="mr-3" alt="" />
              <span className="text-xs">{row.user}</span>
            </div>
          ))}
        </div>
      </div>
      <AddContact show={isOpenAddModal} onClose={handleToggleAddModal} />
      <DeleteContact
        show={isOpenDeleteModal}
        onClose={handleToggleDeleteModal}
      />
      <EditContact show={isOpenEditModal} onClose={handleToggleEditModal} />
    </>
  );
};

export default Contacts;
