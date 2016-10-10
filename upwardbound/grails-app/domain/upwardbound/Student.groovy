package upwardbound


import grails.rest.*

class Student {
    static belongsTo = [school:School]
    static hasMany = [classes:Class]
    String firstName
    String lastName
    int gradeLevel
    String mentorName
}