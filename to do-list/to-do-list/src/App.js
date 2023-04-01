import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from './MyComponents/Todos';
import Footer from "./MyComponents/Footer";

function App() {
 const onDelete =(todo)=>{
  console.log("i am on delete", todo);
 }
  let todos =[
    {
      sno: 1,
      title: "go to the market",
      desc: "you to go to the market and get this job done1",
    },
    {
      sno: 2,
      title: "go to the mall",
      desc: "you to go to the market and get this job done2",
    },
    {
      sno: 3,
      title: "go to the ghat",
      desc: "you to go to the market and get this job done3",
    },
  ]


  return (
     <>
     <Header  title="My-Todo-List" searchBar={false}/>
     <Todos todos={todos}  onDelete={onDelete}/>
     <Footer />
     </>

  );
}

export default App;
