package upwardbound


import grails.rest.*

class Tutor {
    static hasMany = [students: Student, tutorDates: TutorDate]
    static belongsTo = [Student]
    String name
    String tutorName
    String subject
}