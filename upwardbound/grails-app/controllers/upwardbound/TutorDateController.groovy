package upwardbound


import grails.rest.*
import grails.converters.*

class TutorDateController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TutorDateController() {
        super(TutorDate)
    }
}
