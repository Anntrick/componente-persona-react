import React from "react"
import "./Person.css"

/*  //Aquí definimos el componente como una clase
class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    render() {
        return (
            <div className="Person">
                <span>Nombre: {this.props.name},</span>
                <span>Apellidos: {this.props.surname},</span>
                <span>Edad: {this.props.age}</span>
            </div>
        )
    }
}

export default Person*/


//Aquí definimos el componente como una función
const Person = props => {
    return (
      <div className="Person">
        <span>Nombre: {props.name}, </span>
        <span>Apellidos: {props.surname}, </span>
        <span>Edad: {props.age}</span>
      </div>
    )
  }

  export default Person