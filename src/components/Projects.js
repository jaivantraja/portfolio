import "../styles/Projects.css"

export default function Projects(){
    return(
        <div id={"projects"} className={"projects-body"}>
            <h1 className={"projects-title"}>Projects</h1>
            <div className="container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            {/*<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>*/}
                            <h3>Inventory Management Using Django Framework</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>A web-based application that incorporates Django framework to efficiently manage purchases and sales from various companies and store them in the respective inventory model.</p>
                            <a href="https://github.com/jaivantraja/inventory-management.git">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            {/*<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>*/}
                            <h3>Resume Builder Tool Using Java</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>The resume builder tool is used to create resume documents and store it in the computer's file manager. Further the documents can be sent to employer's mail and the employer can login and view in on the other side.</p>
                            <a href="https://github.com/jaivantraja/resume-builder.git">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            {/*<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>*/}
                            <h3>Automated Real-time Landslide Detection System</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div class="content">
                            <p>A real-time landslide detection system using YOLOv8 to analyze objects being captured through a camera achieved through thresholding the slope areas. A website is developed using ReactJs and Flask to retrieve analysis of the event from the Firebase  .</p>
                            <p></p>
                            <a href="https://github.com/jaivantraja/landslide-system.git">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            {/*<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>*/}
                            <h3>Expense Tracker App Using Flutter</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>It is an app that manages the expenses of individuals who frequently travel. Users can create an account, and then add their trip schedules, further add expenses anytime they want, and can view it. Users can then store and save it on their phone as a CSV file and can also share it through other social media apps.</p>
                            <a href="https://github.com/jaivantraja/expense-app.git">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            {/*<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>*/}
                            <h3>Food-book Application + Table Reservation</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>*/}
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                {/*<div className="card">*/}
                {/*    <div className="face face1">*/}
                {/*        <div className="content">*/}
                {/*            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>*/}
                {/*            <h3>Launch</h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="face face2">*/}
                {/*        <div className="content">*/}
                {/*            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>*/}
                {/*            <a href="#">Read More</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}
