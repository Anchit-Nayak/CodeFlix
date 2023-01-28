import * as React from 'react';
import { useState, useEffect } from 'react'
import { supabase } from "../pages/supabaseClient";
import './dropdown.css'

const Dropdown = () =>{
    const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        console.log("oooooooooooooooooooooooooo "+ session);
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
    

  return (
    <div class="">

  <div class="dropdown inline-block relative">
    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">Dropdown</span>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={()=>{console.log('hsdi'+session)}} href="/account">Account</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Sign Out</a></li>
    </ul>
  </div>

</div>
  );
}

export default Dropdown;