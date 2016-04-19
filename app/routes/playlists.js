import Ember from 'ember';

var playlists = [{
  id: 1,
  name: 'Boston Ska',
  createdAt: 'Today',
  city: 'Boston',
  tags: ['ska', 'punk'],
  startDate: '2016-04-01',
  endDate: '2016-05-01',
  // TODO: Extract this logic to a yml translation file
  dateRangeAbr: 'Until the end of next month',
  uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}];

export default Ember.Route.extend({
  model() {
     return playlists;
   }
});
