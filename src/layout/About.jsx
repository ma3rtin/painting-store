import Header from "../components/static/Header";
import Footer from "../components/static/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>About us.</h1>
        <p>
          This is a project created by Martín Mutuverría, a student of the React
          JS course at Talento Tech.
        </p>
        <p>
          You can find the code on my{" "}
          <a href="https://github.com/ma3rtin/painting-store">GitHub</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
