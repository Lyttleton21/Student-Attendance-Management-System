NB: Functional Requirements
The system must have 2 kinds of user:
- Admin
- Student
TIP: Give each user a role_id:
e.g. admin : 1, student : 2
Then, use the role id to decide their permissions 
e.g. if the user can add new student or not after login, e.t.c


ADMIN
1. Allow sign up as an admin
- Input Fields: first name, last name, email, password, department, Faculty, contact no
- Alert message to be displayed whether sign up is successful or not

2. Allow login as an admin
Input Fields: email, password

3. Add student into Database
Input Fields: first name, last name email, 
department and Faculty (these two fields should be pre-filled with the department and faculty of the admin that logged in)
contact no, matric no.

4. View all students

5. Allow admin to filter all students based on date, 
- indicate whether a student is present or absent (using button or checkbox (true for present, false for absent))  for each date filtered by admin

6. Admin should be able to log out and return to the login page

USER
1. Allow sign up as a student
-  Input Fields: first name, last name, password, email,
 department, Faculty (these two fields should be pre-filled in a select/dropdown field according to the entry made by the admins of each department)

2. Allow user to login
Input Fields: email, password

3. Attendance page
- Display the Department and faculty of the student based on data fetched from database after log in.
- allow user to select or use checkbox to indicate present
- introduce a submit button to send the data to backend
- feedback message must be displayed either failed or successful.

4. user should be able to log out and return to the login page