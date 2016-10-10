package upwardbound


import grails.rest.*
import grails.converters.*

class ClassController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ClassController() {
        super(Class)
    }
}
