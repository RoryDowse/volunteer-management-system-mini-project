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
    public static associations: {
      assignedVolunteer: Association<Work, Volunteer>;
    };
}

export function WorkFactory(sequelize: Sequelize): typeof Work {
  // TODO: Initialize the Work Model
  return Work;
}
