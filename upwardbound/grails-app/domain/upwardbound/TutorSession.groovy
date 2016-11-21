package upwardbound


import grails.rest.*

class TutorSession {
    static hasMany = [Student, Tutor]
    static belongsTo = [Student, Tutor]
    Date date
    Boolean attended
}