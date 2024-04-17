import { useContext } from "react";
import { WishlistContext } from "../WishlistProvider/WishlistProvider";

const useWish = () => {
  const all = useContext(WishlistContext);
  return all;
};

export default useWish;
