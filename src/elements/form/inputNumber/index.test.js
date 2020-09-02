import React from 'react'
import {render,fireEvent} from "@testing-library/react"
import InputNumber from "./index"

class TesInput extends React.Component {
    state = {
        value=""
    }

    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return(
            <InputNumber
            max={30}
            onChange={this.handlechange}
            name="value"
            value={this.state.value}
            />
        )
    }
}

const setup=()=>{
    const {container} = render(<TesInput />)
    const input = container.querySelector(`input.form-control[name='value']`)

    return(
        input
    )
}

test('should able to change value', () => {
    const {input} = setup()

    fireEvent.change(input,{target:{value:23}})
    expect(input.value).toBe("23")
})

test('should not able to change value when reach max value', () => {
    const {input} = setup()

    fireEvent.change(input,{target:{value:33}})
    expect(input.value).toBe("")
})
