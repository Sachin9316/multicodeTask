import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Products = ({ item }) => {
  const { image, title, category, price, id } = item;
  const newTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;

  const navigate = useNavigate()
  const { setProductsId } = useContext(AppContext)

  function handleClick() {
    navigate("/home");
    setProductsId(id);
  }

  return (
    <tr className="border-b border-gray-300 hover:bg-gradient-to-r from-red-500 to-indigo-500 hover:text-white dursmation-300 hover:shadow-orange-800 shadow-md">
      <td className="p-2">
        <img
          src={image}
          alt={title}
          className="w-[30px] h-10 object-contain"
        />
      </td>
      <td className="p-2 ">{newTitle}</td>
      <td className="p-2">${Math.floor(price * 3)}</td>
      <td className="p-2 uppercase">{category}</td>
      <td className="p-2">
        <button
          onClick={handleClick}
          className="text-white hover:bg-red-700 px-4 py-2 rounded-full"
        >
          View
        </button>
      </td>
    </tr>
  )
}

export default Products;
