import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isEditing: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, isEditing: true } : todo)));
  };

  const editTodo = (index, newText) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, text: newText, isEditing: false } : todo)));
  };

  return (
    <div className='border border-gray-200 p-4 h-full'>
      <h2 className='font-semibold mb-4'>To-Do List</h2>
      <div className='mb-4'>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='border border-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
          placeholder='Enter new task'
        />
        <button
          onClick={addTodo}
          className='mt-2 bg-[#042893] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
        >
          Add Task
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='flex justify-between items-center mb-2'>
            {todo.isEditing ? (
              <input
                type='text'
                value={todo.text}
                onChange={(e) => editTodo(index, e.target.value)}
                className='border border-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div className='flex gap-2'>
              {!todo.isEditing && (
                <button
                  onClick={() => startEditing(index)}
                  className='bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteTodo(index)}
                className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
