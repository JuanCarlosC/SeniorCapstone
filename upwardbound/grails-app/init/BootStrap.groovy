import upwardbound.User
class BootStrap {

    def init = { servletContext ->
        new User(
                userName: "Sean Cheevers",
                password: "password",
                email: "Seancheevers@creighton.edu"
        ).save()
        new User (
                userName: "Juan Chavez",
                password: "password",
                email: "Juanchavez@creighton.edu"
        ).save()
    }
    def destroy = {
    }
}
