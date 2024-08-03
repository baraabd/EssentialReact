import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data"

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const CoreConcept = (props) => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

const Header = () => {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}  />

            <CoreConcept
            
            />

            <CoreConcept
              
            />

            <CoreConcept
              
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
};

export default App;
