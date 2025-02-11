import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    /*const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:[itemId]+1}))
        }
    }*/

        const addToCart = (itemId) => {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: (prev[itemId] || 0) + 1,  // Fixed increment logic
            }));
        };

    /*const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }*/


        const removeFromCart = (itemId) => {
            setCartItems((prev) => {
                if (!prev[itemId]) return prev; // If item not in cart, do nothing
                const updatedCart = { ...prev };
                updatedCart[itemId] -= 1;
                if (updatedCart[itemId] === 0) delete updatedCart[itemId]; // Remove if count reaches 0
                return updatedCart;
            });
        };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }
    

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider