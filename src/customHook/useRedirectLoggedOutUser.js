import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../redux/features/auth/authSlice";
import { getLoginStatus } from "../services/authService";
import { toast } from "react-toastify";


const useRedirectLoggedOutUser = (path)=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const RedirectLoggedOutUser=async () =>{
            const isLoggedIn = await getLoginStatus()
            dispatch(SET_LOGIN(isLoggedIn))

            if(!isLoggedIn){
                toast.info("session expired, please login to continue.")
                navigate(path)
                return
            }
        };
        RedirectLoggedOutUser()

    }, [navigate, path, dispatch])

}
export default useRedirectLoggedOutUser