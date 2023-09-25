import mongoose from 'mongoose';
const { Schema } = mongoose;

let ticketSchema = new Schema({
    tech: { type: String, required: true },
    client: { type: Client, required: true },
    date: { type: Date, default: Date.now },
    status: [{ type: String, enum: ['Open','Active','Escalation','Closed'] }],  //Confirm enum options
    issueDescription: String,
    comments: [{ body: String, date: Date , tech: String }],    //Replace with custom Schema for comment?
    workEstimate: Number,
    systemInfo: [{
        deviceType: { type: String, enum: [ 'Laptop','Desktop' ], required: true}, 
        deviceMake: { type: String, enum: ['Acer','Asus','Dell','Lenovo','HP','Other'], required: true },
        modelNumber: String
    }]
})

let Ticket = mongoose.model('Ticket')