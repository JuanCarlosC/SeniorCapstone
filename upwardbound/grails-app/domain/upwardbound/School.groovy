package upwardbound


import grails.rest.*

class School {
    static hasMany = [users: User, students: Student, classes: Class]
    String name
    static mapping = {
        users fetch: 'join'
        users lazy: false

    }
}