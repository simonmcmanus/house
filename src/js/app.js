var conf = require('./../../config.js')

$(document).ready(function() {
    function okClicked() {
        console.log('ok clicked', state)

        $.ajax('/state/set/' + state.id)
    }
    function cancelClicked() {
        console.log('cancel clicked')
    }

    var tt = new TopcoatTouch();
    tt.goTo('home');
    $('.state').click(function() {
        state = conf.states[this.id];
        state.id = this.id;
        tt.showDialog('<h3>' + state.name + '</h3><small><small> ' + state.description + ' </small> </small><br/>',
            {
              OK: okClicked,
              Cancel: cancelClicked
            });
    });
});
