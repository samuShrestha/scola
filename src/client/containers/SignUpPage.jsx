import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SignUpForm from '../components/SignUpForm';


class SignUpPage extends React.Component {

    /**
    * Class constructor.
    */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: ''
            },
            fireRedirect: false
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    /**
    * Process the form.
    *
    * @param {object} event - the JavaScript event object
    */
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        const name = this.state.user.name;
        const email = this.state.user.email;
        const password = this.state.user.password;
        const formData = `name=${name}&email=${email}&password=${password}`;

        axios({
            url:'/auth/signup',
            method:'post',
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            responseType:'json',
            data: formData
        })
        .then((response) => {
            // success

            // change the component-cointainer state
            this.setState({
                errors: {}
            });

            // set a message
            localStorage.setItem('successMessage', response.data.message);

            // make a redirect
            this.setState({ fireRedirect: true });
        })
        .catch((error) => {
            if (error.response) {
                const errors = error.response.data.errors ? error.response.data.errors : {};
                errors.summary = error.response.data.message;

                console.log(error.response);

                this.setState({
                    errors
                });
            }
        });
    }

    /**
    * Change the user object.
    *
    * @param {object} event - the JavaScript event object
    */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    /**
    * Render the component.
    */
    render() {
        return (
            <div>
                <SignUpForm
                    onSubmit={this.processForm}
                    onChange={this.changeUser}
                    errors={this.state.errors}
                    user={this.state.user}
                />
                {this.state.fireRedirect && (
                    <Redirect to='/login'/>
                )}
            </div>
        );
    }

}

export default SignUpPage;