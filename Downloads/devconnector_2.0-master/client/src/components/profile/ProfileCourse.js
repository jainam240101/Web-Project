import React from 'react';
import PropTypes from 'prop-types';

const ProfileCourse = ({
    course: { course, professor, semester }
}) => (
    <div>
        <p>
            <strong>Course name: </strong> {course}
        </p>
        <p>
            <strong>Professor name: </strong> {professor}
        </p>
        <p>
            <strong>Semester: </strong> {semester}
        </p>
    </div>
);

ProfileCourse.propTypes = {
    course: PropTypes.object.isRequired
};

export default ProfileCourse;
