import React, {createContext, useState} from 'react';

export const BlogDetailContext = createContext();

export const BlogDetailProvider = ({children}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const setBlogItem = item => {
    setSelectedItem(item);
  };

  return (
    <BlogDetailContext.Provider value={{selectedItem, setBlogItem}}>
      {children}
    </BlogDetailContext.Provider>
  );
};
