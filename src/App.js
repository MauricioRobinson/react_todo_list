import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
// import './App.css';

const todos = [
	{ text: 'Cut onion', completed: false },
	{ text: 'Learn react', completed: false },
	{ text: 'Work work work work work work', completed: true },
];

function App() {
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default App;
