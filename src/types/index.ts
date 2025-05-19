export interface Product {
  id: string;
  name: string;
  sku?: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  image?: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lowStockThreshold?: number;
  forecastedStock?: number;
  forecastedDays?: number;
}

export type SortOrder = 'asc' | 'desc';
export type StockFilter = '' | 'low' | 'out' | 'in'; 