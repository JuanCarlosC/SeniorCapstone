package upwardbound

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')

        "/users"(resources:"user")
        "/schools"(resources:"school")
        "/students"(resources:"student")
        "/classes"(resources:"class")
        "/tutors"(resources:"tutor")
        "/tutorsessions"(resources:"tutorSession")
        "/tutorDates"(resources:"tutorDate")

    }
}
