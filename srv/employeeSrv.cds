using { ust.hari.saripalli.db as bs} from '../db/datamodel';

service employeeSrv @(path:'employeeSrv') {

    entity Employee as projection on bs.Employee;

};