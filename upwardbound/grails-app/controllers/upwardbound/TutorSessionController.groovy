package upwardbound


import grails.rest.*
import grails.converters.*

class TutorSessionController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TutorSessionController() {
        super(TutorSession)
    }
}
