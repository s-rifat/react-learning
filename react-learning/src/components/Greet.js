import React from 'react'

// function Greet() {
//     return <h1>Hello Rifat</h1>
// }

// export const Greet = (props) => {   
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// export const Greet = ({name, heroName}) => {   
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

export const Greet = props => {   
    console.log(props)
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
}

//export default Greet