"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Pagination from "./Pagination";
import { BackendUser, DataItem } from "@/types/interfaces";

const DataTable = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:3000/api/users?page=${currentPage}&limit=${itemsPerPage}`
        );
        if (!response.ok) throw new Error("Failed to fetch users");
        const result = await response.json();
        const mappedData = result.data.map((user: BackendUser) => ({
          id: user.id.toString(),
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          phone: user?.phone, // Backend doesn't provide phone, so default to empty
          address1: user?.address1, // Default to empty as backend doesn't provide
          address2: user?.address2, // Default to empty as backend doesn't provide
          phoneFormatted: "", // Default to empty as backend doesn't provide
        }));
        setData(mappedData);
        setTotalItems(result.meta.total);
        setTotalPages(result.meta.pages);
      } catch (err) {
        setError("Error fetching users. Please try again later.");
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, itemsPerPage]);

  const toggleRow = (id: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id);
    } else {
      newExpandedRows.add(id);
    }
    setExpandedRows(newExpandedRows);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
  };

  const handleGoToPage = () => {
    const pageNum = parseInt(goToPage);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
    setGoToPage("");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-500 flex items-center justify-center">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-blue-500 flex items-center justify-center">
        <p className="text-white text-lg">{error}</p>
      </div>
    );
  }



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
                {data.map((item) => (
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