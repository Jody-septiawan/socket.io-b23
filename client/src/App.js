import { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import Auth from "./pages/Auth";
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';

function App() {
  let history = useHistory();
  const [user, setUser] = useState(null)

  console.log(user)

  useEffect(()=>{
    if(user){
      if(user.username){
        history.push("/chat");
      }else{
        history.push("/auth");
      }

    }
  },[user])

  return (
    <Switch>
      <Route exact path="/" component={NotFound} />
      <Route path="/auth">
        <Auth setUser={setUser} />
      </Route>
      <Route path="/chat">
        <Chat setUser={setUser} user={user} />
      </Route>
      <Route path="/*" component={NotFound} />
    </Switch>
  );
}

export default App;
