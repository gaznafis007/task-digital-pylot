"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Pagination from "./Pagination";
import { DataItem } from "@/types/interfaces";

const DataTable = () => {
  const data: DataItem[] = [
    {
      id: "0001",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001893",
    },
    {
      id: "0002",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001894",
    },
    {
      id: "0003",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001895",
    },
    {
      id: "0004",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001896",
    },
    {
      id: "0005",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "",
    },
    {
      id: "0006",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001898",
    },
    {
      id: "0007",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001899",
    },
    {
      id: "0008",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001900",
    },
    {
      id: "0009",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001901",
      address1: "779 Reserve Road",
      address2: "Room 1455",
      phoneFormatted: "604-848-8755",
    },
    {
      id: "0010",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "",
    },
  ];

  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState("");

  const toggleRow = (id: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id);
    } else {
      newExpandedRows.add(id);
    }
    setExpandedRows(newExpandedRows);
  };

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = data.slice(startIndex, endIndex);

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleGoToPage = () => {
    const pageNum = parseInt(goToPage);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
    setGoToPage("");
  };

  return (
    <div className="min-h-screen bg-blue-500 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 border-b border-gray-300">
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    <input type="checkbox" className="mr-2" />
                    ID
                    <FaChevronDown className="inline ml-1" />
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    First Name
                    <FaChevronDown className="inline ml-1" />
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    Last Name
                    <FaChevronDown className="inline ml-1" />
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    Email
                    <FaChevronDown className="inline ml-1" />
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    Phone
                    <FaChevronDown className="inline ml-1" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr
                      className="hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                      onClick={() => toggleRow(item.id)}
                    >
                      <td className="px-4 py-3 text-gray-800 text-sm">
                        <input type="checkbox" className="mr-2" />
                        {item.id}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm">
                        {item.firstName}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm">
                        {item.lastName}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm">
                        {item.email}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm">
                        {item.phone}
                      </td>
                    </tr>
                    {expandedRows.has(item.id) && (
                      <tr className="bg-white">
                        <td colSpan={5} className="px-4 py-2">
                          <div className="rounded-md shadow-md overflow-hidden">
                            <table className="w-full">
                              <thead>
                                <tr className="bg-gray-100 text-gray-600 text-sm">
                                  <th className="px-4 py-2 text-left font-medium">
                                    Address 01
                                  </th>
                                  <th className="px-4 py-2 text-left font-medium">
                                    Address 02
                                  </th>
                                  <th className="px-4 py-2 text-left font-medium">
                                    Phone
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white">
                                <tr>
                                  <td className="px-4 py-2 text-gray-600 text-sm">
                                    {item.address1 || "-"}
                                  </td>
                                  <td className="px-4 py-2 text-gray-600 text-sm">
                                    {item.address2 || "-"}
                                  </td>
                                  <td className="px-4 py-2 text-gray-600 text-sm">
                                    {item.phoneFormatted || "-"}
                                  </td>
                                </tr>
                                {!item.address1 &&
                                  !item.address2 &&
                                  !item.phoneFormatted && (
                                    <tr>
                                      <td
                                        colSpan={3}
                                        className="px-4 py-2 text-gray-600 text-sm text-center"
                                      >
                                        No data to show
                                      </td>
                                    </tr>
                                  )}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={totalItems}
            onItemsPerPageChange={handleItemsPerPageChange}
            onPageChange={setCurrentPage}
            goToPage={goToPage}
            onGoToPageChange={setGoToPage}
            onGoToPageSubmit={handleGoToPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
