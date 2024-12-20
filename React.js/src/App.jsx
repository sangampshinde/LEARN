// import React from 'react'
// import HelloWorld from './HelloWorld'


// const App = () => {
//   return (
//     <div>
//       <HelloWorld />
//       <HelloWorld />
//     </div>
//   )
// }

// export default App


// =================================


// import React from 'react'
// import Greeting from './Greeting'


// const App = () => {
//   return (
//     <div>
//       <Greeting name='tony'/>
//       <Greeting name="Bob"/>
//       <Greeting name="Charlie"/>
//     </div>
//   )
// }

// export default App

// ========================================


// import React from 'react';
// import ItemList from './ItemList';

// const App = () => {
//   return (
//     <div>
//       <ItemList/>
//     </div>
//   )
// }

// export default App;


// ===============================================
// import React from 'react';
// import Greeting1 from './Greeting1';
// import Farewell from './Farewell';

// const App = () => {

//   const isGreeting = false;

//   return (
//     <div>
//         <h1>Conditional Rendering Example</h1>
//         {isGreeting ? <Greeting1/> : <Farewell/>}
//     </div>
//   )
// }

// export default App

// =================================================
// import React from 'react'

// const App = () => {
//   const handleClick = () => {

//     alert('Button clicked!');

// };
//   return (
//     <div>
//       <h1>Event Handling Example</h1>
//       <button onClick={handleClick}>Click Me!</button>
//     </div>
//   )
// }

// export default App



// =====================================================
// import React,{useState} from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);

//   const Increase = () => {
//     return setCount(count + 1);
//   };
//   const Decrease = () => {
//     return setCount(count - 1);
//   }

//   return (
//     <div>
//       <p>Counter:{ count }</p>
//       <button onClick={Increase}>Increase</button>
//       <button onClick={Decrease}>Decrease</button>
      
      
//     </div>
//   )
// }

// export default App


// ==============================================
// import React, { useState } from 'react';


// const App = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   return (

//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Controlled Input Example</h1>
//       <h2>You typed: {inputValue}</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder='Type Something ...'
//       />
//     </div>
//   )
// }

// export default App

// =================================================
// import React from 'react'
// import DefaultProps from './DefaultProps'
// import DefaultProps1 from './DefaultProps1'



// const App = () => {
//   return (
//     <div>
//       <DefaultProps />
//       <DefaultProps name="tony" age={40} />
//       <DefaultProps1/>
//     </div>
//   )
// }

// export default App

// ===============================================
// import React from 'react'
// import UserCard from './UserCard'

// const App = () => {

//     const users = [
//         { id: 1, name: 'tony', age: 40 },
//         { id: 2, name: 'peter', age: 23 },
//         { id: 3, name: 'bruce', age: 35 },
//         { id: 4, name: 'dr strange', age: 40 }
//     ]

//     return (
//         <div style={{ textAlign: 'center', marginTop: '5px', padding: '2px', display:'flex'}}>
//             {users.map((user, i) => (
//                 <UserCard key={user.id} name={user.name} age={user.age} />
//             ))}
//     </div>
//   )
// }
// export default App

// ==========================================================
// import React from 'react'
// import Profile from './Profile'

// const App = () => {

//   const user = {
//     name: 'tony',
//     age: 40,
//     location: 'New York'
//   };

//   return (
//     <div>
//       <Profile name={user.name} age={user.age} location={user.location} />
      
//     </div>
//   )
// }

// export default App

// ============================================================================

// import React from 'react'
// import UserForm from './UserForm'

// const App = () => {
//   return (
//     <div>
//       <UserForm />
//     </div>
//   )
// }

// export default App

// ============================================================================
// import React from 'react'
// import TemperatureConverter from './TemperatureConverter';


// const App = () => {
//   return (
//     <div>
//       <center>
//       <TemperatureConverter/>
//       </center>
      
      
//     </div>
//   )
// }

// export default App;

// ===================================================================================

// import React, { useState } from 'react';


// const App = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => {

//     setCount(prevCount => prevCount + 1);
    
//   }
//   const decrement = () => {

//     setCount(prevCount => prevCount - 1);
    
//   }

//   return (
//     <div>
//       <h1>Counter:{count}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default App


// ============================================================================
// import React from 'react'
// import ToggleComponent from './ToggleComponent'

// const App = () => {
//   return (
//     <div>
//       <ToggleComponent/>
//     </div>
//   )
// }

// export default App

// ===========================================================================
// import React from 'react'
// import TwoWayDataBinding from './TwoWayDataBinding'

// const App = () => {
//   return (
//     <div>
//       <TwoWayDataBinding/>
//     </div>
//   )
// }

// export default App

// =============================================
// import React from 'react'
// import StateArrayExample from './StateArrayExample'

// const App = () => {
//   return (
//     <div>
//       <StateArrayExample />
      
//     </div>
//   )
// }

// export default App

// ===================================================
// import React from 'react'
// import MyComponent from './MyComponent'

