package upwardbound


import grails.rest.*

//@Resource(uri = '/users', readOnly = false, formats = ['json', 'xml'])
class User {
    String userName
    String password
    String email
}