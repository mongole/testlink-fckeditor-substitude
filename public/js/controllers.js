'use strict';

//var convert = require('./lib/html2markdown.js' )

/* Controllers */

function AppCtrl($scope, $http) {
    $http({method: 'GET', url: '/api/name'}).
        success(function (data, status, headers, config) {
            $scope.name = data.name;
        }).
        error(function (data, status, headers, config) {
            $scope.name = 'Error!'
        });
}

function TestlinkEditorCtrl($scope, $http) {

    $scope.sourceHtml = '';
    $scope.markdown = '';
    $scope.outHtml = '';
    $scope.changedSoureHtml = function () {
        // alert('asdf');
        console.log('update markdown field.');
        /*        var md = $http({method: 'GET',
         url: 'http://johnmacfarlane.net/cgi-bin/trypandoc',
         from: 'html',
         to: 'markdown',
         text: $scope.sourceHtml})
         .success(function (data, status, headers, config) {
         console.log('got from service: ' + status);
         $scope.markdown = data;
         })
         .error(function (data, status, headers, config) {
         console.log('wrong responce');
         $scope.markdown = 'Error in communication.';
         });*/
        $scope.markdown = $scope.sourceHtml.replace(/<p>/, '')
            .replace(/<\/p>/g, '')
            .replace(/<p>/g, '')
            .replace(/&Auml;/g, 'Ä')
            .replace(/&ouml;/g, 'ö')
            .replace(/&Ouml;/g, 'Ö')
            .replace(/&uuml;/g, 'ü')
            .replace(/&Uuml;/g, 'Ü')
            .replace(/&szlig;/g, 'ß')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&nbsp;/g, '');
        $scope.changedMarkdown();
    }
    $scope.changedMarkdown = function () {
        console.log('update target HTML field.')
        $scope.outHtml = '<p>&nbsp;' + $scope.markdown.replace(/ä/, '&auml;')
            .replace(/Ä/g, '&Auml;')
            .replace(/ö/g, '&ouml;')
            .replace(/Ö/g, '&Ouml;')
            .replace(/ü/g, '&uuml;')
            .replace(/Ü/g, '&Uuml;')
            .replace(/ß/g, '&szlig;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/\n/g, '</p>\n')
            .replace(/\n/g, '\n<p>') + '</p>';

    }
}
TestlinkEditorCtrl.$inject = ['$scope', '$http'];


function MyCtrl1() {
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

