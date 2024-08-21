sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hari/po/purchaseorder/test/integration/FirstJourney',
		'hari/po/purchaseorder/test/integration/pages/purchaseItemsList',
		'hari/po/purchaseorder/test/integration/pages/purchaseItemsObjectPage',
		'hari/po/purchaseorder/test/integration/pages/poitemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, purchaseItemsList, purchaseItemsObjectPage, poitemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hari/po/purchaseorder') + '/index.html'
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