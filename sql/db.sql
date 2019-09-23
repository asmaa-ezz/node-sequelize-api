BEGIN ;

CREATE TABLE IF NOT EXISTS projects (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId integer REFERENCES projects(id)
);

COMMIT ;


INSERT INTO projects(name, priority, description, deliverydate) VALUES('WEB APP', 1, 'JS', '2019-05-12');

INSERT INTO tasks(name, done, projectId) VALUES('REACT', false , 1);