import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
    return (
        <div className={"App"}>
            <div className="content">
                <NavBar/>
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
                        <Link href={"/math"}>
                            <button className={"math"}><b>Mathematics</b></button>
                        </Link>
                        <Link href={"/science"}>
                            <button className={"science"}><b>Science</b></button>
                        </Link>
                        <Link href={"/ss"}>
                            <button className={"social-studies"}><b>Social Studies</b></button>
                        </Link>
                        <Link href={"/english"}>
                            <button className={"english"}><b>English</b></button>
                        </Link>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    );
}
