import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
            withCredentials: true
        })
    }

    signup = ({ username, password, email }) => this.service.post('/signup', { username, password, email }).then(response => response.data)
    login = ({ username, password }) => this.service.post('/login', { username, password }).then(response => response.data)
    logout = () => this.service.post('/logout').then(response => response.data)
    loggedin = () => this.service.get('/loggedin').then(response => response.data)

    //Aqui el response.data llega bien 
    getFavDishes = id => this.service.get(`/profile/${id}`).then(response => response.data)
    //response.data me da lo que le pido al back

}//empieza que estaba aqui sin estar pendiete ok
