import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Volunteer } from './volunteer.js';

// Define the structure of the Work model with properties
interface WorkAttributes {
  id: number;
  name: string;
  status: string;
  description: string;
  assignedVolunteerId?: number;
}


// Define the attributes required for creating a work item
// Allows "id" to be auto-generated through autoIncrement
interface WorkCreationAttributes extends Optional<WorkAttributes, 'id'> {}

// Extend the Model with the Work class and implement the WorkAttributes interface for specified attributes
export class Work extends Model<WorkAttributes, WorkCreationAttributes> implements WorkAttributes {
  /* TODO: 
    Create properties of Work: */
    public id!: number;
    public name!: string;
    public status!: string;
    public description!: string;
    public assignedVolunteerId?: number;
    public readonly assignedVolunteer?: Volunteer; // Establish connection with Volunteer model
}

// Initialize the Work model with the WorkFactory function and return the model
export function WorkFactory(sequelize: Sequelize): typeof Work {
  // TODO: Initialize the Work Model
  Work.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    assignedVolunteerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'volunteers', // link to volunteers table via foreign key
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'Work',
    tableName: 'works',
    timestamps: false, // don't create createdAt and updatedAt columns
  });

  return Work;
}
