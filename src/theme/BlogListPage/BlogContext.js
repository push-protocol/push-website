// MyContextProvider.js
// import React, { createContext, useContext, useState } from "react";

// Create a context
// export const BlogContext = createContext();

// React + Web3 Essentials
import React, { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [allBlogFeeds, setAllBlogFeeds] = useState();

  return (
    <BlogContext.Provider value={{ allBlogFeeds, setAllBlogFeeds }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
