package upwardbound


import grails.rest.*

//@Resource(readOnly = false, formats = ['json', 'xml'])
class School {
    static hasMany = [users: User, students: Student]
    String name
}