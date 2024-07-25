import Button from 'react-bootstrap/Button';
import{ Route, Routes} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import NoMatch from "./components/nomatch/nomatch";
import PostUser from "./components/postUser/postUser";
import UpdateUser from "./components/updateUser/updateUser";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
    {/* <h1>Employee list</h1> */}
    <Header></Header>
    <Routes>
     <Route path="/" element={<Dashboard></Dashboard>}></Route>
     <Route path="/user" element={<PostUser></PostUser>}></Route>
     <Route path="/user/:id" element={<UpdateUser></UpdateUser>}></Route>
     <Route path="*" element={<NoMatch></NoMatch>}></Route>
    </Routes>
    </div>
  );
}

export default App;
