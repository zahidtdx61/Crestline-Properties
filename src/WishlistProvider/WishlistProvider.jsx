import PropTypes from "prop-types";
import { createContext } from "react";
import { addToWishlist, deleteFromWishlist } from "../utils";

export const WishlistContext = createContext(null);

const markWishlist = (user_id, property) => {
  console.log('added',user_id, property);
  addToWishlist(user_id, property);
};

const removeFromWishlist = (user_id, property) => {
  console.log('removed',user_id, property);
  deleteFromWishlist(user_id, property);
};

const wishlistData = {
  markWishlist,
  removeFromWishlist,
};

const WishlistProvider = ({ children }) => {
  return (
    <WishlistContext.Provider value={wishlistData}>
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WishlistProvider;
