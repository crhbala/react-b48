import React, {useState} from 'react';

function ChildComponent({onMessage}) {
  const message = `Hello from Child`;

  return (
    <>
      <h2>Child Comonent</h2>
      <button onClick={()=>onMessage(message)}>Send Message to the parent</button>
    </>
  )
}

function App() {

  const [message, setMessage] = useState('');

  const handleMessage = (data) => {
    setMessage(data);
  }
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from the Child Component: { message}</p>
      <ChildComponent onMessage={handleMessage} />
    </div>
  )
}

/*
  passing data from the parent component to child component:

  parent Component:
    const age = 25;
    <child age = {age} name = {'satish'} />

  child component:
  props ->{
    age:25,
    name: 'satish'
  }

  passing data from the child component to parent component:

    parent Component:
      const [childAge, setChildAge]= useState(0);

      const handlChildAge(age){
      setChildAge(age);
      }

    <child handlChildAge ={handlChildAge} />

  child component:
  const age = 25;
  props ->{handlChildAge:handlChildAge}
  handlChildAge(25);
  
*/

export default App;