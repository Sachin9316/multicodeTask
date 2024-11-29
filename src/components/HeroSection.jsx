import { useContext } from "react";
import Products from "./Products";
import { AppContext } from "../context/AppContext";


const HeroSection = () => {

  const { products, loading } = useContext(AppContext);

  return (
    <div className="w-full pt-10 pb-10">
      {
        loading ? <p>Loading...</p> : (
          <div className="text-white flex flex-col items-center w-full">
            <table className="w-[570px] border-collapse">
              <thead>
                <tr className="bg-green-700 text-white p-3">
                  <th className="p-2 text-left">Image</th>
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Price</th>
                  <th className="p-2 text-left">Category</th>
                  <th className="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>{
                products.map((item, index) => (
                  <Products key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        )}
    </div>
  )
}

export default HeroSection