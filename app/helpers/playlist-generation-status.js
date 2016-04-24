import Ember from 'ember';

export function playlistGenerationStatus([generated]/*, hash*/) {
  if (generated === true) {
    return 'Finished Generating';
  }
  else if (generated === false) {
    return 'Working...(Your playlist will be ready soon!)';
  }
  else {
    return 'Not generating'
  }
}

export default Ember.Helper.helper(playlistGenerationStatus);
