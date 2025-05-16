"use client"

import { PaginationProps } from "@/types/interfaces"
import { FaChevronRight } from "react-icons/fa"



const Pagination = ({
  itemsPerPage,
  currentPage,
  totalItems,
  onItemsPerPageChange,
  onPageChange,
  goToPage,
  onGoToPageChange,
  onGoToPageSubmit,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const renderPagination = () => {
    const pages = []
    const maxButtons = 5
    let startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(totalPages, startPage + maxButtons - 1)

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1)
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          className={`h-8 w-8 flex items-center justify-center rounded border border-gray-300 text-sm ${
            currentPage === 1 ? "bg-blue-500 text-white" : "bg-white text-gray-600"
          }`}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      )
      if (startPage > 2) {
        pages.push(<span key="start-ellipsis" className="px-1 text-gray-600">...</span>)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`h-8 w-8 flex items-center justify-center rounded border border-gray-300 text-sm ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-white text-gray-600"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="end-ellipsis" className="px-1 text-gray-600">...</span>)
      }
      pages.push(
        <button
          key={totalPages}
          className={`h-8 w-8 flex items-center justify-center rounded border border-gray-300 text-sm ${
            currentPage === totalPages ? "bg-blue-500 text-white" : "bg-white text-gray-600"
          }`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      )
    }

    return pages
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-t border-gray-300">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Rows per page:</span>
        <select
          value={itemsPerPage}
          onChange={onItemsPerPageChange}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      <div className="flex items-center gap-1">
        {renderPagination()}
        <button
          className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 text-sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex items-center gap-1 text-sm">
        <span className="text-gray-600">Go to page</span>
        <input
          type="text"
          value={goToPage}
          onChange={(e) => onGoToPageChange(e.target.value)}
          className="w-12 border-b border-gray-400 text-gray-800 text-sm focus:outline-none"
        />
        <button onClick={onGoToPageSubmit}>
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  )
}

export default Pagination