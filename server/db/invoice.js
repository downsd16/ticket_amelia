import mongoose from 'mongoose';
const { Schema } = mongoose;

let Invoice = new Schema({
    invoiceNum: String,     //Include automatic random generation
    client: Client,
    ticket: Ticket,
    tech: String,           //Create Technician schema or just use name?
    date: Date,
    status: { type: String, enum: ['Open','Paid']},
    workHours: Number,
    workRate: Number,
    mileage: Number,
    parts: { partName: String, partPrice: Number }
})

let invoice = mongoose.model('Invoice')