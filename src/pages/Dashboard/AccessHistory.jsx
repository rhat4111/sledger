import React from "react";
import { DataTable, TableCell, TableRow } from "components/Common/Base";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";
import Chrome from "assets/images/icons/chrome.svg";

const AccessHistory = () => {
  const browsers = {
    chrome: {
      icon: Chrome,
      name: "Google Chrome",
    },
  };
  const cols = ["Browser | Device", "IP Address", "Date", "Status"];
  const rows = [
    {
      id: 1,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Success",
    },
    {
      id: 2,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Failed",
    },
    {
      id: 3,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Failed",
    },
    {
      id: 4,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Failed",
    },
    {
      id: 5,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Success",
    },
    {
      id: 6,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Success",
    },
    {
      id: 7,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Success",
    },
    {
      id: 8,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Failed",
    },
    {
      id: 9,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Failed",
    },
    {
      id: 10,
      browser: "chrome",
      ip: {
        domain: "Cluj - Napoca, RO",
        address: "82 . 7968 . 20",
      },
      date: "19th Aug 2021",
      status: "Failed",
    },
  ];

  const renderRow = (row) => {
    return (
      <TableRow className="odd:h-[105px] even:h-20">
        <TableCell>
          <div className="flex justify-center items-center">
            <img src={browsers[row.browser].icon} />
            <span className="ml-5">{browsers[row.browser].name}</span>
          </div>
        </TableCell>
        <TableCell>
          <span>{row.ip.domain}</span>
          <span className="font-light ml-4">{row.ip.address}</span>
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <span
            className={
              row.status === `Success` ? `text-success` : `text-danger`
            }
          >
            {row.status}
          </span>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-1.5 lg:-mx-4 mb-7 lg:mb-9">
        <div className="w-1/2 px-1.5 lg:px-4">
          <BitcoinBusinessCard className="h-25" />
        </div>
        <div className="w-1/2 px-1.5 lg:px-4">
          <CryptoCurrencyCard className="h-25" />
        </div>
      </div>
      <div>
        <div className="mb-6 lg:mb-11">
          <p className="font-semibold text-lg lg:text-[22px] leading-normal mb-0.5 lg:mb-1">
            Access History
          </p>
          <p className="text-[11px] lg:text-[17px] leading-normal opacity-30">
            You are currently accessing StellarLedger from IP address
            82.79.68.20
          </p>
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
              <img src={browsers[row.browser].icon} className="mr-3" alt="" />
              <span className="text-xs">{browsers[row.browser].name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessHistory;
