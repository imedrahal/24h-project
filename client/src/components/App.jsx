import 'regenerator-runtime/runtime'
import React, { useEffect, useState } from 'react';
// import './index.css';
import Weather from "./Weather1.jsx"
const api_base = 'http://localhost:3000';

function App() {
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");
  const [view , setView]=useState(false)
  
  useEffect(() => {
		GetTodos();
	},[]);

	 const GetTodos= async () =>{
		const  res = await (await fetch(api_base + '/todos')).json()
        setTodos(res)
      
	};

 
  // const completeTodo = async id => {
	// 	const data = await fetch(api_base + '/todo/complete/' + id)
	// 	// console.log(data)
	// 	// const data =axios.get(api_base + '/todo/complete/:'+ id)
	// 	.then(res => res.json());
	// 	setTodos(todos => todos.map(todo => {
	// 		if (todo._id === data._id) {
	// 			todo.complete = data.complete;
	// 		};

	// 		return todo;
	// 	}));
		
	// }

	

    const addTodo = async () => {
    
      const requestOptions = {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({text:newTodo})
              }
          const response = await (await fetch(api_base + "/todo/new", requestOptions )).json()
          // const data = await response.json()
          console.log(response)
          setTodos({...todos,response})
          console.log(todos)
          setPopupActive(false);
		      setNewTodo("");
          GetTodos()
      };

      const completeTodo = async id => {
        const data = await fetch(api_base + '/todo/complete/' + id)
        // console.log(data)
        // const data =axios.get(api_base + '/todo/complete/:'+ id)
        .then(res => res.json());
        setTodos(todos => todos.map(todo => {
          if (todo._id === data._id) {
            todo.complete = data.complete;
          };
    
          return todo;
        }));
        
      }
	
     

	const deleteTodo = async id => {
		const data = await (await fetch(api_base + '/todo/delete/' + id, { method: "DELETE" })).json()
		// console.log(data)
		// .then(res => res.json());

		setTodos(todos => todos.filter(todo => todo._id !== data.result._id));
    GetTodos()
	};

   const changeView=()=>{
     setView(!view)
   }

	return (
    <div className="App">
  {view===false ? 
  <div>
  	<h1 className="change">Welcome, To your App </h1>
			<h4 className="change"> Your tasks</h4>
      <h2 className="changeView" onClick={changeView}> <a>Before, check the weather Weather </a></h2>
<div className="">
  <button onClick={()=> changeView} ></button>
</div>
			<div className="todos">
				{todos.length >= 0 ? todos.map(todo => (
					<div className={
						"todo" + (todo.complete ? " is-complete" : "")
					} key={todo._id}
           onClick={() => completeTodo(todo._id)}
           >
						<div className="checkbox"></div>

						<div className="text">{todo.text} Created at: {todo.timestamp}</div>
						

						<div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
					</div>
				)) : (
					<p>You currently have no tasks</p>
				)}
			</div>

			<div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

			{popupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
					<div className="content">
						<h3>Add Task</h3>
						<input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
						<div className="button" onClick={addTodo}>Create Task</div>
					</div>
				</div>
			) : ''}
      
      </div>
  : (<Weather  change={changeView}/>)}
		
		</div>
	);
}

export default App;