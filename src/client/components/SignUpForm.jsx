import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (
    <Card className="form">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Sign Up</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <TextField
                    error={errors.summary ? true : false}
                    fullWidth
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    label={errors.name} // ERROR LABEL
                    onChange={onChange}
                />
            </div>

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
                    label={errors.password} // ERROR LABEL
                    onChange={onChange}
                />
            </div>

            <div className="button-line">
                <Button type="submit" variant="raised" color="primary">Sign Up</Button>
            </div>

            <Typography component="p">
                Already have an account? <Link to={'/login'}>Log in</Link>
            </Typography>
        </form>
    </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;