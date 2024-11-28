"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchResult from "./SearchResult";

const Search = ({ docs = [] }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const router = useRouter();

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    doSearch(value);
  };

  // Debounced search function
  const doSearch = useDebounce((searchTerm) => {
    const results = docs.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(results);
  }, 500);

  // Navigate and reset search
  const closeSearchResults = (event) => {
    event.preventDefault();
    router.push(event.target.href);
    setTerm("");
  };

  return (
    <>
      <div className="lg:block lg:max-w-md lg:flex-auto">
        <div className="focus:[&:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex">
          <Image
            src="/search.svg"
            alt="Search"
            className="h-5 w-5"
            width={20}
            height={20}
          />
          <input
            type="text"
            value={term}
            placeholder="Search..."
            onChange={handleChange}
            className="flex-1 focus:border-none focus:outline-none"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Render search results */}
      {term.trim() && (
        <SearchResult
          results={searchResult}
          term={term}
          closeSearchResults={closeSearchResults}
        />
      )}
    </>
  );
};

export default Search;
