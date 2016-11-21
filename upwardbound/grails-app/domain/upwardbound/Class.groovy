package upwardbound


import grails.rest.*
import java.util.Date

class Class {
    static belongsTo = [school:School]
    static hasMany = [students: Student]
    String semester
    String name
    String subject
    String instructor
    Date startDate
    Date endDate
    static mapping = {
        students lazy: false
    }
}