// import { useState } from 'react';
// import Logo from './Logo';
// import Form from './Form';

// export default function App() {
//   const [items, setItems] = useState([]);
//   const totalItems = items.length;
//   const itemPacked = items.filter((items) => items.packed).length;

//   const itemPercentage = Math.floor((itemPacked / totalItems) * 100);

//   function addItems(item) {
//     setItems((items) => [...items, item]);
//   }
//   function removeItem(id) {
//     console.log(id);
//     setItems((items) => items.filter((item) => item.id !== id));
//   }
//   function updatePacked(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }
//   function clearList() {
//     setItems([]);
//   }
//   return (
//     <div className="app">
//       <Logo />
//       <Form addItems={addItems} />
//       <PackingList
//         items={items}
//         removeItem={removeItem}
//         updatePacked={updatePacked}
//         clearList={clearList}
//       />
//       <Stats
//         totalItems={totalItems}
//         itemPacked={itemPacked}
//         itemPercentage={itemPercentage}
//       />
//     </div>
//   );
// }

// function PackingList({ items, removeItem, updatePacked, clearList }) {
//   const [sortBy, setSortBy] = useState('input');
//   let sortedItems;

//   if (sortBy === 'input') {
//     sortedItems = items;
//   }
//   if (sortBy === 'description') {
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));
//   }
//   if (sortBy === 'packed') {
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));
//   }

//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             removeItem={removeItem}
//             key={item.id}
//             id={item.id}
//             description={item.description}
//             quantity={item.quantity}
//             packed={item.packed}
//             updatePacked={updatePacked}
//           />
//         ))}
//       </ul>
//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Sort by input</option>
//           <option value="description">Sort by description</option>
//           <option value="packed">Sort by packed</option>
//         </select>
//         <button onClick={clearList}>Clear List</button>
//       </div>
//     </div>
//   );
// }

// function Item({ removeItem, id, description, quantity, packed, updatePacked }) {
//   return (
//     <li>
//       <input type="checkbox" onChange={() => updatePacked(id)} />
//       <span style={packed ? { textDecoration: 'line-through' } : {}}>
//         {quantity} {description}
//       </span>
//       <button onClick={() => removeItem(id)}>❌</button>
//     </li>
//   );
// }
// function Stats({ totalItems, itemPacked, itemPercentage }) {
//   return (
//     <footer className="stats">
//       <em>
//         {totalItems === 0
//           ? 'Start adding some items into your list!!'
//           : itemPercentage === 100
//           ? 'You are ready to go ✈️'
//           : `You have ${totalItems} items in your list, and you already packed
//         ${itemPacked} (${itemPercentage}%)`}
//       </em>
//     </footer>
//   );
// }

import { useState } from 'react';
import './index.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Item number={i} key={item.title} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

function Item({ title, text, number }) {
  const [itemClick, setItemClick] = useState(false);
  // console.log(faqs[0]);
  function handleClick() {
    setItemClick((itemClick) => !itemClick);
  }
  return (
    <div
      className={itemClick ? 'item open' : 'item'}
      onClick={() => handleClick()}
    >
      <p className="number">{`0${number + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{itemClick ? '-' : '+'}</p>
      {itemClick ? <div className="content-box">{text}</div> : null}
    </div>
  );
}
