package upwardbound


import grails.rest.*
import java.util.Date

class Class {
    static belongsTo = Student
    static hasMany = [students:Student]
    String name
    String subject
    String instructor
    Date startDate
    Date endDate
}