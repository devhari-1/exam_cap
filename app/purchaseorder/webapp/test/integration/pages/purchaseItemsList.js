sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'hari.po.purchaseorder',
            componentId: 'purchaseItemsList',
            contextPath: '/purchaseItems'
        },
        CustomPageDefinitions
    );
});