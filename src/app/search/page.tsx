import { Suspense } from 'react';

import SearchForm from './search-form';
import SearchResults from './search-results';
import SearchResultsWrapper from './search-results-wrapper';

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || '';
  const page = Number(resolvedParams.page) || 1;

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 py-8">
      <SearchForm initialQuery={query} />

      {/* Results Section */}
      {query && (
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
          <SearchResultsWrapper query={query} page={page} />
        </Suspense>
      )}
    </main>
  );
}
