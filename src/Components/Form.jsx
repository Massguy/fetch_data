import React from 'react'

class Form extends React.Component {
  state = {
    input: ''
  }
  handleSubmit = event => {
    event.preventDefault()
    const { input } = this.state
    this.props.addCity(input)
    this.setState({ input: '' })

  }
  handleChange = event => {
    this.setState({ input: event.target.value })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> City :
          <input type='text' name='city' onChange={this.handleChange} />
          <button type='submit'>Get Weather</button>
        </label>
      </form>
    );
  }

}


export default Form;