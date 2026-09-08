
export interface ColumnSetting {
  label: string;
  value: string;
  currency?: boolean;
  disabled?: boolean;
  isVisible?: boolean;
  type: string;
}


export const columns: ColumnSetting[] = [
  { label: "Product ID", value: "productId", type: "product" },
  {
    label: "Product Name",
    value: "productName",
    disabled: true,
    isVisible: true,
    type: "product",
  },
  {
    label: "Shop Name",
    value: "shopName",
    disabled: true,
    isVisible: true,
    type: "product",
  },
  {
    label: "SKU",
    value: "sku",
    disabled: true,
    isVisible: true,
    type: "product",
  },
  {
    label: "Category",
    value: "categoryName",
    disabled: true,
    isVisible: true,
    type: "product",
  },
  { label: "Brand", value: "brandName", isVisible: true, type: "product" },
  {
    label: "DP",
    value: "dpPrice",
    currency: true,
    disabled: true,
    isVisible: true,
    type: "product",
  },
  {
    label: "MRP",
    value: "mrp",
    currency: true,
    disabled: true,
    isVisible: true,
    type: "product",
  },
  {
    label: "Selling Price",
    value: "sellingPrice",
    currency: true,
    disabled: true,
    isVisible: true,
    type: "product",
  },
  { label: "Burn", value: "burn", currency: true, type: "product" },
  { label: "Discount", value: "discount", currency: true, type: "product" },
  {
    label: "Commission",
    value: "commission",
    currency: true,
    isVisible: true,
    type: "product",
  },
  {
    label: "Display Order",
    value: "displayOrder",
    isVisible: true,
    type: "product",
  },
  { label: "Stock", value: "stock", type: "product" },
  { label: "Warranty Type", value: "warrantyType", type: "product" },
  { label: "Warranty Period", value: "warrantyPeriod", type: "product" },
  { label: "Last Update", value: "updatedAt", type: "product" },
  { label: "Created By", value: "createdBy", type: "product" },
  { label: "Updated By", value: "updatedBy", type: "product" },
  { label: "Review Rating", value: "reviewRating", type: "product" },

  {
    label: "Order No",
    value: "orderNo",
    disabled: true,
    isVisible: true,
    type: "order",
  },
  {
    label: "Customer Name",
    value: "customerName",
    disabled: true,
    isVisible: true,
    type: "order",
  },
  { label: "Mobile No", value: "mobileNo", isVisible: true, type: "order" },
  {
    label: "Order Date & Time",
    value: "orderDateTime",
    disabled: true,
    isVisible: true,
    type: "order",
  },
  {
    label: "Total",
    value: "total",
    currency: true,
    disabled: true,
    isVisible: true,
    type: "order",
  },
  {
    label: "Payment Method",
    value: "paymentMethod",
    disabled: true,
    isVisible: true,
    type: "order",
  },
  {
    label: "Payment Status",
    value: "paymentStatus",
    disabled: true,
    isVisible: true,
    type: "order",
  },
  { label: "Quantity", value: "quantity", type: "order" },
  { label: "Transaction Date", value: "transactionDate", type: "order" },
  { label: "Courier Name", value: "courierName", type: "order" },
];