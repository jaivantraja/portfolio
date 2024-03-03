import '../styles/Title.css';
export default function Title(){
    return(
        <div id={"about"} className={"title-panel"}>
            <div className={"title-body"}>
                <div className={"title-header-text"}>
                    <p className={"line-1 "} >Hello, I'm Jaivant B R.</p>
                    <p className={"line-2"} >Currently pursuing Bachelors In Computer Science Engineering At PSG Institute Of Technology And Applied Research, Coimbatore, India.</p>
                </div>
                    {/*<button class="button-30" role="button">Let's talk</button>*/}
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <div>
                    <button className="button-49"  role="button"><a href="https://linktr.ee/jaivant">Let's talk</a></button>
                </div>
            </div>
            {/*<div className={"title-intro"}>*/}
            {/*    <p>*/}
            {/*        <b>Based In:</b> Coimbatore,India*/}
            {/*    </p>*/}
            {/*</div>*/}
            <div className={"title-projects"}>
                <p className={"content-title"}>Contents</p>
                <div className={"content-items"} >
                    {/*<a className={"underline-container"}>About</a>*/}
                    <a href={"#courses"} className={"underline-container"}>Courses</a>
                    <a href={"#education"} className={"underline-container"}>Education</a>
                    <a href={"#experience"} className={"underline-container"}>Experience</a>
                    <a href={"#projects"} className={"underline-container"}>Projects</a>
                    <a href={"#publications"} className={"underline-container"}>Achievements</a>
                    <a href={"#publications"} className={"underline-container"}>Publications</a>
                </div>
            </div>
        </div>
    )
}