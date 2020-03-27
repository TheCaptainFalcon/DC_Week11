import React, { Component } from 'react';

class Email extends Component {
    state = {
        email: ""
    }

    async componentDidMount() {
        try {
            const response = await fetch ('https://randomuser.me/api/')
            const data = response.json();
                //dev test
                console.log(data);
            this.setState({
                email: data.results[0].email
            })
        } catch (error) {
            this.setState({
                email: error.message
            })
        }
    }
    render() {
        const {email} = this.state
            return(
                <p>{ email }</p>
            )
    }
}

export default Email;