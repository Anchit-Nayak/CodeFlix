import { Container } from '@mui/system';
import './App.css';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from './pages/supabaseClient'; 
import Login from "./pages/login";
import Account from "./pages/account";
import { Navigate } from "react-router-dom";
//Components:
import NavBar from './Components/Navbar';

function App() {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <Container>
      {!session? <Login></Login>:<div className="App">
      <NavBar/>
     
    </div>}
    
    </Container>
  );
}

export default App;
