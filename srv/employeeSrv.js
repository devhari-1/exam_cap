const srv = require('@sap/cds');

class employeeSrv extends cds.ApplicationService{
    init(){
        const {Employee} = this.entities;
        this.before('CREATE', 'Employee', async (req) => {
            const { salaryAmount, currency } = req.data;
            if (currency !== 'USD' && salaryAmount > 50000) {
                req.error(400, "Employee's salary must be less than 50000 USD");
            }
        });

        this.on('CREATE', 'Employee', async (req)=>{
            const data = req.data;
            return await INSERT.into(Employee).entries(data);
        });


        this.after('CREATE', 'Employee', async (req) => {
            console.log('Create operation successful');
        });



        this.before('UPDATE', 'Employee', async (req) => {
            const { nameFirst, loginName } = req.data;
            if (nameFirst !== req.data.nameFirst && loginName !== req.data.loginName) {
                req.error(400, "Operation not allowed");
            }
        });

        // this.on('UPDATE', 'Employee', async (req)=>{
        //     const data = req.data;
        //     return await UPSERT.into(Employee).entries(data);
        // });
        this.after('UPDATE', 'Employee', async (req) => {
            console.log('Update operation successful');
        });
    
        // DELETE
        this.before('DELETE', 'Employee', async (req) => {
            const { nameFirst } = await SELECT.one.from(Employee).where({ cuid: req.params[0] });
            if (nameFirst.startsWith('S')) {
                req.error(400, "Cannot delete employee whose first name starts with 'S'");
            }
        });
    
        this.after('DELETE', 'Employee', async (req) => {
            console.log('Delete operation successful');
        });
        return super.init();
    }
}

module.exports = employeeSrv;