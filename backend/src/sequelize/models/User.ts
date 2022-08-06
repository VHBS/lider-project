import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  public password: string;

  public username: string;

  public role: string;

  public email: string;

  public id: number;

  get userData() {
    return {
      id: this.id,
      username: this.username,
      role: this.role,
      email: this.email,
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
