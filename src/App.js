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
import InventoryCard from './Components/InventoryCard';

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
    
    <div>
      {!session? <Login></Login>:<div className="App">
      <Container>
      <NavBar/>
      <InventoryCard
        name="Super Mushroom"
        imageURL="https://mario.wiki.gallery/images/8/8b/SuperMushroom_-_2D_art.svg"
        description="Break Blocks"
        quantity=""

      />
      <InventoryCard
        name="1-Up Mushroom"
        imageURL="https://mario.wiki.gallery/images/f/ff/1up_Mushroom_-_2D_art.svg"
        description="Hello"
        quantity=""

      />
      <InventoryCard
        name="Title"
        imageURL="https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=612x612&w=0&k=20&c=xT9TK7oYkP6TP62lHqP0H-9mfz9cWva4OcYEnt06cjc="
        description="Hello"
        quantity=""

      />
      </Container>
    </div>}
    <div className='Footer'>
       
    </div>
    
    </div>
    
  );
}

export default App;
