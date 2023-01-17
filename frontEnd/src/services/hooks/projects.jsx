
const SERVER = "http://localhost:8080/api";

export const useProjects = async () => {
    const response = await fetch(`${SERVER}/projects`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
}

export const getProjectById = async (id) => {
    const response = await fetch(`${SERVER}/projects/${id}`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
}

export const createProject = async (project) => {
    try{
        const response = await fetch(`${SERVER}/projects`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        });
        if (!response.ok) {
            throw response
        }
        this.useProjects();
    }catch(err){
        console.warn(err);
    }    
}

export const updateProject = async (id, project) => {
    try{
        const response = await fetch(`${SERVER}/projects/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        });
        if (!response.ok) {
            throw response
        }
        this.useProjects();
    }catch(err){
        console.warn(err);
    }    
}

export const deleteProject = async (id) => {
    try{
        const response = await fetch(`${SERVER}/projects/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw response
        }
        this.useProjects();
    }catch(err){
        console.warn(err);
    }    
}


