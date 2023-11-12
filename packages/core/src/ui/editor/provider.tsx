'use client';

import { createContext } from 'react';

export const NovelContext = createContext<{
  completionApi: string;
  completionId: string;
}>({
  completionApi: '/api/generate',
  completionId: 'novel',
});
