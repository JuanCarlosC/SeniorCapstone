import java.util.Date
import upwardbound.*
class BootStrap {

    def init = { servletContext ->
        def school = new School(name:"Creighton University")
        def sean = new User(
                school: school,
                userName: "Sean Cheevers",
                password: "password",
                email: "Seancheevers@creighton.edu"
        )
        def juan = new User (
                userName: "Juan Chavez",
                password: "password",
                email: "Juanchavez@creighton.edu"
        )

        school.addToUsers(sean)
        school.addToUsers(juan)

        def student1 = new Student (
                firstName: "Student1",
                lastName: "Test",
                gradeLevel: 6,
                mentorName: "Dummy Mentor"
        )

        def student2 = new Student (
                firstName: "Student2",
                lastName: "Test",
                gradeLevel: 7,
                mentorName: "Dummy Mentor"
        )

        def student3 = new Student (
                firstName: "Student3",
                lastName: "Test",
                gradeLevel: 8,
                mentorName: "Dummy Mentor"
        )

        def class1 = new Class(
                semester: "Sping 2017",
                name: "Biology",
                subject: "Science",
                instructor: "Test Teacher",
                startDate: new Date(),
                endDate: new Date()
        )

        def class2 = new Class(
                semester: "Sping 2017",
                name: "Computer Science",
                subject: "Science",
                instructor: "Test Teacher2",
                startDate: new Date(),
                endDate: new Date()
        )


        class1.addToStudents(student1)
        class1.addToStudents(student2)
        class1.addToStudents(student3)

        def tutor1 = new Tutor(
                name: "Computer Science",
                subject: "Science",
                tutorName: "Tutor Name"
        )
        def tutor2 = new Tutor(
                name: "Writing",
                subject: "English",
                tutorName: "Tutor Name"
        )
        student1.addToTutors(tutor1)
        student1.addToTutors(tutor2)
        student2.addToTutors(tutor1)
        student3.addToTutors(tutor2)

        def tutorSession1 = new TutorSession(
                date: new Date(),
                attended: true
        )
        def tutorSession2 = new TutorSession(
                date: new Date(),
                attended: false
        )
        def tutorSession3 = new TutorSession(
                date: new Date(),
                attended: false
        )
        def tutorSession4 = new TutorSession(
                date: new Date(),
                attended: true
        )
        def tutorDate = new TutorDate(
                date: new Date()
        )
        def tutorDate2 = new TutorDate(
                date: new Date()
        )
        tutor1.addToTutorDates(tutorDate)
        tutor2.addToTutorDates(tutorDate2)

        student1.addToTutorSessions(tutorSession1)
        tutorDate.addToTutorSessions(tutorSession1)

        student1.addToTutorSessions(tutorSession2)
        tutorDate2.addToTutorSessions(tutorSession2)

        student2.addToTutorSessions(tutorSession3)
        tutorDate.addToTutorSessions(tutorSession3)

        student3.addToTutorSessions(tutorSession4)
        tutorDate2.addToTutorSessions(tutorSession4)

        school.addToStudents(student1)
        school.addToStudents(student2)
        school.addToStudents(student3)

        school.addToClasses(class1)
        school.addToClasses(class2)

        //school.save(flush:true,failOnError:true)
    }
    def destroy = {
    }
}
