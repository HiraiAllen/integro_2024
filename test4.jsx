import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            isPalindrome: null
        };
    }

    handleChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    handleSubmit = () => {
        axios.post('/api/palindrome', { text: this.state.inputText })
            .then(response => {
                this.setState({ isPalindrome: response.data.isPalindrome });
            })
            .catch(error => {
                console.error('Error al realizar la solicitud POST:', error);
            });
    };

    render() {
        return (
            <div>
                <h1>Palindrome Validator</h1>
                <input type="text" value={this.state.inputText} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Validate</button>
                {this.state.isPalindrome !== null && (
                    <p>{this.state.isPalindrome ? 'The text is a palindrome.' : 'The text is not a palindrome.'}</p>
                )}
            </div>
        )
    }
}