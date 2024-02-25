
import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
    return (
        <div className={"App"}>
            <div className="content">
                <NavBar />
                <div className={"content-fr-this-time"}>
                    <h1>Mathematics</h1>
                    <p><b>Choose a grade level</b></p>
                    <div className={"buttons"}>
                        <Link href={"/math/math6"}><button className={"sixth"}><b>6th Grade</b></button></Link>
                        <Link href={"/math/math7"}><button className={"seventh"}><b>7th Grade</b></button></Link>
                        <Link href={"/math/math8"}><button className={"eighth"}><b>8th Grade</b></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
