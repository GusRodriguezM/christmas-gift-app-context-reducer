export const apiAuth = {

    saveUser: (user) => new Promise((resolve, reject) => {
        try{
            localStorage.setItem('user', JSON.stringify(user) || '');
            resolve('saved');
        }catch(error){
            reject('error saving the user');
        }
    })

}