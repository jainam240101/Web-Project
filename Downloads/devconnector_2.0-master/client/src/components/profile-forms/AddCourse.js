import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCourse } from '../../actions/profile';

const AddCourse = ({ addExperience }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cname: '',
        pname: '',
        semester: ''
    });

    const { cname, pname, semester } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <section className="container">
            <h1 className="large text-primary">Add A Course</h1>
            <p className="lead">
                <i className="fas fa-code-branch" /> Add your courses to connect with your classmates
            </p>
            <small>* = required field</small>
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    addExperience(formData, navigate);
                }}
            >
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Course name"
                        name="course"
                        value={cname}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Professor name"
                        name="professor"
                        value={pname}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="semester"
                        name="semester"
                        value={semester}
                        onChange={onChange}
                    />
                </div>


                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
                </Link>
            </form>
        </section>
    );
};

AddCourse.propTypes = {
    addCourse: PropTypes.func.isRequired
};

export default connect(null, { addCourse })(AddCourse);
