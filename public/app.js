'use strict';
var learnjs = {};

learnjs.problemView = (problemNumber) => {
    var title = 'Problem #' + problemNumber + ' Coming soon!';
    return $('<div class="problem-view">').text(title);
}

learnjs.showView = (hash) => {
    var routes = {
        '#problem': learnjs.problemView
    };
    var hashParts = hash.split('-');
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
}

learnjs.appOnReady = () => {
    window.onhashchange = () => {
        learnjs.showView(window.location.hash);
    }
    learnjs.showView(window.location.hash);
}
