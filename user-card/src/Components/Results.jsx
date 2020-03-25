import React, { Component } from 'react';

class Results extends Component {
    state = {
        picture: "",
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        address: "",
        phone: ""
    }

    async componentDidMount() {
        try {
            const response = await fetch ('https://randomuser.me/api/');
            const data = await response.json();
            const params = data.results[0];
            const addressParams = data.results[0].location.street;
                //dev test
                console.log(data);
            this.setState({
                picture: params.picture.large,
                firstName: params.name.first,
                lastName: params.name.last,
                email: params.email,
                birthday: params.dob.date,
                address: addressParams.number + " " + addressParams.name,
                phone: params.phone

            })
        } catch (error) {
            const err = error.message
                this.setState({
                    picture: err,
                    firstName: err,
                    lastName: err,
                    email: err,
                    birthday: err,
                    address: err,
                    phone: err
                })
        }
    }

    render() {
        const { picture } = this.state;
        const { firstName } = this.state;
        const { lastName } = this.state;
        const { email } = this.state;
        const { birthday } =this.state;
        const { address } =this.state;
        const { phone } = this.state;
        return (
            <div className='userCard'>
                <img src={picture} alt="" className='profileImage' />
                <p>Hi, my name is</p>
                <h1>{ firstName } { lastName }</h1>
                <p>{ email }</p>
                <p>{ birthday }</p>
                <p>{ address} </p>
                
            </div>
        )
    }
}

export default Results;