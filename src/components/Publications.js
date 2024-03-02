import "../styles/Publications.css"
export default function Publications(){
    return(
        <div id={"publications"} className={"publication-panel"}>
            <h1 className={"publications-title"}>Publications  <br/>+<br/> Achievements</h1>
            <div className={"publication-body"}>
                <div className={"publication-sub-body"}>
                    <a href={"https://www.ijert.org/identification-of-ill-animalspoultry-using-audio-processing-and-thermal-imaging-with-machine-learning"}>
                        <div className="container">
                            <div className="box">
                                <span className="title">Identification off ill Animals(poultry) Using Audio Processing And Thermal Imaging With Machine Learning</span>
                                <div>
                                    {/*<strong>Journal</strong>*/}
                                    <strong>Publication : Journal</strong>
                                    <span>DATE : 2022-30-07</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.ijert.org/rating-quality-of-roads-through-image-processing-and-live-traffic-analysis"}>
                        <div className="container">
                            <div className="box">
                                <span className="title">Rating Of Quality Of Roads Through Image Processing And Live Traffic Analysis</span>
                                <div>
                                    {/*<strong>Journal</strong>*/}
                                    <strong>Publication : Journal</strong>
                                    <span>DATE : 2022-30-07</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.ijert.org/identification-of-ill-animalspoultry-using-audio-processing-and-thermal-imaging-with-machine-learning"}>
                        <div className="container">
                            <div className="box">
                                <span className="title">A System For Analysing And Improving Sales Of A Product Using Machine Learning</span>
                                <div>
                                    {/*<strong>Patent</strong>*/}
                                    <strong>Publication : Patent</strong>
                                    <span>DATE : 2022-30-07</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={"publication-sub-body"}>
                    <a href={"https://www.ijert.org/identification-of-ill-animalspoultry-using-audio-processing-and-thermal-imaging-with-machine-learning"}>
                        <div className="container">
                            <div className="box">
                                <span className="title">Automated Real-time Landslide Detection System</span>
                                <div>
                                    <strong>Achievement : III place in iTech Project Expo</strong>
                                    <span>DATE : 2022-30-07</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}