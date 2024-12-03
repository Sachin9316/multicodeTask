import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../redux/slices/detailsSlice";
import Products from "./Products";

const HeroSection = () => {
  const { posts } = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="w-full pt-10 pb-10">
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
          <tbody>
            {posts.map((item, index) => (
              <Products key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HeroSection;
