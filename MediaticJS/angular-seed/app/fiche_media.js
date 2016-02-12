
(function () {
	'use strict';
	
	angular
			.module('app.media.fiche', [])
			.config(
					function($routeProvider) {
						$routeProvider
								.when(
										'/fiche_media',
										{
												templateUrl : 'fiche_media.html',
												controller : 'ficheMediaController',
												controllerAs : 'ficheMediaCtrl'
										}
						);

					}
			)
			.controller(
					'ficheMediaController',
					function (serviceMedia, typeOptions) {
						var ficheMediaCtrl = this;

						ficheMediaCtrl.formMedia = {};
						ficheMediaCtrl.formMedia.typesMedia = typeOptions.list;
						
						ficheMediaCtrl.updateMedia = function () {
							serviceMedia.updateListMedia(ficheMediaCtrl.formMedia.media);
						}
					}
			);
})();
