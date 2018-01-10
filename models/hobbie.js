module.exports = (sequelize, DataType) => {
  const hobbie = sequelize.define('hobbie', {
    id_hobbie: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataType.STRING(300),
      allowNull: true,
    },
    fid_persona: {
      type: DataType.INTEGER,
      allowNull: false,
    },
  });

  hobbie.associate = (models) => {
    hobbie.belongsTo(models.persona, { as: 'persona', foreignKey: {name: 'fid_persona', allowNull: false}});
  }

  return hobbie;
};