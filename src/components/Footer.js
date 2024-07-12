import "../styles/Footer.css"
export default function Footer(){
    return(
        <div id={"footer"}className={"footer-body"}>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    <li className="social-icon__item"><a className="social-icon__link" href="www.linkedin.com/in/jaivant-rajasekaran-b6b6a7220">
                        <img  title={"LinkedIn"} src="/icons/linkedin.png" alt="LinkedIn" width="30" height="30"/>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="https://www.github.com/jaivantraja">
                        <img  title={"Github"} src="/icons/github.png" alt="Github" width="30" height="30"/>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <img title={"Gmail"} src="/icons/gmail-logo.png" alt="Gmail" width="30" height="30"/>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="https://medium.com/@jaivantzte">
                        <img  title={"Medium"} src="/icons/medium.png" alt="Medium" width="30" height="30"/>
                    </a></li>
                </ul>
                <ul className="menu">
                    {/*<li className="menu__item"><a className="menu__link" href="#">Home</a></li>*/}
                    <li className="menu__item"><a className="menu__link" href="https://jaivantraja.netlify.app/">About</a></li>
                    <li class="menu__item"><a class="menu__link" href="https://www.hackerrank.com/profile/jaivant">HackerRank</a></li>
                    <li class="menu__item"><a class="menu__link" href="https://leetcode.com/jaivant_manki/">LeetCode</a></li>
                    { /* <li class="menu__item"><a class="menu__link" href="https://www.github.com/jaivantraja">GitHub</a></li>*/}

                </ul>
                <p>&copy;2024 Jaivant B R | All Rights Reserved</p>
            </footer>
        </div>
    )
}
