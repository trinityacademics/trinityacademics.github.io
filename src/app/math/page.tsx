import NavBar from "@/components/navbar";

export default function Home() {
    return (
        <div className={"App"}>
            <div className="content">
                <NavBar />
                <div className={"content-fr-this-time"}>
                    <h1>Mathematics</h1>
                    <p><b>Choose a grade level</b></p>
                    <div className={"buttons"}>
                        <button className={"sixth"}><b>6th Grade</b></button>
                        <button className={"seventh"}><b>7th Grade</b></button>
                        <button className={"eighth"}><b>8th Grade</b></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
