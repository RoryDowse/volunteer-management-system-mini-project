import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
// Define the structure of the Volunteer model with properties
interface VolunteerAttributes {
  id: number;
  volunteerName: string;
}

// Define the attributes required for creating a new volunteer
// Allows "id" to be auto-generated through autoIncrement
interface VolunteerCreationAttributes extends Optional<VolunteerAttributes, 'id'> {}

// Extend the Model with the Volunteer class and implement the VolunteerAttributes interface for specified attributes
export class Volunteer extends Model<VolunteerAttributes, VolunteerCreationAttributes> implements VolunteerAttributes {
  /* TODO: 
    Create id and volunteerName properties */
    public id!: number; 
    public volunteerName!: string;
}

// Initialize the Volunteer model with the VolunteerFactory function and return the model
export function VolunteerFactory(sequelize: Sequelize): typeof Volunteer {
  // TODO: Initialize the Volunteer Model
  Volunteer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    volunteerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Volunteer',
    tableName: 'volunteers',
    timestamps: false, // don't create createdAt and updatedAt columns
  });
  
  return Volunteer;
}
