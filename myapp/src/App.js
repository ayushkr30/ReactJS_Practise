import Add from "./components/Add";
import User from "./components/User";


function App() {
  return (
    <User
    img="https://avatars.githubusercontent.com/u/85052811?v=4"
    name="AyushKumar"
    age={23}
    isMarried={false}
    hobbies={[ "Coding", "Reading", "Sleeping"]}
    />
  );
}

export default App;
