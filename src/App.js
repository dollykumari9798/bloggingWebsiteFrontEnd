import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Recomended from "./Components/Recomended";
import Blog from "./Pages/Blog";
import CreateBlog from "./Pages/CreateBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/Login";
import Drafts from "./Pages/Drafts";
import Test from "./Test";
import TestApp from "./Pages/TestApp";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Test />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/admin/login" element={<SignInPage/>}/>
                    <Route path="/admin/create" element={<CreateBlog/>}/>
                    <Route path="/admin/drafts" element={<Drafts/>}/>
                </Routes>
                <Recomended /> 
                <Footer />
            </Router>
            {/* <TestApp/> */}
        </div>
    );
}

export default App;
