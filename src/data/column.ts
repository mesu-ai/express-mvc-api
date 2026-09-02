
export interface ColumnSetting {
  label: string;
  value: string;
  currency?: boolean;
  disabled?: boolean;
  isVisible?: boolean;
}

export const columns: ColumnSetting[] = [
  { label: 'Product ID', value: 'productId' },
  { label: 'Product Name', value: 'productName', disabled: true, isVisible: true },
  { label: 'Shop Name', value: 'shopName', disabled: true, isVisible: true },
  { label: 'SKU', value: 'sku', disabled: true, isVisible: true },
  { label: 'Category', value: 'categoryName', disabled: true, isVisible: true },
  // { label: 'Brand', value: 'brandName', isVisible: true },
  { label: 'DP', value: 'dpPrice', currency: true, disabled: true, isVisible: true },
  { label: 'MRP', value: 'mrp', currency: true, disabled: true, isVisible: true },
  { label: 'Selling Price', value: 'sellingPrice', currency: true, disabled: true, isVisible: true },
  { label: 'Burn', value: 'burn', currency: true, },
  { label: 'Discount', value: 'discount', currency: true },
  { label: 'Commission', value: 'commission', currency: true, isVisible: true },
  { label: 'Display Order', value: 'displayOrder', isVisible: true },
  { label: 'Stock', value: 'stock' },
  { label: 'Warranty Type', value: 'warrantyType' },
  { label: 'Warranty Period', value: 'warrantyPeriod' },
  { label: 'Last Update', value: 'updatedAt' },
  { label: 'Created By', value: 'createdBy' },
  { label: 'Updated By', value: 'updatedBy' },
  { label: 'Review Rating', value: 'reviewRating' },
];
