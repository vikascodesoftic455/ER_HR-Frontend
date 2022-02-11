import React from "react";
import { Redirect } from "react-router-dom";


// Pages Component

// Authentication related pages

import Login  from "../Pages/Authentication/login";
import SignUp from "../Pages/Authentication/SignUp";
import StickyHeadTable from '../Component/Index'


const PublicRoutes =[
    {path:'/',component: Login},
    {path:'/register', component: SignUp},
    {path:'/datatable',component:StickyHeadTable}
]

export default PublicRoutes

