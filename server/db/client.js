import mongoose from 'mongoose';
const { Schema } = mongoose;

let clientSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    street: { type: String, required: true },
    state: { 
        type: String, enum: [
            AK, AL, AR, AS, AZ, CA, CO, CT, DC, DE, FL, GA, GU, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MP, 
            MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, PR, RI, SC, SD, TN, TX, UM, UT, VA, VI, VT, WA, WI, WV, WY
        ]},
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    workPhone: Number,
    homePhone: Number,
    cellPhone: { type: Number, required: true },
    clientEmail: { type: String, required: true },
    tickets: Ticket,
    invoices: Invoice
})

let Client = mongoose.model('Client')