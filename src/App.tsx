import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/auth";
// Auth routes
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Register from "./components/auth/Register";
import Profile from "./components/auth/Profile";

const queryClient = new QueryClient();

const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AuthProvider>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<ShoppingCart />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );
};
export default App;
