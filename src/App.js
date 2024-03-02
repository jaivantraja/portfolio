import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Title from "./components/Title";
import HeaderPanel from "./components/HeaderPanel";
import { ScrollTop } from 'primereact/scrolltop';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Publications from "./components/Publications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <section>
      {/*<NavigationBar/>*/}
        <Title/>
            </section>
        {/*<section>*/}
        {/*<HeaderPanel/>*/}
        {/*    </section>*/}
        <section>
        <Education/>
            </section>
        <section>
      <Experience/>
            </section>
        <section>
            <Courses/>
        </section>
        <section>
            <Projects/>
        </section>
        <section>
            <Publications/>
        </section>
        <ScrollTop />
        <section>
            <Footer/>
        </section>
    </div>
  );
}

export default App;
