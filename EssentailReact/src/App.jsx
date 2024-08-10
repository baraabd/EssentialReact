import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

const App = () => {
  

  

  console.log("App Component Rendering");
  return (
    <>
      <Header />
      <main>
       <CoreConcepts />
       <Examples />

        
        <h2>Time to get started!</h2>
      </main>
    </>
  );
};

export default App;
