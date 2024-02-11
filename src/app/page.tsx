import logo from '@/assets/logo.png';
import Image from "next/image";

export default function Home() {
    return (
        <div className={"App"}>
            <div className="content">
                <nav className="topnav" id="navbar">
                    <a href="/">
                        <Image src={logo} alt={"Home"} className={"App-logo"}/>
                    </a>
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
                <div className={"content-fr-this-time"}>
                    <h3>Education for Our Future</h3>
                    <p>Trinity Academics is a non-profit organization aiming to provide free education to Texas' future
                        generations. We are a group of students who are passionate about teaching and learning. We hope
                        to
                        provide free and accessible education to all students.</p>
                    <p>We feature a variety of resources including videos, games, quizzes, and more. Our target audience
                        is
                        students in 6th, 7th, and 8th grade. We hope to expand our resources to include more grades in
                        the
                        future.</p>
                    <p><b>Start learning by selecting a topic below!</b></p>
                    <div className="buttons">
                        <button className={"button"}>button</button>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    );
}
