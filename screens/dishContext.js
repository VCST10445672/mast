import React, { createContext, useContext, useState } from 'react';    //The IIE, 2024

const DishesContext = createContext();

export const DishesProvider = ({ children }) => {   //The IIE, 2024
  const [dishes, setDishes] = useState([]);

  const addDish = (dish) => {
    setDishes((prevDishes) => [...prevDishes, dish]);
  };

  return (    //The IIE, 2024
    <DishesContext.Provider value={{ dishes, addDish }}>
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => {    //The IIE, 2024
  return useContext(DishesContext);
};
