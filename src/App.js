import logo from './logo.svg';
import './App.css';
import Addition from './Addition';

const styles = {
  contaier: {
    backgroundColor: "pink",
    color: "red",
    padding: "2em" 
  }
}

const App = () => {
  return (
    <div style={styles.contaier}>
    <h1>&#128151; Addition App &#128151;</h1>
    <h2>Valentine Edition</h2>
  
    <Addition  firstNumber = {2} secondNumber = {3}/>
    <Addition  firstNumber = {10} secondNumber = {10}/> 
    <Addition firstNumber = {12.5} secondNumber = {3.5}/>      
    </div>

  );
}

export default App;
