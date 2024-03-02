import "../styles/Experience.css"
export default function Experience(){
    const timelineData = [
        {
            src:"./icons/esillicon.jpg",
            status: "(Active)",
            name: "eSilicon Labs",
            title: "Landslide Prediction System",
            description: "Currently working on a real-time efficient and robust landslide detection system.",
        },
        {
            src:"./icons/sap.png",
            status: "(Active)",
            name: "SAP Labs",
            title: "Food Booking System",
            description: "Currently working on a food-booking system that involves tables reservation.",
        },
        {
            src:"./icons/sqaush.png",
            status: "",
            name: "Squash Apps",
            title: "Full Stack-Web Development",
            description: "Worked using NodeJS(ExpressJS), ReactJS, MongoDB, Postman API tool",
        },
        {
            src:"./icons/sqaush.png",
            status: "",
            name: "Squash Apps",
            title: "Full Stack-Web Development",
            description: "Worked using NodeJS(ExpressJS), ReactJS, MongoDB, Postman API tool",
        },
    ];
    const experienceCard = (image,title,description,link)=>{
        return(
                <div className="col-md-4 offset-md-7">
                    <div className="card" style={{width: "20rem",backgroundColor:"#E5E1DA",border:"1px solid white",borderRadius:"20px"}}>
                        <img style={{padding:"30px"}} src={image}  width={"100%"} height={"180px"} alt={title}/>
                        <div className="card-body" style={{marginLeft:"10px",color:"black"}}>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={link} className="btn btn-dark">Certificate</a>
                        </div>
                    </div>
                </div>
        )
    }
    return(
        <div id={"experience"} className={"experience-body"}>
            <div className={"left-fixed"}>
                <p style={{color:"black"}}>Experience</p>
            </div>
            <div className={"right-scrollable"}>
               <div className={"right-scrollable-1"}>
                   {experienceCard("/icons/esillicon2.png","Landslide Prediction System","Worked on a real-time efficient and robust landslide detection system.","")}
                   {experienceCard("/icons/sap1.png","Food Booking System","Currently working on a food-booking system that involves tables reservation.","")}
               </div>
                <div className={"right-scrollable-2"}>
                    {experienceCard("/icons/squash2.png","Full Stack-Web Development","Worked using NodeJS(ExpressJS), ReactJS, MongoDB, Postman API tool.","")}
                </div>
            </div>
        </div>
    )

}