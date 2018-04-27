import React from 'react';
import axios from 'axios';
import Auth from '../utils/auth';
import Dashboard from '../components/Dashboard';


class DashboardPage extends React.Component {

    /**
    * Class constructor.
    */
    constructor(props) {
        super(props);

        this.state = {
            secretData: ''
        };
    }

    /**
    * This method will be executed after initial rendering.
    */
    componentDidMount() {
        axios({
            url:'/api/dashboard',
            method:'get',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': `bearer ${Auth.getToken()}`
            },
            responseType:'json'
        })
        .then((response) => {
            if (response.status === 200) {
                this.setState({
                    secretData: response.data.message
                });
            }
        });
    }

    /**
    * Render the component.
    */
    render() {
        return (<Dashboard secretData={this.state.secretData} />);
    }

}

export default DashboardPage;