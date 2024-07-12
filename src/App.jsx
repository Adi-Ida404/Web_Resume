import './App.css';
import {Nav} from "./components/Nav";
import{Photo} from "./components/Photo";
import {Desc} from "./components/Desc"

const flex = {
  display: 'flex'
}

function App(){
  return (
    <>
    <div style={flex}>
    <Nav/>
    <Photo/>
    <Desc/>
    </div>
    </>
  );
}
export default App;
