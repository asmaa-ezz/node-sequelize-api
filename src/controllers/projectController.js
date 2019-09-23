import Project from '../models/Project'

export async function createProject(req, res) {
  const { name, priority, description, deliverydate } = req.body;

  try {
    let newProject = await Project.create({
      name, priority, description, deliverydate
    }, {
      fields: ['name', 'priority', 'description', 'deliverydate']
    })
    if (newProject) {
      return res.json({
        message: 'Projct created successfuly',
        data: newProject
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wring',
      data: {},
    })
  }
}

export async function getProject(req, res) {
  try {
    const projects = await Project.findAll();
    res.json({
      data: projects
    })
  } catch (error) {
    console.log('Error ', error);
  }

}

export async function getOneProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id
      }
    });
    res.json({
      data: project
    })
  } catch (error) {
    console.log('Error ', error);
  }
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  const projectDelete = await Project.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'delete project',
    count: projectDelete
  })
}

export async function updataProject(req, res) {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  try {
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
      where: {
        id
      }
    });

    if (projects.length > 0) {
      projects.forEach(async project => {
        await project.update({
          name, priority, description, deliverydate
        })
      })
    }
    res.json({
      message: 'project Updata',
      data: projects
    })
  } catch (error) {
    res.json({
      message: 'error',
      Error: error
    })
  }
}