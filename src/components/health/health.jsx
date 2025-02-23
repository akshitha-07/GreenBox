import React, { useState, useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";
import './health.css';

const Health = () => {
    const { addMultipleToCart, food_list } = useContext(StoreContext);
    const [expandedSection, setExpandedSection] = useState(null);

    // Function to handle section toggle (expand/collapse)
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    // Define all recipes with their ingredient names
    const recipes = {
        breakfast: [
            { name: "Ragi Idli with Palli Chutney", ingredients: ["Ragi flour", "Urad dal", "Fenugreek seeds", "Peanuts", "Dry red chilies", "Garlic", "Tamarind"] },
            { name: "Pesara Dosa with Allam Pachadi", ingredients: ["Green gram (moong dal)", "Ginger", "Green chilies", "Tamarind", "Jaggery", "Mustard seeds"] },
            { name: "Rava Idli with Kobbari Chutney", ingredients: ["Semolina (rava)", "Mustard seeds", "Curry leaves", "Coconut", "Green chilies", "Tamarind"] },
            { name: "Set Dosa with Menthi Chutney", ingredients: ["Poha (flattened rice)", "Urad dal", "Fenugreek seeds", "Tamarind", "Red chilies", "Jaggery"] },
            { name: "Oats Uttapam with Tomato Chutney", ingredients: ["Oats", "Rice flour", "Green chilies", "Onion", "Tomatoes", "Garlic", "Dry red chilies", "Mustard seeds"] },
        ],
        lunch: [
            { name: "Palakura Pappu", ingredients: ["Spinach", "Toor dal", "Green chilies", "Garlic", "Turmeric", "Mustard seeds"] },
            { name: "Menthi Kura Pappu", ingredients: ["Fenugreek leaves", "Toor dal", "Tamarind", "Green chilies", "Mustard seeds"] },
            { name: "Chukkakura Pappu", ingredients: ["Sorrel leaves", "Toor dal", "Tomatoes", "Green chilies", "Garlic"] },
            { name: "Gongura Pappu with Brown Rice", ingredients: ["Sorrel leaves", "Toor dal", "Garlic", "Mustard seeds"] },
            { name: "Vankaya Tomato Kura", ingredients: ["Brinjal", "Tomato", "Onion", "Green chilies", "Mustard seeds"] },
            { name: "Gutti Vankaya Kura with Jowar Roti", ingredients: ["Brinjal", "Onion", "Peanuts", "Tamarind", "Jowar flour"] },
        ],
        dinner: [
            { name: "Pappu Charu with Quinoa Rice", ingredients: ["Toor dal", "Tamarind", "Tomatoes", "Green chilies"] },
            { name: "Ragi Sankati with Mirchi Ka Salan", ingredients: ["Ragi flour", "Green chilies", "Peanuts"] },
            { name: "Tomato Pappu with Brown Rice", ingredients: ["Toor dal", "Tomatoes", "Tamarind", "Green chilies"] },
            { name: "Jonna Rotte with Nuvvula Podi", ingredients: ["Jowar flour", "Sesame seeds", "Dry red chilies"] },
            { name: "Sajja Rotte with Tomato Kura", ingredients: ["Bajra flour", "Tomatoes", "Green chilies", "Curry leaves"] },
        ],
        snacks: [
            { name: "Peanut Butter Banana Bites", ingredients: ["Banana", "Peanut butter", "Chia seeds"] },
            { name: "Frozen Grapes or Mango Cubes", ingredients: ["Grapes or Mango"] },
            { name: "Palli Chikki", ingredients: ["Peanuts", "Jaggery"] },
            { name: "Sarva Pindi", ingredients: ["Rice flour", "Chana dal", "Green chilies", "Sesame seeds", "Curry leaves"] },
            { name: "Saggubiyyam Vadiyalu", ingredients: ["Tapioca pearls", "Green chilies", "Cumin seeds"] },
            { name: "Nuvvula Laddu", ingredients: ["Sesame seeds", "Jaggery"] },
        ]
    };

    // Function to handle adding recipe ingredients to the cart
    const handleAddToCart = (ingredients) => {
        // Convert ingredient names to their IDs from food_list
        const ingredientIDs = ingredients
            .map((ingredient) => {
                const item = food_list.find((food) => food.name === ingredient);
                return item ? item._id : null;
            })
            .filter((id) => id !== null); // Remove null values (if ingredient not found)

        addMultipleToCart(ingredientIDs);
    };

    return (
        <div id="health-section" className="health-section">
            <hr className="section-divider" />
            <h2 className="section-title">Create Your GreenBox</h2>

            {/* Sections for Breakfast, Lunch, Dinner, Snacks */}
            {Object.entries(recipes).map(([section, items]) => (
                <div key={section} className="section">
                    <div className="section-header" onClick={() => toggleSection(section)}>
    <span className="section-title">
        {section.charAt(0).toUpperCase() + section.slice(1)}
    </span>
    <span className={`arrow ${expandedSection === section ? "open" : ""}`}>&#9660;</span>
</div>
                    {expandedSection === section && (
                        <div className="section-content">
                            {items.map((item, index) => (
                                <div key={index} className="recipe">
                                    <h4>{item.name}</h4>
                                    <p>{item.ingredients.join(", ")}</p>
                                    <button onClick={() => handleAddToCart(item.ingredients)}>Add Ingredients to Cart</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Health;
