import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  public password: string;

  public firstName: string;

  public lastName: string;

  public role: string;

  public email: string;

  public cpf: string;

  public id: number;

  public status: string;

  get userData() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role,
      email: this.email,
      cpf: this.cpf,
      status: this.status,
    };
  }
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'customer',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false,
  },
);

export default User;
