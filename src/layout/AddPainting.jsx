import Header from '../components/static/Header'
import PaintingForm from '../components/PaintingForm'
import Footer from '../components/static/Footer'
import '../styles/AddPaingtingLayout.css';
import { createPainting } from '../api/MockApi';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function AddPainting() {
  const { handleCreatePainting} = useContext(CartContext)

  return (
    <div>
      <Header />
      <PaintingForm onSubmit={handleCreatePainting} />
      <Footer />
    </div>
  )
}

export default AddPainting
