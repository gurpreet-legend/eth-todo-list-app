import './App.css';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar.js'
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container mx-auto my-10 flex flex-col space-y-10 p-6'>
        <Input />
        <TaskList />
      </div>
    </div> 
  );
}

export default App;
