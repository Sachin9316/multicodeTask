import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Details = () => {
  const navigate = useNavigate();
  const { productId, products } = useContext(AppContext);

  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className='w-full min-h-screen pt-14 '>

      <div className="flex flex-col items-center bg-white shadow-xl hover:shadow-emerald-500 transition-all duration-300 w-[400px] mx-auto justify-center gap-y-4 rounded-lg pb-3">

        <div className='bg-green-500 w-full'>
          <button
            className='bg-green-300 p-2 font-bold'
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        
        <div>
          <h1 className="text-gray-700 font-semibold text-2xl text-[12px] w-50 text-center px-2">
            {product.title}
          </h1>
        </div>

        <div className="h-[280px] w-[280px]" >
          <img
            src={product.image}
            alt="Product Image"
            className="h-full w-full"
          />
        </div>

        <div>
          <p className="w-60 text-gray-400 font-normal text-[14px] text-left">
            {product.description ? product.description.split(" ").slice(0, 20).join(" ") + "..." : "No description available."}
          </p>
        </div>

        <div className="flex justify-center items-center w-full mt-5">
          <p className="text-green-600 font-semibold text-3xl">${Math.floor(product.price * 3)}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
