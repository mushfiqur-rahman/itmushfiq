import Header from "../components/Header";
import Summary from "../components/Summary";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <div className="md:w-1/2 mx-auto min-h-svh px-10 py-5 rounded-lg shadow-2xl lime-500 m-20">
        <Header />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
      </div>
      <Footer />
    </>
  );
}

export default App;
