import sequelize from '../config/connection.js';
import { VolunteerFactory } from './volunteer.js';
import { WorkFactory } from './work.js';


// TODO: Create a One-to-Many relationship (Volunteer can have numerous volunteer works)
// Initialize models
const Volunteer = VolunteerFactory(sequelize);
const Work = WorkFactory(sequelize);

// Set up the associations
function setupAssociations() {
    Volunteer.hasMany(Work, {
        foreignKey: 'assignedVolunteerId'
    });
    Work.belongsTo(Volunteer, {
        foreignKey: 'assignedVolunteerId'
    });
}

setupAssociations();

export { Volunteer, Work, setupAssociations };
