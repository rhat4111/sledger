import React, { useState } from "react";
import { Button, DataTable, TableCell, TableRow } from "components/Common/Base";
import BitcoinBusinessCard from "components/Common/BitcoinBusinessCard";
import CryptoCurrencyCard from "components/Common/CryptoCurrencyCard";

import BTC from "assets/images/coin/btc.png";
import ETH from "assets/images/coin/eth.png";
import LTC from "assets/images/coin/ltc.png";
import User from "assets/images/user/3.png";
import Copy from "assets/images/icons/copy-address.svg";
import TrashIcon from "assets/images/icons/trash.svg";
import SearchField from "components/Common/SearchField";
import { commaNumber } from "utils";

const Market = () => {
  const coins = {
    btc: {
      name: "Bitcoin",
      unit: "BTC",
      avatar: BTC,
    },
    eth: {
      name: "Ethereum",
      unit: "ETH",
      avatar: ETH,
    },
    ltc: {
      name: "LiteCoin",
      unit: "LTC",
      avatar: LTC,
    },
  };
  const [key, setKey] = useState("");
  const cols = [
    "Coin Name",
    "Price",
    "24H Change",
    "24H Volume",
    "Market Cap",
    "Balance",
    "",
  ];
  const rows = [
    {
      id: 1,
      coin: "btc",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 8384,
    },
    {
      id: 2,
      coin: "eth",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 8384,
    },
    {
      id: 3,
      coin: "ltc",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 8384,
    },
    {
      id: 4,
      coin: "btc",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 0,
    },
    {
      id: 5,
      coin: "eth",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 0,
    },
    {
      id: 6,
      coin: "ltc",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 0,
    },
    {
      id: 7,
      coin: "btc",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 0,
    },
    {
      id: 8,
      coin: "eth",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 0,
    },
    {
      id: 9,
      coin: "ltc",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 0,
    },
    {
      id: 10,
      coin: "btc",
      price: 21843,
      "24hChange": 0.11,
      "24hVolume": 206.83,
      marketCap: 400.83,
      balance: 0,
    },
  ];

  const renderRow = (row, index) => {
    const coin = coins[row.coin];
    return (
      <TableRow
        className={`odd:h-[105px] even:h-20 ${
          (index === 0 || index === 2) && `bg-[#511B8656]`
        } ${index === 1 && `!bg-[#511B8690]`}`}
      >
        <TableCell>
          <div className="flex items-center px-10">
            <img src={coin.avatar} className="w-6 h-6 mr-[14px]" />
            <p className="text-[17px]">
              <span className="font-semibold">{coin.unit}</span>
              <span className="font-light ml-5 mr-[14px] opacity-70">|</span>
              <span className="font-light opacity-70">{coin.name}</span>
            </p>
          </div>
        </TableCell>
        <TableCell>{commaNumber(row.price, 0)} USD</TableCell>
        <TableCell>
          <span className="text-success">
            {commaNumber(row["24hChange"], 2)} %
          </span>
        </TableCell>
        <TableCell>$ {commaNumber(row["24hVolume"], 2)} M</TableCell>
        <TableCell>$ {commaNumber(row.marketCap, 2)} B</TableCell>
        <TableCell>
          {row.balance > 0 ? (
            <span className="inline-flex justify-center items-center w-[100px] h-[50px] rounded-lg bg-[#4395DC40] font-roboto text-[19px] text-[#A3CBFF]">
              $ {commaNumber(row.balance, 0)}
            </span>
          ) : (
            ``
          )}
        </TableCell>
        <TableCell>
          <div className="flex justify-center -mx-2.5">
            <Button
              className="!w-[100px] font-normal mx-2.5"
              color="transparent"
            >
              Send
            </Button>
            <Button className="!w-[100px] font-normal mx-2.5" color="success">
              Trade
            </Button>
          </div>
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
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-[22px] lg:mb-11">
        <div className="mb-[18px] lg:mb-0">
          <p className="font-semibold text-lg lg:text-[22px] mb-1">
            StellerLedger Market
          </p>
          <p className="text-[11px] lg:text-[17px] opacity-30">
            Check our crypto market for latest updates
          </p>
        </div>
        <div className="w-full lg:w-auto flex items-center relative">
          <SearchField
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Search CryptoCoin"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <DataTable rows={rows} cols={cols} renderRow={renderRow} />
      </div>
      <div className="block lg:hidden">
        {rows.map((row) => {
          const coin = coins[row.coin];
          return (
            <div
              className="h-12 flex items-center rounded-[5px] px-3 mb-[14px] last:mb-0 border border-input-border dark:border-0 dark:bg-card-dark"
              key={row.id}
            >
              <img src={coin.avatar} className="w-6 h-6 mr-[14px]" />
              <p className="text-xs">
                <span>{coin.unit}</span>
                <span className="mx-2 opacity-70">|</span>
                <span>{coin.name}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Market;
