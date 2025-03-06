import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout"
import Login from "./pages/users/Login"
import Register from "./pages/users/Register"
import Dashboard from "./pages/users/Dashboard"
import Home from "./pages/posts/Home"
import Create from "./pages/posts/Create"
import Update from "./pages/posts/Update"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="create" element={<Create />}/>
        <Route path="update" element={<Update />}/>

      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
