var DynamooseAdapter = function () {};

DynamooseAdapter.prototype.build = function(Model, props) {
  return new Model(props);
};

DynamooseAdapter.prototype.get = function(model, attr, Model) {
  return model[attr];
};

DynamooseAdapter.prototype.set = function(props, model, Model) {
  const newModel = new Model(model);
  Object.keys(props).forEach(key => {
    newModel[key] = props[key];
  });

  return newModel;
};

DynamooseAdapter.prototype.save = function(model, Model) {
  return model.save();
};

DynamooseAdapter.prototype.destroy = function(model, Model) {
  return model.delete();
};

module.exports = DynamooseAdapter;
