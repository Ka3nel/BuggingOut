import express from 'express';
import {User, Bug, Project} from './repository.mjs';
import {
    //functii generale
    getElements, postElement, deleteElements,                           //randuri multiple
    getElement, headElement, putElement, patchElement, deleteElement,   //randuri dupa id
    //functii specifice
    getProjectUsers, getProjectUser,                                    //utilizator/i dupa id-ul unui proiect
    getUserProjects,                                                    //proiectele dupa id-ul unui utilizator
    postProjectUser,                                                    //creare legatura intre id-ul unui proiect si id-ul unui utilizator
    getProjectBugs                                                      //bug-uri dupa id-ul unui proiect
} from './service.mjs';

const router = express.Router();

router.route('/users')
    .get((req, res) => getElements(User, req, res))
    .post((req, res) => postElement(User, req, res))
    .delete((req, res) => deleteElements(User, req, res));

router.route('/users/:id')
    .get((req, res) => getElement(User, req, res))
    .head((req, res) => headElement(User, req, res))
    .put((req, res) => putElement(User, req, res))      //inlocuire
    .patch((req, res) => patchElement(User, req, res))  //actualizare
    .delete((req, res) => deleteElement(User, req, res));

router.route('/bugs')
    .get((req, res) => getElements(Bug, req, res))
    .post((req, res) => postElement(Bug, req, res))
    .delete((req, res) => deleteElements(Bug, req, res));

router.route('/bugs/:id')
    .get((req, res) => getElement(Bug, req, res))
    .head((req, res) => headElement(Bug, req, res))
    .put((req, res) => putElement(Bug, req, res))
    .patch((req, res) => patchElement(Bug, req, res))
    .delete((req, res) => deleteElement(Bug, req, res));

router.route('/projects')
    .get((req, res) => getElements(Project, req, res))
    .post((req, res) => postElement(Project, req, res))
    .delete((req, res) => deleteElements(Project, req, res));

router.route('/projects/:id')
    .get((req, res) => getElement(Project, req, res))
    .head((req, res) => headElement(Project, req, res))
    .put((req, res) => putElement(Project, req, res))
    .patch((req, res) => patchElement(Project, req, res))
    .delete((req, res) => deleteElement(Project, req, res));

router.route('/projects/:projectId/users')
    .get((req, res) => getProjectUsers(req, res));

router.route('/projects/:projectId/users/:userId')
    .get((req, res) => getProjectUser(req, res))
    .post((req, res) => postProjectUser(req, res));

router.route('/users/:userId/projects')
    .get((req, res) => getUserProjects(req, res));

router.route('/projects/:projectId/bugs')
    .get((req, res) => getProjectBugs(req, res));

export default router;