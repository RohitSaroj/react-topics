import { Suspense, useContext, useEffect, useMemo, useState } from "react";
import Context from "../context/provider";
import "./Practice.css";
import InfiniteLoading from "./InfiniteLoading";
import RequestAnimationFrameDemo from "./RequestAnimationFrameDemo";

type Book = {
  cover_i: number;
  author_key: number[];
  title: string;
};

const Practice = () => {
  const { contextValue } = useContext(Context);

  useEffect(() => dsaPractice(), []);

  const dsaPractice = () => {
    // const longestSubarraySumLessThanK = (arr, k) => {};
    // console.log(longestSubarraySumLessThanK([-1, 1, 5, 0, 5, -2, 9], 10));
  };

  const fetchBooks = async (query: string) => {
    const res = await fetch(
      `https://dummyjson.com/recipes/search?select=id,name&q=${query}`
    );
    const data = await res.json();
    // const formattedData = data.docs.map((book: Book, idx: number) => ({
    //   id: `${book.cover_i}-${book.author_key[0]}-${idx}`,
    //   name: book.title,
    // }));
    return data.recipes;
  };

  return (
    <Suspense fallback="Loading...">
      <div>
        <h3>Practice Component:</h3>
        {contextValue}
        <RequestAnimationFrameDemo />
      </div>
    </Suspense>
  );
};

export default Practice;
