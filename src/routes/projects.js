import { Router } from 'express';
const router = Router();

import { createProject, getProject, getOneProject, deleteProject, updataProject } from '../controllers/projectController'


router.post('/', createProject)
router.get('/', getProject)

router.get('/:id', getOneProject)
router.delete('/:id', deleteProject)
router.put('/:id', updataProject)

export default router;