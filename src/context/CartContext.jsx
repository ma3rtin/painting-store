import { createContext, useState, useEffect } from "react";
import {
  fetchPaintings,
  createPainting,
  updatePainting,
  deletePainting,
} from "../api/MockApi";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paintings, setPaintings] = useState([]);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({ page: 1, limit: 6 });

  useEffect(() => {
  fetchPaintings()
    .then((data) => {
      setLoading(false);
      if (data) {
        setPaintings(data);
        setPagination((prev) => ({
          ...prev,
          totalPages: Math.ceil(data.length / prev.limit),
        }));
      } else {
        setError("Failed to fetch data");
      }
    })
    .catch(() => {
      setLoading(false);
      setError("Failed to fetch data");
    });
}, []);

 const filteredPaintings = paintings.filter((painting) =>
  painting.title.toLowerCase().includes(search.toLowerCase())
);

const totalPages = Math.max(1, Math.ceil(filteredPaintings.length / pagination.limit));

const paginatedPaintings = filteredPaintings.slice(
  (pagination.page - 1) * pagination.limit,
  pagination.page * pagination.limit
);

const handlePaginationChange = (page) => {
  if (page < 1 || page > totalPages) return;
  setPagination((prev) => ({
    ...prev,
    page,
  }));
};

  const handleAddToCart = (painting) => {
    if (!cart.some((item) => item.id === painting.id)) {
      setCart([...cart, painting]);
      toast.success(` "${painting.title}" added to your cart.`, {
        position: "top-right",
        autoClose: 2500,
      });
    } else {
      toast.warning(`"${painting.title}" is already in your cart.`, {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const handleClearCart = () => {
    setCart([]);
  };
  const handleCalculateTotal = () => {
    const total = cart.map((acc, item) => acc + item.price, 0);
    setTotal(total);
  };
  useEffect(() => {
    handleCalculateTotal();
  }, [cart]);
  const handleRemoveAllFromCart = () => {
    setCart([]);
    toast.success("All items removed from cart.", {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleUpdatePainting = async (data) => {
    const res = await updatePainting(data.id, data);
    if (res.ok) toast.success("Painting updated successfully!");
    else toast.error("Error updating painting.");
  };

  const handleCreatePainting = async (painting) => {
    try {
      const res = await createPainting(painting);
      if (res.ok) toast.success("Painting added successfully!");
      else toast.error("Error adding painting.");
    } catch (err) {
      toast.error("Network error");
    }
  };

  const handleDeletePainting = async (id) => {
    try {
      const res = await deletePainting(id);
      if (res.ok) {
        toast.success("Painting deleted successfully!");
        fetchPaintings().then((data) => {
          setPaintings(data);
        });
      } else toast.error("Error deleting painting.");
    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        loading,
        error,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        handleRemoveAllFromCart,
        filteredPaintings,
        handleCalculateTotal,
        setSearch,
        handleCreatePainting,
        handleUpdatePainting,
        handleDeletePainting,
        pagination,
        handlePaginationChange,
        paginatedPaintings,
        paintings
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
