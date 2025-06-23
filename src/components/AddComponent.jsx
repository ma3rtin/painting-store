import PaintingForm from "../components/PaintingForm";
import { createPainting } from "../api/MockApi";
import { toast } from "react-toastify";

function AddComponent() {
  const handleCreate = async (data) => {
    try {
      const res = await createPainting(data);
      if (res.ok) toast.success("Painting added successfully!");
      else toast.error("Error adding painting.");
    } catch (err) {
      toast.error("Network error");
    }
  };

  return <PaintingForm onSubmit={handleCreate} />;
}

export default AddComponent;
