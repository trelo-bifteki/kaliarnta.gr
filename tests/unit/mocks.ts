import { Keyword } from '@/types/keyword';

export const qaRef = (value: string): string => `[qa-ref=${value}]`;

export const createKeyword = (): Keyword => ({
  keyword: 'test',
});
