import React from "react";
import {container,Logo, LogoutBtn} from '../index'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header(){
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
           name: 'Home',
           slug: "/",
           active: true
        },{}
    ]
    return (
        <header className="py-3 shadow bg-gray-500"></header>
    )
}

export default Header