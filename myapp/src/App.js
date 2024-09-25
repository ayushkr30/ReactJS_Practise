import Add from "./components/Add";

function App() {
  const myName = 'Ayush Kumar';
  const multiply = (a,b) => a*b;
  const specialClass = 'simple-class';

  return (
    <>
   <h1>{myName}</h1>
   <p>2 * 2 = {2*2}</p>
  <p>My Friends list: {["Alex" , "John" ,"Jordan"]}</p>
    
    
    </>
  );
}

export default App;
