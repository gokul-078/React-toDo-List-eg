import Header from "./Header";
import Onclick from "./Onclick";
import Hookstate from "./Hookstate";
import Hookstate1 from "./Hookstate1";

// In react the index.js file is a main file that is responsible for rendering our all components in the webpage.
// Here, the App.js file will contain all the components which are inserted into the App() function:


function App() {
  return (
    // Let's create one 'Header' component and insert it here below:
    <div>
      <Header />
      <Onclick />
      <Hookstate />
      <Hookstate1 />
    </div>
  );
}

export default App;
