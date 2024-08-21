namespace ust.hari.saripalli.db;
using { cuid, managed, Currency} from '@sap/cds/common';
using {ust.hari.saripalli.reuse as reuse} from './common.cds';

entity Employee : cuid{
    nameFirst :String(40);
    nameMiddle:String(40);
    nameLast:String(40);
    nameInitials:String(40);
    Gender :reuse.Gender;
    Language:String(1);
    phoneNumber:reuse.PhoneNumber;
    Email:reuse.Email;
    loginName:String(12);
    Currency:Currency;	
    salaryAmount:Decimal(10,2);
    accountNumber:String(16);
    bankId:String(8);
    bankName:String(64)
}

