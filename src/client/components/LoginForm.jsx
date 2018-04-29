import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user
}) => (
    <Card className="form">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Login</h2>

            {successMessage && <p className="success-message">{successMessage}</p>}
            <p className="error-message">{errors.summary}</p>

            <div className="field-line">
                <TextField
                    error={errors.summary ? true : false}
                    fullWidth
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    label={errors.email} // ERROR LABEL
                    onChange={onChange}
                />
            </div>

            <div className="field-line">
                <TextField
                    error={errors.summary ? true : false}
                    fullWidth
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    label={errors.password}  // ERROR LABEL
                    onChange={onChange}

                />
            </div>

            <div className="button-line">
                <Button type="submit" variant="raised" color="primary">Log In</Button>
            </div>

            <Typography component="p">
                Don't have an account? <Link to={'/signup'}>Create one</Link>.
            </Typography>
        </form>
    </Card>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;