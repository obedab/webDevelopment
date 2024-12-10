

// function App(){
//   return(
//     <div>
//       <Like onClick={() => console.log('Clicked')}/>
//     </div>
//   );
// }

// function App (){
// return(
//   <div>
//     <ExpandableText >
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam exercitationem quidem asperiores non fuga sequi placeat id neque vero sint ipsum in atque, consequuntur odio sit, repudiandae a, dignissimos totam impedit nam nemo. Iusto nihil id repudiandae animi ut quia debitis asperiores. Earum sed labore eligendi doloremque perferendis nulla consequuntur totam voluptatem nostrum, officiis, corrupti mollitia culpa. Odio temporibus saepe sunt voluptates exercitationem dolor, sequi non possimus, ipsam pariatur fuga incidunt ipsa quibusdam quasi officia in quaerat quos modi eos molestias consectetur iure. Perferendis autem vitae aliquam beatae, vero quos odit suscipit reprehenderit id debitis perspiciatis mollitia cumque quae.
//     </ExpandableText>
//   </div>
// )

// }


/*function App(){
  return (
<div>
  <Form></Form>

  </div>

  );
}
 
export default App; 

*/
import React,{ useState } from 'react'
import Form from "./components/Form/Form";
import ExpenseTracker from './expense-tracker/components/ExpenseTracker';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';

 

const App = () => {

const [selectedCategory, setSelectedCategory] =useState('');

  const [expenses,setExpenses] = useState( [
    { id: 1, description: 'aaa', amount:10, category: 'utilities'},
    { id: 2, description: 'bbb', amount:10, category: 'utilities'},
    { id: 3, description: 'ccc', amount:10, category: 'utilities'},
    { id: 4, description: 'ddd', amount:10, category: 'utilities'},
  ]);
  
  const visibleExpenses = selectedCategory? expenses.filter((e) => e.category === selectedCategory): expenses;
  
  return (
    <div>
   {/* <Form /> */}
   <div className="mb-5">
    <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
   </div>
    <div className="mb-3">
      
    <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}
    />
    </div>
   <ExpenseTracker 
   expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))
   }/>

    </div>
  ); 
}

export default App