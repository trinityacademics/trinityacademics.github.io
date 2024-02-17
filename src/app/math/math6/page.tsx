import NavBar from "@/components/navbar";

export default function Home() {
    return (
        <div className={"App"}>
            <div className="content">
                <NavBar/>
                <div className={"content-fr-this-time"}>
                    <h1>6th Grade<br/>Mathematics</h1>
                    <p className={"text-left"}>
                        <ol>
                            <li>
                                <span>Mathematical process standards. The student uses mathematical processes to acquire
                                    and demonstrate mathematical understanding. The student is expected to:</span>
                                <ul>
                                    <li>Apply mathematics to problems arising in everyday life, society, and the
                                        workplace
                                    </li>
                                    <li>
                                        Use a problem-solving model that incorporates analyzing given information,
                                        formulating a plan or strategy, determining a solution, justifying the solution,
                                        and evaluating the problem-solving process and the reasonableness of the
                                        solution
                                    </li>
                                    <li>
                                        Select tools, including real objects, manipulatives, paper and pencil, and
                                        technology as appropriate, and techniques, including mental math, estimation,
                                        and number sense as appropriate, to solve problems
                                    </li>
                                    <li>
                                        Communicate mathematical ideas, reasoning, and their implications using multiple
                                        representations, including symbols, diagrams, graphs, and language as
                                        appropriate
                                    </li>
                                    <li>
                                        Create and use representations to organize, record, and communicate mathematical
                                        ideas
                                    </li>
                                    <li>
                                        Analyze mathematical relationships to connect and communicate mathematical ideas
                                    </li>
                                    <li>
                                        Display, explain, and justify mathematical ideas and arguments using precise
                                        mathematical language in written or oral communication
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    );
}
