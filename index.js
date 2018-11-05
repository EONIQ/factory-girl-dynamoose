var DynamooseAdapter = function () {};

DynamooseAdapter.prototype.build = function(Model, props) {
  return new Model(props);
};

DynamooseAdapter.prototype.get = function(model, attr, Model) {
  return model[attr];
};

DynamooseAdapter.prototype.set = function(props, model, Model) {
  Object.keys(props).forEach(key => {
    model[key] = props[key];
  });

  return model;
};

DynamooseAdapter.prototype.save = function(model, Model, callback) {
  return model.save();
};

DynamooseAdapter.prototype.destroy = function(model, Model, callback) {
  return model.delete();
};

module.exports = DynamooseAdapter;
