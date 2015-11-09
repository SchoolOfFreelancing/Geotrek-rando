'use strict'

angular.module('rando.filiation', [])
    .controller('FiliationController', require('./controllers').FiliationController)
    .directive('childrenListe', require('./directives').ChildrenListeDirective)
    .directive('parentListe', require('./directives').ParentListeDirective);