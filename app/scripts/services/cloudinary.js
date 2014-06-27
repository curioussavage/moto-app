'use strict';

angular.module('motoApp')
  .service('Cloudinary', function Cloudinary() {
    // AngularJS will instantiate a singleton by calling "new" on this function

        $.cloudinary.config({ cloud_name: 'dqap5oe1c', api_key: '814527148842816'})



    });
