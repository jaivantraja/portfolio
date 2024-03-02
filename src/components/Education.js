import "../styles/Education.css"
export default function Education(){
    return(
        <div id={"education"} className={"education-body"}>
            <h1>Education</h1>
            <div className={"education-timeline"}>
                <div className={"education-timelineItem"}>
                    <h3 className={"date"}>2021 - 2025</h3>
                    <h4 className={"degree"}>BE Computer Science Engineering <b>GPA OF 8.48/10</b></h4>
                    <p className={"school"}>PSG Insitute Of Technology And Applied Research, Coimbatore, India</p>
                </div>
                <div className={"education-timelineItem"}>
                    <h3 className={"date"}>2015 - 2021</h3>
                    <h4 className={"degree"}>Secondary School</h4>
                    <p className={"school"}>The NGP School, Coimbatore, India</p>
                </div>
                <div className={"education-timelineItem"}>
                    <h3 className={"date"}>2013 - 2015</h3>
                    <h4 className={"degree"}>Primary School</h4>
                    <p className={"school"}>Singapore International School, Indonesia</p>
                </div>
                <div className={"education-timelineItem"}>
                    <h3 className={"date"}>2010 - 2013</h3>
                    <h4 className={"degree"}>Primary School</h4>
                    <p className={"school"}>Rama International School, Indonesia</p>
                </div>
            </div>
        </div>
    )
}