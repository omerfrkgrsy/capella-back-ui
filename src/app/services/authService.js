import Api from './api'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async loginUser(user){
        var response = await Api().post('login',{...user});
        return response;
    }
}