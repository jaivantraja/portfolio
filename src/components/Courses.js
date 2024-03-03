import "../styles/Courses.css"

import "primereact/resources/themes/soho-dark/theme.css";
export default function Courses(){

    const images = [
        {
            image:'./icons/sqaush.png'
        },
        {
            image:'./icons/sqaush.png'
        }
    ];


    return (
        <div id={"courses"} className={"courses-body"}>
            <p className={"courses-body-title"}>Courses</p>
            <div className="ag-format-container">
                <div className="ag-courses_box">
                    <div className="ag-courses_item">
                        <a href="https://coursera.org/share/081cb72d36b3fbbfd99aee0abb76cca5" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>
                            <div className="ag-courses-item_title">
                                Supervised Machine Learning: Regression And Classification
                            </div>
                            <div className="ag-courses-item_date-box">
                                Duration:
                                <span className="ag-courses-item_date">
                                            3 Weeks
                                         </span>
                            </div>
                            <div className="ag-courses-item_date-box">
                                Author:
                                <span className="ag-courses-item_date">
                                           Andrew Ng, DeepLearning.AI
                                         </span>
                            </div>
                        </a>
                    </div>
                    <div className="ag-courses_item">
                        <a href="https://coursera.org/share/dddb88ba4d5b5e5973d2e91fbb124df2" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>
                            <div className="ag-courses-item_title">
                                Python Crash Course By Google
                            </div>
                            <div className="ag-courses-item_date-box">
                                Duration:
                                <span className="ag-courses-item_date">
                                            6 Weeks
                                    </span>
                            </div>
                            <div className="ag-courses-item_date-box">
                                Author:
                                <span className="ag-courses-item_date">
                                           Google
                                         </span>
                            </div>
                        </a>
                    </div>
                    <div className="ag-courses_item">
                        <a href="https://coursera.org/share/77209f67ef7a23e7b521316ab8450358" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>
                            <div className="ag-courses-item_title">
                                Neural Networks And Deep Learning
                            </div>
                            <div className="ag-courses-item_date-box">
                                Duration:
                                <span className="ag-courses-item_date">
                                            4 Weeks
                                    </span>
                            </div>
                            <div className="ag-courses-item_date-box">
                                Author:
                                <span className="ag-courses-item_date">
                                           Andrew Ng, DeepLearning.AI
                                         </span>
                            </div>
                        </a>
                    </div>
                    <div className="ag-courses_item">
                        <a href="https://github.com/jaivantraja/expense-app.git" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>
                            <div className="ag-courses-item_title">
                                Postman API Fundamentals Student Expert
                            </div>
                            <div className="ag-courses-item_date-box">
                                Duration:
                                <span className="ag-courses-item_date">
                                            4 Weeks
                                    </span>
                            </div>
                            <div className="ag-courses-item_date-box">
                                Author:
                                <span className="ag-courses-item_date">
                                          Postman Student Program
                                         </span>
                            </div>
                        </a>
                    </div>
                    <div className="ag-courses_item">
                        <a href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1d34f989-56ec-4a98-a9c2-7506f79cffb4&" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>
                            <div className="ag-courses-item_title">
                                MATLAB Onramp
                            </div>
                            <div className="ag-courses-item_date-box">
                                Duration:
                                <span className="ag-courses-item_date">
                                            4 Weeks
                                    </span>
                            </div>
                            <div className="ag-courses-item_date-box">
                                Author:
                                <span className="ag-courses-item_date">
                                          MathWorks
                                         </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}
