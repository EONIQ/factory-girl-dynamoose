var DynamooseAdapter = function () {};

DynamooseAdapter.prototype.build = function(Model, props) {
  return new Model(props);
};

DynamooseAdapter.prototype.get = function(model, attr, Model) {
  return model[attr];
};

DynamooseAdapter.prototype.set = function(props, model, Model) {
  return Model.update(model, props);
};

DynamooseAdapter.prototype.save = function(model, Model, callback) {
  return Promise.resolve(model.save()).then(() => model);
};

DynamooseAdapter.prototype.destroy = function(model, Model, callback) {
  return Promise.resolve(model.delete()).then(() => model);
};

module.exports = DynamooseAdapter;
