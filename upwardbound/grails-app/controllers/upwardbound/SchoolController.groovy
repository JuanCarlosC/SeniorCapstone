package upwardbound


import grails.rest.*
import grails.converters.*

class SchoolController extends RestfulController {
    static responseFormats = ['json', 'xml']
    SchoolController() {
        super(School)
    }

    def save(School school) {
        school.save(flush:true,failOnError:true)
    }
}
