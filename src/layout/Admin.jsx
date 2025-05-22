import { useContext } from 'react'
import Footer from '../components/static/Footer'
import Header from '../components/static/Header'
import { Navigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

function Admin() {
    const { logout } = useContext(SessionContext);
  return (
    <div>
      <Header />
        <h1>Admin Page</h1>
        <h2>You are authenticated.</h2>
        <button onClick={logout}>Logout</button>
      <Footer />
    </div>
  )
}

export default Admin
