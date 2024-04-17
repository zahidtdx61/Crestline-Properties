import useAuth from "../hooks/useAuth";
import useWish from "../hooks/useWish";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWish();
  console.log(wishlist);
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-80px)] mt-8 font-mulish">
      <h1 className="text-3xl font-bold font-mulish text-center">Wishlist</h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {wishlist?.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 rounded-md bg-zinc-100 flex flex-col relative"
          >
            <div className="w-full rounded-md h-[250px] overflow-hidden relative">
              <img
                src={item.image}
                className="w-full h-full object-cover object-center hover:scale-105 duration-1000"
              />
              <div className="capitalize font-semibold text-slate-600 bg-zinc-300 absolute top-4 -left-1 px-5 py-1 rounded text-sm">
                {item.status}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">{item.estate_title}</h1>
              <p className="text-sm font-bold">{item.price}</p>
            </div>
            <p className="text-sm text-gray-500 flex-1">{item.description}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">{item.location}</p>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-opacity-70 hover:scale-105"
                onClick={() => removeFromWishlist(user.uid, item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
