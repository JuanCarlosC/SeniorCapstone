package upwardbound


import grails.rest.*

class Student {
    static belongsTo = [School,Class]
    static hasMany = [classes: Class, tutorSessions: TutorSession, tutors: Tutor]
    String firstName
    String lastName
    int gradeLevel
    String mentorName
    static mapping = {
        classes lazy: false
    }
}