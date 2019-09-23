import { Router } from 'express';
const router = Router();

import { createTask, getTasks, deleteTask, updataTask, getOneTask, getTaskOfProject } from '../controllers/taskController';

router.post('/', createTask);
router.get('/', getTasks);


router.delete('/:id', deleteTask);
router.put('/:id', updataTask);
router.get('/:id', getOneTask);

router.get('/project/:projectid', getTaskOfProject);

export default router;