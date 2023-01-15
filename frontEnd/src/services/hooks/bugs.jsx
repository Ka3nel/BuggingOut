
const SERVER = "http://localhost:8080/api";

export const useBugs = async () => {
    const response = await fetch(`${SERVER}/bugs`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
}

export const getBugById = async (id) => {
    const response = await fetch(`${SERVER}/bugs/${id}`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
}

// //actualizare bug
// export const updateBug = async (id, bug) => {
//     try{
//         const response = await fetch(`${SERVER}/bug/${id}`, {
//             method: 'PATCH', 
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(bug)
//         });
//         if (!response.ok) {
//             throw response
//         }
//         this.useBugs();
//     }catch(err){
//         console.warn(err);
//         this.emitter.emit('UPDATE_BUG_ERROR');
//     }    
// }


export const createBug = async (bug) => {
    try{
        const response = await fetch(`${SERVER}/bugs`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bug)
        });
        if (!response.ok) {
            throw response
        }
        this.useBugs();
    }catch(err){
        console.warn(err);
        // this.emitter.emit('ADD_BUG_ERROR');
    }    
}

export const addBugByUserId = async (userId, bug) => {
    try{
        const response = await fetch(`${SERVER}/bugs/${userId}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bug)
        });
        if (!response.ok) {
            throw response
        }
        this.useBugs();
    }catch(err){
        console.warn(err);
    }    
}

export const updateBug = async (id, bug) => {
    try{
        const response = await fetch(`${SERVER}/bugs/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bug)
        });
        if (!response.ok) {
            throw response
        }
        this.useBugs();
    }catch(err){
        console.warn(err);
        // this.emitter.emit('UPDATE_BUG_ERROR');
    }    
}

export const deleteBug = async (id) => {
    try{
        const response = await fetch(`${SERVER}/bugs/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw response
        }
        this.useBugs();
    }catch(err){
        console.warn(err);
        // this.emitter.emit('DELETE_BUG_ERROR');
    }    
}


