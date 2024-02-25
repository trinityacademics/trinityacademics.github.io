'use client';

import Img from "next/image";
import logo from "@/assets/logo.png";
import React, {useEffect, useState} from "react";
import Link from "next/link";


export default function NavBar() {
    return (
        <nav className="topnav" id="navbar">
            <Link href={"/"}>
                <Img src={logo} alt={"Home"} className={"App-logo"} priority={true}/>
            </Link>

            {/*
                <a href="/math/math.html">Mathematics</a>
                <a href="/sci/sci.html">Science</a>
                <a href="/ss/ss.html">Social Studies</a>
                <a href="/ela/ela.html">English</a>
                <a href="javascript:void(0);" className="icon" onClick={responsiveNav()}>
                    <i className="fa fa-bars"></i>
                </a>
                */}
        </nav>
    );
}