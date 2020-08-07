import React from "react";
import {Switch, NavLink , Route} from "react-router-dom";

import Table from "../tugas11/Table"
import Timer from "../tugas12/Timer"
import Form from "../tugas13/Form"
import Hooks from "../tugas14/Hooks"
import Buah from "./Buah"


const Routes = ()  =>{
    return (
        <>
        <nav>
            <ul>
                <li >     
                <NavLink exact activeClassName="active" className=" " to="/">Table Buah</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/timer">Timer</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/form">Form Buah</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/hooks">Table Buah With Hooks,Axios</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/buah">Table Buah With Context,Hooks,Axios</NavLink>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/timer">
                <Timer/>
            </Route>
            <Route path="/form">
                <Form/>
            </Route>
            <Route path="/hooks">
                <Hooks/>
            </Route>
            <Route path="/buah">
                <Buah/>
            </Route>
            <Route path="/">
                <Table/>
            </Route>
        </Switch>
        </>
    );
};

export default Routes;