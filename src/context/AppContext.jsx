import { createContext, useEffect, useState } from "react";
import baseUrl from "../baseUrl";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [productId, setProductsId] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const value = {
    productId,
    setProductsId,
    loading,
    products,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}