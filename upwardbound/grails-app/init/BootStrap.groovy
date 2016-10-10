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
                name: "Biology",
                subject: "Science",
                instructor: "Test Teacher",
                startDate: new Date(),
                endDate: new Date()
        )

        def class2 = new Class(
                name: "Computer Science",
                subject: "Science",
                instructor: "Test Teacher2",
                startDate: new Date(),
                endDate: new Date()
        )
        student1.addToClasses(class1)
        student1.addToClasses(class2)
        student2.addToClasses(class1)
        student2.addToClasses(class2)
        student3.addToClasses(class1)
        student3.addToClasses(class2)


        school.addToStudents(student1)
        school.addToStudents(student2)
        school.addToStudents(student3)

        school.save(flush:true,failOnError:true)
    }
    def destroy = {
    }
}
