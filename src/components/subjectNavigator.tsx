import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Navigator(props: {
    subject: string,
    longSubject: string,
    color6: string,
    color7: string,
    color8: string
}) {
    return (
        <div className={"App"}>
            <div className="content">
                <NavBar />
                <div className={"content-fr-this-time"}>
                    <h1>{props.longSubject}</h1>
                    <p><b>Choose a grade level</b></p>
                    <div className={"buttons"}>
                        <Link href={`/${props.subject}/6`}>
                            <button style={{
                                backgroundColor: props.color6
                            }}><b>6th Grade</b></button>
                        </Link>
                        <Link href={`/${props.subject}/7`}>
                            <button style={{
                                backgroundColor: props.color7
                            }}><b>7th Grade</b></button>
                        </Link>
                        <Link href={`/${props.subject}/8`}>
                            <button style={{
                                backgroundColor: props.color8
                            }}><b>8th Grade</b></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
