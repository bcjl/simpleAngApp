// angular.module('i18nService', ['ngResource'])
//   .constant('config', window.eventsConfig)
//   .factory('eventService', ['$rootScope', '$resource', 'config',
//     function($rootScope, $resource, config){
//       return $resource(config.eventsLocation + '/events/:id', null, 
//       {
//           update: {
//            method: 'PUT'
//           }
//         });
//     }
//   ])