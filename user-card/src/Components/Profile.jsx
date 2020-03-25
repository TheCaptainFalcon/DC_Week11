import React, { Component } from 'react';

class Profile extends Component {
    state = {
        profile: ""
    }

    async componentDidMount() {
        try {
            const response = await fetch ('https://randomuser.me/api/')
            const data = response.json();
                //dev test
                console.log(data);

            this.setState({
                profile: data.results[0].name.first
            })
        } catch (error) {
            this.setState({
                profile: error.message
            })
        }
    }

    render() {
        const { profile } = this.state;
        return(
            <div>
                <p>{profile}</p>
            </div>
        )
    }
}

export default Profile;