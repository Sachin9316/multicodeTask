import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductById } from "../redux/slices/detailsSlice";

const Details = () => {
  const { id } = useParams();
  const { cart, loading } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.some(item => item.id === parseInt(id))) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch, cart]);

  const product = cart.find(item => item.id === parseInt(id));

  if (loading) return <p className="text-white text-center">Loading...</p>;

  if (!product) {
    return (
      <p className="text-white text-center">
        No Item found.{" "}
        <button onClick={() => navigate("/")} className="bg-red-500 p-2 rounded-lg ml-3">
          Back To Home
        </button>
      </p>
    );
  }

  return (
    <div className='w-full min-h-screen pt-14'>
      <div className="flex flex-col items-center bg-white shadow-xl hover:shadow-emerald-500 transition-all duration-300 w-[400px] mx-auto justify-center gap-y-4 rounded-lg pb-3">
        <div className='bg-green-500 w-full'>
          <button className='bg-green-300 p-2 font-bold' onClick={() => navigate("/")}>
            Back
          </button>
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-2xl text-[12px] w-50 text-center px-2">
            {product.title}
          </h1>
        </div>
        <div className="h-[280px] w-[280px]">
          <img src={product.image} alt="Product Image" className="h-full w-full" />
        </div>
        <div>
          <p className="w-60 text-gray-400 font-normal text-[14px] text-left">
            {product.description ? product.description.split(" ").slice(0, 20).join(" ") + "..." : "No description available."}
          </p>
        </div>
        <div className="flex justify-center items-center w-full mt-5">
          <p className="text-green-600 font-semibold text-3xl"><span>Price: </span>${Math.floor(product.price * 3)}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
