import { useEffect,useState } from "react";

function App() {
  const [message, setMessage] = useState();
  const getHello = async () => {
    const responce = await fetch('http://localhost:5000');

    const data = await responce.json();

    console.log(data);

    setMessage(data.message);
  }
  useEffect(() => {
    getHello();
  }, [])
  return (
    <div>
      <h1 className="Heading">Hello World</h1>
      <h1>{message}</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
  )
}

export default App;
