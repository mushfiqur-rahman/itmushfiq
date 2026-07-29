import Header from "../components/Header";
import Summary from "../components/Summary";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Mushfiqur Rahman | Google Workspace Expert</title>

        <meta
          name="description"
          content="Google Workspace, Microsoft 365, Email Migration, DNS, WordPress and IT Support."
        />

        <meta name="robots" content="index,follow" />

        <link rel="canonical" href="https://mushfiq.xyz/" />

        {/* Open Graph */}
        <meta property="og:title" content="Mushfiqur Rahman" />
        <meta
          property="og:description"
          content="Google Workspace & Microsoft 365 Expert"
        />
        <meta property="og:image" content="https://mushfiq.xyz/og-image.jpg" />
        <meta property="og:url" content="https://mushfiq.xyz/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mushfiqur Rahman",
            url: "https://mushfiq.xyz",
            jobTitle: "IT Support Engineer",
            image: "https://mushfiq.xyz/mushfiq.png",
            sameAs: [
              "https://linkedin.com/in/itmushfiq",
              "https://github.com/mushfiqur-rahman",
            ],
          })}
        </script>
      </Helmet>
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
