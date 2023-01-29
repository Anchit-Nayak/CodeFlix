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
        imageURL="https://static.miraheze.org/atrociousgameplaywiki/thumb/d/d0/Poison_Mushroom_-_Mario_Kart_Wii.png/450px-Poison_Mushroom_-_Mario_Kart_Wii.png"
        description="Reduce 1 Power-up"
        quantity=""

      />
      <InventoryCard
        name="Mini Mushroom"
        imageURL="https://www.clipartmax.com/png/middle/76-761971_mini-mushroom-super-mario-bros-mini-mushroom.png"
        description="Increased Agility, Go through Mini Warp Pipes"
        quantity=""

      />
      <InventoryCard
        name="Bee Mushroom"
        imageURL="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dechii8-41973a65-a9b1-4d66-b0de-fe47b783e4fc.png/v1/fill/w_400,h_400,strp/super_mario__bee_mushroom_2d_by_joshuat1306_dechii8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvZWQ5OTFjZjQtN2M4Yy00NTMwLWI2YmEtYTNhYmYzYWIyZWFlXC9kZWNoaWk4LTQxOTczYTY1LWE5YjEtNGQ2Ni1iMGRlLWZlNDdiNzgzZTRmYy5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.OkvGcqqErYrri-ueA5Mp_nfrlOgmnezzc5eC0-EqQ7c"
        description="Flight (limited), Disappears in water"
        quantity=""

      />
      <InventoryCard
        name="Boo Mushroom"
        imageURL="https://i.pinimg.com/originals/a8/ee/57/a8ee57940c4ad6ed880687768931fc31.png"
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
      </Container>
    </div>}
    <div className='Footer'>
       
    </div>
    
    </div>
    
  );
}

export default App;
