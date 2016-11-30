package upwardbound


import grails.rest.*

class TutorDate {
    static hasMany = [tutorSessions: TutorSession]
    static belongsTo = [tutor:Tutor]
    Date date
}