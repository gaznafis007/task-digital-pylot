export interface DataItem {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address1?: string
  address2?: string
  phoneFormatted?: string
}

export interface PaginationProps {
  itemsPerPage: number
  currentPage: number
  totalItems: number
  onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onPageChange: (page: number) => void
  goToPage: string
  onGoToPageChange: (value: string) => void
  onGoToPageSubmit: () => void
}