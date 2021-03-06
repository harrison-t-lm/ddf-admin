/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details. A copy of the GNU Lesser General Public License is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
/* jshint unused: false */
/*global define*/
define([
    'js/application',
    '/installer/js/views/InstallerMain.view.js',
    '/installer/js/models/Installer.js',
    '/installer/templateConfig.js'
    ], function(Application, InstallerMainView, InstallerModel) {

    Application.App.module('Installation', function(AppModule, App, Backbone, Marionette, $, _) {

        var installerModel = new InstallerModel.Model();
        //welcome
        //config
        //apps
        installerModel.setTotalSteps(3);

        // Define a view to show
        // ---------------------

        var installerPage = new InstallerMainView({model: installerModel});

        // Define a controller to run this module
        // --------------------------------------

        var Controller = Marionette.Controller.extend({

            initialize: function(options){
                this.region = options.region;
            },

            show: function(){
                this.region.show(installerPage);
            }

        });

        //            contentRegion: '#content-region'
        // Initialize this module when the app starts
        // ------------------------------------------

        AppModule.addInitializer(function(){
            AppModule.contentController = new Controller({
                region: App.installation
            });
            AppModule.contentController.show();
        });


    });
});