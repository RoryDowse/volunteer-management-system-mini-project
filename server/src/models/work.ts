import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Volunteer } from './volunteer.js';

interface WorkAttributes {
  id: number;
  name: string;
  status: string;
  description: string;
  assignedVolunteerId?: number;
}

interface WorkCreationAttributes extends Optional<WorkAttributes, 'id'> {}

export class Work extends Model<WorkAttributes, WorkCreationAttributes> implements WorkAttributes {
  /* TODO: 
    Create properties of Work: */
    public id!: number;
    public name!: string;
    public status!: string;
    public description!: string;
    public assignedVolunteerId?: number;
    public readonly assignedVolunteer?: Volunteer; 
}

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
        model: 'volunteers',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'Work',
    timestamps: false,
  });

  return Work;
}
