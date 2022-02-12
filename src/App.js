import './App.css';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar.js'
import TaskList from './components/TaskList/TaskList';
import Web3 from 'web3'
import { useEffect, useState } from 'react';
import { TODOLIST_ABI, TODOLIST_CONTRACT_ADDRESS } from './config'

function App() {
  //States
  const [tasks, setTasks] = useState([]);
  // console.log(tasks);
  const [taskCount, setTaskCount] = useState(0);
  const [account, setAccount] = useState('');
  const [methods, setMethods] = useState([]);

  const load = async () => {
    //Connecting to the Ganache's blockchain network:
    const web3 = new Web3("http://localhost:7545");
  
    //Connecting the MetaMask account:
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    //Connecting to the Smart Contract:
    const contract = new web3.eth.Contract(TODOLIST_ABI, TODOLIST_CONTRACT_ADDRESS);
  
    //Getting the data from the smart contract:
    let taskCount = await contract.methods.taskCount().call();
    const methods = await contract.methods;
    
    let taskArr = [];
    for (let i = 1; i <= taskCount; i++) {
      const task = await contract.methods.tasks(i).call();
      taskArr.push(task)
    }

    // console.log(taskArr);
    
    //Updating the states
    setTasks([...taskArr]);
    setAccount(accounts[0]);
    setTaskCount(taskCount);
    setMethods(methods);
  }


  useEffect(() => {
    load();
  }, [])


  return (
    <div>
      <Navbar account={account}/>
      <div className='container mx-auto my-10 flex flex-col space-y-10 p-6'>
        <Input methods={methods} account={account}/>
        <TaskList methods={methods} tasks={tasks} account={account}/>
      </div>
    </div>
  );
}

export default App;
