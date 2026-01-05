import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['rifat', 'manjur', 'rifat']
    // const nameList = names.map(name=> <h2>{name}</h2>)
    //const nameList = names.map(name=> <h2 key={name}>{name}</h2>)
    const nameList = names.map((name,index)=> <h2 key={index}>{index}{name}</h2>)
    const persons = [
        {   
            id: 1,
            name: 'rifat',
            age: 25
        },
         {  
            id: 2,
            name: 'manjur',
            age: 26
        }
    ]
    // const personList = persons.map(person=><h2>I am {person.name}, my age is {person.age}</h2>)
    // const personList = persons.map(person=> <Person person={person}></Person>)
    const personList = persons.map(person=> <Person key={person.id} person={person}></Person>)
  return (
    <div>
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1> 
      <h1>{names[2]}</h1> */}
      {/* {
        names.map(name=> <h2>{name}</h2>)
      } */}
      {
        nameList
      }
      {/* {
        personList
      } */}
    </div>
  )
}

export default NameList
