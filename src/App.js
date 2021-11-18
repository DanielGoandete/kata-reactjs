import Header from "./components/Header";
import Image from "./components/Image";
import './App.css';
import cleanCode from '../src/assets/images/cleanCode.png'
import cleanCoder from '../src/assets/images/cleanCoder.png'
import cleanArchitecture from '../src/assets/images/cleanArchitecture.jpeg'
import tdd from '../src/assets/images/tdd.jpeg'
import refactoring from '../src/assets/images/refactoring.jpeg'

function App() {
  return (
    <div className="App">
        <div className="container">
          <Header></Header>
          <div class="row">
              <Image pathName={cleanCode} altText="A HandBook of Agile Software Craftmanship"></Image>
              <Image pathName={cleanCoder} altText="A Code of Conduct Professional Programmers"></Image>
              <Image pathName={cleanArchitecture} altText="A Craftman's Guide to Software Structure and Design"></Image>
              <Image pathName={tdd} altText="Test-Driven Development"></Image>
              <Image pathName={refactoring} altText="Working Effectively"></Image>
          </div>
        </div>
    </div>
  );
}

export default App;