// const App = () => {
//   return (
//     <div>
//       <MyComponent/>
//     </div>
//   )
// }

// export default App

// ======================================================
// import React from 'react'
// import MyComponent1 from './MyComponent1'

// const App = () => {
//   return (
//     <div>
//       <MyComponent1/>
//     </div>
//   )
// }

// export default App


// ============================================================
// import React from 'react'
// import UserList from './UserList'

// const App = () => {
//   return (
//     <div>
//       <UserList/>
//     </div>
//   )
// }

// export default App

// ====================================================
// import React from 'react'
// import UserProfile1 from './UserProfile1'

// const App = () => {
//   return (
//     <div>
//       <UserProfile1/>
      
//     </div>
//   )
// }

// export default App

// ============================================================
// import React from 'react'
// import DataFetchingComponent from './DataFetchingComponent'

// const App = () => {
//   return (
//     <div>
//       <DataFetchingComponent/>
//     </div>
//   )
// }

// export default App

// ===================================================================
// import React from 'react'
// import TitleUpdater from './TitleUpdater'

// const App = () => {
//   return (
//     <div>
//       <TitleUpdater/>
//     </div>
//   )
// }

// export default App

// =======================================================
// import React from 'react'
// import WindowResizeListener from './WindowResizeListener'

// const App = () => {
//   return (
//     <div>
//       <WindowResizeListener/>
//     </div>
//   )
// }

// export default App
// ========================================================
// import React from 'react'
// import DataFetchingComponent1 from './DataFetchingComponent1'

// const App = () => {
//   return (
//     <div>
//       <DataFetchingComponent1/>

//     </div>
//   )
// }

// export default App

// ==============================================
// import React,{ useState } from 'react'
// import ProductDetail from './ProductDetail';

// const App = () => {
//   const [productId, setProductId] = useState(1);


//   const handleChangeProduct = ()=>{
//     setProductId(prevId=>(prevId === 1 ? 2 : 1))
//   }

//   return (
//     <div>
//       <button onClick={handleChangeProduct}>Toggle Product</button>
//       <ProductDetail productId={productId}/>
//     </div>
//   )
// }

// export default App

// ===================================================================
// import React from 'react'
// import TimerComponent from './TimerComponent'

// const App = () => {
//   return (
//     <div>
//       <TimerComponent/>
//     </div>
//   )
// }

// export default App
// ======================================================
// import React from 'react'
// import MyComponent2 from './MyComponent2'

// const App = () => {
//   return (
//     <div>
//       <MyComponent2/>
//     </div>
//   )
// }

// export default App

// =======================================
// import React from 'react'
// import MyComponent3 from './MyComponent3'
// const App = () => {
//   return (
//     <div>
//       <MyComponent3/>
//     </div>
//   )
// }

// export default App

// =============================================
// import React from 'react'
// import MyComponent4 from './MyComponent4';

// const App = () => {


//   return (
//     <div>
//       <MyComponent4/>
//     </div>
//   )
// }

// export default App

//============================================================
// import React from 'react'
// import MyComponent5 from './MyComponent5'

// const App = () => {
  
//   return (
//     <div>
//       <MyComponent5/>
//     </div>
//   )
// }

// export default App

// ==========================================================
// import React from 'react'
// import ControlledForm from './ControlledForm'

// const App = () => {
//   return (
//     <div>
//       <ControlledForm/>
//     </div>
//   )
// }

// export default App
// ================================================================
// import React from 'react'
// import FormSubmissionExample from './FormSubmissionExample'

// const App = () => {
//   return (
//     <div>
//       <FormSubmissionExample/>
//     </div>
//   )
// }

// export default App

// ====================================================================
// import React from 'react'
// import ControlledUncontrolledExample from './ControlledUncontrolledExample'

// const App = () => {
//   return (
//     <div>
//       <ControlledUncontrolledExample/>
//     </div>
//   )
// }

// export default App

// =============================================================
// import React from 'react'
// import CheckboxExample from './CheckboxExample'

// const App = () => {
//   return (
//     <div>
//       <CheckboxExample/>
//     </div>
//   )
// }

// export default App

// ==========================================================
// import React from 'react'
// import MultiInputForm from './MultiInputForm'

// const App = () => {
//   return (
//     <div>
//       <MultiInputForm/>
//     </div>
//   )
// }

// export default App

// =============================================================
// import React from 'react'
// import RadioButtonExample from './RadioButtonExample'

// const App = () => {
//   return (
//     <div>
//       <RadioButtonExample/>
//     </div>
//   )
// }

// export default App

// ====================================================================
// import React from 'react'
// import SelectDropdownExample from './SelectDropdownExample'

// const App = () => {
//   return (
//     <div>
//       <SelectDropdownExample/>
//     </div>
//   )
// }

// export default App

// ===============================================================
import React from 'react'
import FormWithValidation from './FormWithValidation'

const App = () => {
  return (
    <div>
      <FormWithValidation/>
    </div>
  )
}

export default App