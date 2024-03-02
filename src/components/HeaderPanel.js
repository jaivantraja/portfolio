import "../styles/HeaderPanel.css";
export default function HeaderPanel(){
    return(
        <div className={"panel-body floating"} >
            <div className={"sub-body"}>
                <div className={"currently-body"}>
                    <h1>
                        <b>Currently</b>
                    </h1>
                    <p>
                        Pursuing Bachelors In Computer Science Engineering At PSG Institute Of Technology And Applied Research, Coimbatore, India.
                    </p>
                    <p>
                        <b>Phone Number:</b>+91 8946074645
                    </p>
                    <p>
                        <b>Based In:</b> Coimbatore,India
                    </p>
                </div>
                <div className={"links-body"}>
                    <a href="https://www.linkedin.com/in/jaivant-rajasekaran-b6b6a7220" target="_blank">
                        <img  title={"LinkedIn"} src="/icons/linkedin.png" alt="LinkedIn" width="40" height="50"/>
                    </a>
                    <a href="https://www.github.com/jaivantraja" target="_blank">
                        <img  title={"Github"} src="/icons/github.png" alt="Github" width="40" height="50"/>
                    </a>
                    <a href="mailto:rajajai2003@gmail.com" target="_blank">
                        <img title={"Gmail"} src="/icons/gmail-logo.png" alt="Gmail" width="40" height="50"/>
                    </a>
                    <a href="https://stackoverflow.com/users/22091209/jaivant-rajasekaran" target="_blank">
                        <img  title={"StackOverflow"} src="/icons/medium.png" alt="Stackoverflow" width="40" height="50"/>
                    </a>
                </div>
            </div>
            <div className={"about-body"}>
                <h1 >About</h1>
                <p >
                    A passionate and enthusiastic learner about the latest advancements in the field and staying forefront of technological innovation.
                    My strong analytical thinking, attention to detail, and commitment to quality have consistently contributed to the success.
                    Actively seeking opportunities to delve into solving real world problems by committing to continuous growth and exploration.
                </p>
            </div>
            <div className={"skills-body"}>
                <h1>
                    <b>Skills</b>
                </h1>
                <div className={"skills-body-sub"}>
                    <div className={"skills-sub"}>
                        <p>React</p>
                        <p>Django</p>
                        <p >Flask</p>
                        <p >MongoDB</p>
                        <p >React Native</p>
                        <p>Spring Boot</p>
                        <p>Cordova</p>
                    </div>
                    <div className={"skills-sub"}>
                        <p>SQL</p>
                        <p>NextJs</p>
                        <p>Firebase</p>
                        <p>Kotlin</p>
                        <p>Docker</p>
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}