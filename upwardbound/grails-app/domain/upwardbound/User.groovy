package upwardbound


import grails.rest.*

class User {
    static belongsTo = [school:School]
    String userName
    String password
    String email
    static mapping = {
        school fetch: 'join'
        school lazy: false

    }
}