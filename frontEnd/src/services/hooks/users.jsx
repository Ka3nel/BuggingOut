
const SERVER = "http://localhost:8080/api";

export const useUsers = async () => {
    const response = await fetch(`${SERVER}/users`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
}

export const getUserById = async (id) => {
    const response = await fetch(`${SERVER}/users/${id}`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
}

export const createUser = async (user) => {
    try{
        const response = await fetch(`${SERVER}/users`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw response
        }
        this.useUsers();
    }catch(err){
        console.warn(err);
        // this.emitter.emit('ADD_USER_ERROR');
    }    
}

export const updateUser = async (id, user) => {
    try{
        const response = await fetch(`${SERVER}/users/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw response
        }
        this.useUsers();
    }catch(err){
        console.warn(err);
        this.emitter.emit('UPDATE_USER_ERROR');
    }    
}

export const deleteUser = async (id) => {
    try{
        const response = await fetch(`${SERVER}/users/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw response
        }
        this.useUsers();
    }catch(err){
        console.warn(err);
        this.emitter.emit('DELETE_USER_ERROR');
    }    
}
