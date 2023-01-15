import Sequelize from 'sequelize';

//deschidem conexiunea cu baza de date
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './BugTracker.db'
});

//descriem ce colectii/tabele avem in baza de date

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID, //uniform unique identifier
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Bug = sequelize.define('bug', {
    id: {
        type: Sequelize.UUID, //uniform unique identifier
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    description: Sequelize.STRING,
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    commitLink: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Project = sequelize.define('project', {
    id: {
        type: Sequelize.UUID, //uniform unique identifier
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    repository: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const project_users = sequelize.define('project_users',{
    uuid: {
        type: Sequelize.UUID, //uniform unique identifier
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    projectId: {
        type: Sequelize.UUID
    },
    userId: {
        type: Sequelize.UUID
    }
})

//descriem relatiile intre colectii
User.hasMany(Bug, {foreignKey: 'userId'}); //un utilizator pot sa ii fie alocate mai multe bugguri
Bug.belongsTo(User, {foreignKey: 'userId'}); //un bug este alocat unui singur utilizator

Project.hasMany(Bug, {foreignKey: 'projectId'});
Bug.belongsTo(Project, {foreignKey: 'projectId'});

// realtie many to many care este stabilita prin intermediul altei tabele
User.belongsToMany(Project, { through: { model: project_users, unique: false}});
Project.belongsToMany(User, { through:  { model: project_users, unique: false}});

async function initialize() {
    await sequelize.authenticate();
    // force:true - se face in teste(nu altereaza baza de date, deoarece sterge tabelele si le reface la repornire)
    // alter:true - actualizeaza tabelele conform modelului
    await sequelize.sync({alter: false});
}

export {
    initialize,
    User, Bug, Project
}