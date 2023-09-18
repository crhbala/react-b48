//our first react componunt
//javascript function
//for now does not recive any  arguments

const App = () => {
  const now = new Date()
  return (
    <div>
      <p>Hello React, it is{now.toString()}</p>
    </div>
  )
}
export default App;