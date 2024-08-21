sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project/test/integration/FirstJourney',
		'project/test/integration/pages/purchaseItemsList',
		'project/test/integration/pages/purchaseItemsObjectPage',
		'project/test/integration/pages/poitemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, purchaseItemsList, purchaseItemsObjectPage, poitemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepurchaseItemsList: purchaseItemsList,
					onThepurchaseItemsObjectPage: purchaseItemsObjectPage,
					onThepoitemsObjectPage: poitemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);