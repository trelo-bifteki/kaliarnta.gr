import { Keyword } from '@/types/keyword';
import { Page } from '@/types/page';

export const qaRef = (value: string): string => `[qa-ref=${value}]`;

export const createKeyword = (): Keyword => ({
  keyword: 'test',
});

export const createPage = <T>(element: T): Page<T> => ({
  content: [ element ],
  number: 1,
  size: 1,
  totalElements: 1,
  totalPages: 1,
});
