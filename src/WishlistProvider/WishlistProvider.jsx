import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { addToWishlist, deleteFromWishlist } from "../utils";

export const WishlistContext = createContext(null);



const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    const data = user ? JSON.parse(localStorage.getItem(user?.uid)) : null;
    if (data) {
      setWishlist(data);
    }else{
      setWishlist(null);
    }
  }, [user]);

  const markWishlist = (user_id, property) => {
    console.log("added", user_id, property);
    addToWishlist(user_id, property);
    const data = JSON.parse(localStorage.getItem(user?.uid));
    if (data) {
      setWishlist(data);
    }
  };
  
  const removeFromWishlist = (user_id, property) => {
    console.log("removed", user_id, property);
    deleteFromWishlist(user_id, property);
    const data = JSON.parse(localStorage.getItem(user?.uid));
    if (data) {
      setWishlist(data);
    }
  };

  const wishlistData = {
    markWishlist,
    removeFromWishlist,
    wishlist,
  };

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
