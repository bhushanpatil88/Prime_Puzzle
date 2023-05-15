import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [cookies, setCookies, removeCookie] = useCookies();

    const login = async (email, password, navigate) => {
        try{
            const res = await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });
            
            setCookies('token', res.data.token); // your token
            setCookies('progress', res.data.progress); // optional data
            
            alert("Logged In Successfully");

            navigate(`/question/${res.data.progress}`);
        }
        catch(error){
            console.log(error);
            alert(error);
        }

    };

    const logout = (navigate) => {
        ['token', 'name'].forEach(obj => removeCookie(obj)); // remove data save in cookies
        navigate('/login');
    };

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout
        }),
        [cookies]
    );

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(UserContext)
};