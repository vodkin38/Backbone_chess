require.config({
    paths: {
        fielddata:'fielddata',
        jquery:'jquery',
        sample: 'sample',
        underscore: 'underscore',
        backbone: 'backbone'
    },
    shim: {
        fielddata: {
            exports: 'fielddata'
        },
        jquery: {
            exports: 'jquery'
        },
        sample: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'sample'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
    },

    baseUrl: 'js'
});
require(['sample'],
    function (script) {
        script.init();
    });