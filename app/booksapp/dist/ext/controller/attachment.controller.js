sap.ui.controller("booksapp.ext.controller.attachment",{onInit:function(){this.extensionAPI.attachPageDataLoaded(function(t){var e=t.context.getObject();this.getView().byId("ui5DocumentTable").getComponentInstance().requestNavigationAndOpen(e.repositoryId,e.folderId)}.bind(this))}});