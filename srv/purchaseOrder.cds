using { ust.hari.saripalli.datamodel as bs} from '../db/datamodel2';

service purchaseOrder @(path:'purchaseOrder') {

    entity purchaseItems  as projection on bs.transaction.purchaseorder{
        *,
        Items
    };

};