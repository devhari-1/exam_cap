const srv = require('@sap/cds');

class purchaseOrder extends cds.ApplicationService{
    init(){
        const {purchaseItems} = this.entities;
        
        this.on('CREATE', 'purchaseItems', async (req)=>{
            const data = req.data;
            return await INSERT.into(purchaseItems).entries(data);
        });


        this.after('CREATE', 'purchaseItems', async (req) => {
            console.log('Create operation successful');
        });
        return super.init();
    }
}

module.exports = purchaseOrder;