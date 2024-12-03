import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/detailsSlice";

const Products = ({ item }) => {
  const { image, title, category, price, id } = item;
  const newTitle = title.split(' ').slice(0, 6).join(' ');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(id));
    navigate(`/product/${id}`);
  };

  return (
    <tr className="border-b border-gray-300 hover:bg-gradient-to-r from-red-500 to-indigo-500 hover:text-white hover:shadow-orange-800 shadow-md">
      <td className="p-2">
        <img
          src={image}
          alt={title}
          className="w-[30px] h-10 object-contain"
          loading="lazy"
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
  );
};

export default Products;
