import { createContext } from "react";
import { axiosConfig } from "./axiosConfig";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const login = async(user, navigate)=>
    {
        try {
            const response = await axiosConfig.post("/auth/login", user);
            if(response.data.token)
              {
                await localStorage.setItem("authToken", response.data.token);
                userSession = await localStorage.getItem("authToken");
                navigate("/dashboard");
            }
          } catch (err) {
            err.response? toast.error(`${err.response.data.message} ${err.response.data.error || ""}`) :  toast.error(err.message);
          }
    }

export const register = async (user, navigate)=>
{
    await axiosConfig.post("/auth/register", user)
    .then((response)=> {
                    toast.success(`${response.data.message} ${response.data.username}`, {theme:"dark", autoClose: 2000})
                    setTimeout(()=>
                    {
                      navigate("/");
                    }, 3000);
                  })
    .catch((err)=> err.response? toast.error(`${err.response.data.message} ${err.response.data.error}`) :  toast.error(err.message)); 
}
export let userSession=" ";
