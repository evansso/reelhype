'use client';

import { Suspense } from 'react';

import SearchResults from './search-results';

interface SearchResultsWrapperProps {
  query: string;
  page: number;
}

export default function SearchResultsWrapper({
  query,
  page,
}: SearchResultsWrapperProps) {
  return (
    <Suspense
      fallback={
        <div className="grid animate-pulse grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-[2/3] rounded-lg bg-gray-200 dark:bg-gray-800"
            />
          ))}
        </div>
      }
    >
      <SearchResults query={query} page={page} />
    </Suspense>
  );
}