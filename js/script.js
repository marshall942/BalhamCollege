function getEnrollmentsByStudents(StudentID) {
    enrolments = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/',
        success: function (data) {
            enrolmentsTemp = data;
            var i = 0;
            while (i<enrolmentsTemp.length){
                enrolment = enrolmentsTemp[i];
                if (StudentID == enrolment.Student){
                    enrolments.push(enrolment);
                }
                i++;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return enrolments;
}

function getEnrolment(id) {
    enrolment = null;
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/'+id,
        success: function (data) {
            enrolment = data;
        },
        error: function (err) {
            console.log(err);
        }
    });
    return enrolment;
}

function getCourseInfo(courseID) {
    course = null;
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://balham-college-db.herokuapp.com/api/Course/'+courseID,
        success: function (data) {
            course = data;
        },
        error: function (err) {
            console.log(err);
        }
    });
    return course;
}