export interface IMember {
  image : string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'Available' | 'Unavailable';
  createdAt: string;
}


export interface IPagination {
  page: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}