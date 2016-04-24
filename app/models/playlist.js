import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  created_at: DS.attr(),
  city: DS.attr(),
  tags: DS.attr(),
  date_range: DS.attr(),
  uri: DS.attr()
});
