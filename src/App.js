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
        description="Gain 1 Extra Life"
        quantity=""

      />
      <InventoryCard
        name="Mega Mushroom"
        imageURL="https://mario.wiki.gallery/images/thumb/7/7e/MKAGPDX_Mega_Mushroom.png/180px-MKAGPDX_Mega_Mushroom.png"
        description="Break blocks, Knock Out Enemies, Break Warp Pipes"
        quantity=""

      />
      <InventoryCard
        name="Poison Mushroom"
        imageURL="https://th.bing.com/th/id/OIP.aKnIdang1DgP7CtOC0KO3AAAAA?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        description="Reduce 1 Power-up"
        quantity=""

      />
      <InventoryCard
        name="Mini Mushroom"
        imageURL="https://th.bing.com/th/id/OIP.Wn_UwUbWhwZK70covCZQbAAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        description="Increased Agility, Go through Mini Warp Pipes"
        quantity=""

      />
      <InventoryCard
        name="Bee Mushroom"
        imageURL="https://th.bing.com/th/id/OIP.7AKuczGpTobBJJktH2j6pAAAAA?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        description="Flight (limited), Disappears in water"
        quantity=""

      />
      <InventoryCard
        name="Boo Mushroom"
        imageURL="https://th.bing.com/th/id/OIP.CEf0rlRF9gpvdQDBh1F5gAHaIQ?w=147&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        description="Float, Go through certain walls, Invisible, Lost when in light"
        quantity=""

      />
      <InventoryCard
        name="Spring Mushroom"
        imageURL="https://th.bing.com/th/id/OIP.kBGlXQS1gL5Abna5GrsYkgAAAA?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        description="Bounce with each step, Jump Higher, Easier to Wall Jump"
        quantity=""

      />
      <InventoryCard
        name="Propeller Mushroom"
        imageURL="https://th.bing.com/th/id/OIP.X_4douofgZB6VgcFdxu7HQHaGt?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        description="Launches player into the sky, Slowly float down"
        quantity=""

      />
      <InventoryCard
        name="Rock Mushroom"
        imageURL="https://th.bing.com/th/id/OIP.O6t0YR9zukxKfnoJQ30dswAAAA?w=110&h=110&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        description=""
        quantity="Rolls over enemies, Knocks down heavy objects"

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
