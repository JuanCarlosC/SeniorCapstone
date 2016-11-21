package upwardbound


import grails.rest.*
import grails.converters.*

class TutorController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TutorController() {
        super(Tutor)
    }

    def getStudents() {
        respond Tutor.students, view: 'index'
    }
}
