package upwardbound


import grails.rest.*
import grails.converters.*

class StudentController extends RestfulController {
    static responseFormats = ['json', 'xml']
    StudentController() {
        super(Student)
    }
}
