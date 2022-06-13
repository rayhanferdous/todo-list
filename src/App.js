import React, { useEffect, useState }  from 'react';
import Hero from './components/Hero';
import Logo from './components/Logo';
import List from './components/List';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
   const newItems = {
     id: uuidv4(),
     title: text
   }
    
  setItems([newItems, ...items])
  console.log(newItems);
  setText("")
  }

  const deleteItem = (id) => {
    setItems(items.filter((items) => items.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <main>
        <Logo/>
        <Hero/>
      </main>

      <form className='flex items-center justify-center text-white mt-10' onSubmit={handleSubmit}>
        <input className='py-2 px-5 rounded-lg bg-gray-700 text-white tracking-wide' type="text"
        name='text'
        placeholder='Enter your todo item'
        autoComplete='off'
        value={text}
        onChange={(e) => setText(e.target.value)} />
      </form>
      <List items={items} setItems={setItems} deleteItem={deleteItem}/>
      
    </>
  );
}

export default App;
