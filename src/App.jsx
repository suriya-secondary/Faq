import { useState } from 'react'
import './App.css'
const FaqItem = ({question,answer})=>
{
  const [show, setShow] = useState(false)
  const toggleShow= ()=>
  {
    setShow(!show)
  }
  return(
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header"onClick={toggleShow}>
       {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-body-content">
          {answer}
        </div>
      </div>
    </div>
  )
}
const FaqAccordian =({data})=>
{
  return (
    <div className="faq-accordian">
      <h1>FAQs</h1>
      {data.map((item)=>(<FaqItem key={item.id} question={item.question} answer={item.answer}/>))}
    </div>
  )
}
const data = [{id: 1,question: "What is React?",answer:"React is a JavaScript library used for building user interfaces, especially for single-page applications (SPAs). It was developed by Facebook (now Meta) and is widely used for creating fast and interactive web applications."},
  {id: 2,question: "What are the benefits of React? ",answer:"Component-Based Architecture, Fast Performance (Virtual DOM), Declarative UI with JSX, Unidirectional Data Flow, React Hooks (State & Lifecycle in Functional Components), SEO-Friendly, Strong Community & Ecosystem, Cross-Platform Development, Easy to Learn & Us"},
  {id: 3,question: "What are the main concept of React?",answer:"Components, JSX, Virtual DOM, Props, State, Hooks, Lifecycle Methods, Event Handling, Conditional Rendering, Lists and Keys, Context API, Refs, Higher-Order Components (HOC), React Router, Redux (State Management)"},
  {id: 4,question: "What is HOOKS is React?",answer:"Hooks in React are functions that allow functional components to use state and other React features without writing class components. They were introduced in React 16.8 to simplify component logic and improve code reusability"}
]
function App() {
 return (
    <>
      <div className="app">
        <FaqAccordian data={data}/>
      </div>
    </>
  )
}

export default App
