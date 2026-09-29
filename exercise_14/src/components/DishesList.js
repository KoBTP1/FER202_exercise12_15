import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
  },
];

function DishesList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h4 className="mb-3">DishesList</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {dishes.map((dish) => (
          <li key={dish.id} className="mb-4">
            <div>
              <strong>{dish.name}</strong> - ${dish.price}
            </div>
            <p className="mb-2">{dish.description}</p>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(dish)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DishesList;
