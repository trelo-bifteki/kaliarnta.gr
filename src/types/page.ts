export interface Page<T> {
  totalPages: number;
  totalElements: number;
  content: T[];
  number: number;
  size: number;
}
