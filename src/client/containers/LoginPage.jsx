import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Auth from '../utils/auth';
import LoginForm from '../components/LoginForm';


class LoginPage extends React.Component {

    /**
    * Class constructor.
    */
    constructor(props) {
        super(props);

        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';

        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }

        // set the initial component state
        this.state = {
            errors: {},
            successMessage,
            user: {
                email: '',
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

        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `email=${email}&password=${password}`;

        axios({
            url:'/auth/login',
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

            // save the token
            Auth.authenticateUser(response.data.token);

            // redirect the current URL to /
            this.setState({
                fireRedirect: true
            });
        })
        .catch((error) => {
            if (error.response) {
                const errors = error.response.data.errors ? error.response.data.errors : {};
                errors.summary = error.response.data.message;

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
                <LoginForm
                    onSubmit={this.processForm}
                    onChange={this.changeUser}
                    errors={this.state.errors}
                    successMessage={this.state.successMessage}
                    user={this.state.user}
                />
                {this.state.fireRedirect && (
                    <Redirect to='/'/>
                )}
            </div>
        );
    }

}

export default LoginPage;