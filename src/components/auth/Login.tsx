import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import './auth.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { user } = useAuth();

    // Navigate to profile page if user is signed in
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate("/profile");
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Sign in with email and password using firebase auth
            await signInWithEmailAndPassword(auth, email, password);
            // Once user is signed in, state would be changed the user would be redirected to the profile page
            navigate("/profile");
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <fieldset>
                    <legend>Login</legend>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
