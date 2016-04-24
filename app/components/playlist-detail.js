import Ember from 'ember';

export default Ember.Component.extend({
  areDetailsShowing: false,
  actions: {
    detailsShow() {
      this.set('areDetailsShowing', true);
    },
    detailsHide() {
      this.set('areDetailsShowing', false);
    }
  }
});
