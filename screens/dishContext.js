import React, { createContext, useContext, useState } from 'react';

const DishesContext = createContext();

export const DishesProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);

  const addDish = (dish) => {
    setDishes((prevDishes) => [...prevDishes, dish]);
  };

  return (
    <DishesContext.Provider value={{ dishes, addDish }}>
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => {
  return useContext(DishesContext);
};
