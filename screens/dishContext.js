import React, { createContext, useContext, useState } from 'react';    //save

const DishesContext = createContext();

export const DishesProvider = ({ children }) => {    //save
  const [dishes, setDishes] = useState([]);

  const addDish = (dish) => {
    setDishes((prevDishes) => [...prevDishes, dish]);
  };

  return (    //The IIE
    <DishesContext.Provider value={{ dishes, addDish }}>
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => {    //The IIE
  return useContext(DishesContext);
};
