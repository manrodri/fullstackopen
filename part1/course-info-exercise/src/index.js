import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const Content = (props) => {
    return(
        <div>
            <p>
                {props.parts.part1} {props.exercises.part1}
            </p>
            <p>
                {props.parts.part2} {props.exercises.part2}
            </p>
            <p>
               {props.parts.part3}  {props.exercises.part3} 
            </p>
        </div>
    )
}

const Total = (props) => {
    return (<div>
       <p>Number of exercises {props.exercises.part1 + props.exercises.part2 + props.exercises.part3}</p>
    </div>
    )
}



const App = () => {
  const course = 'Half Stack application development';
  
  const parts = {
      part1: 'Fundamentals of React',
      part2: 'Using props to pass data',
      part3: 'State of a component'
  }
  
  const exercises = {
      part1: 10,
      part2: 7,
      part3: 14
  }
  

  return (
    <div>
      <Header text={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total  exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))