import Task from '../models/Tasks';

export async function createTask(req, res) {
  const { name, done, projectid } = req.body;

  try {
    const task = await Task.create({
      name, done, projectid
    }, {
      fields: ['name', 'done', 'projectid'],
    })

    res.json({
      message: 'Task created successfuly',
      data: task
    })
  } catch (e) {
    console.log('Error : ', e);

  }
}


export async function getTasks(req, res) {
  const tasks = await Task.findAll({
    attributes: ['id', 'name', 'done', 'projectid'],
    order: [
      ['id', 'DESC']
    ]
  })
  res.json({
    data: tasks
  })
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  const taskDelete = await Task.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'delete task',
    count: taskDelete
  })
}

export async function updataTask(req, res) {
  const { id } = req.params;
  const { name, done, projectid } = req.body;

  const task = await Task.findOne({
    attributes: ['name', 'done', 'projectid', 'id'],
    where: { id }
  });

  if (!task) {
    return res.json({
      message: 'Not Exist'
    })
  }

  const updatTask = await Task.update({
    name, done, projectid
  }, {
    where: { id }
  })

  res.json({
    message: 'task Updata',
    data: updatTask
  })
}


export async function getOneTask(req, res) {
  const { id } = req.params;
  const task = await Task.findOne({
    where: { id },
    attributes: ['name', 'done', 'projectid', 'id'],
  });
  res.json({ task })
}

export async function getTaskOfProject(req, res) {
  console.log('00000000000000000000');

  const { projectid } = req.params;
  const tasks = await Task.findAll({
    attributes: ['name', 'done', 'projectid', 'id'],
    where: { projectid },
  });
  res.json({ tasks })
}