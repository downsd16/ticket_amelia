import mongoose from 'mongoose';
const { Schema } = mongoose;

let ticketSchema = new Schema({
    name: String,
    tech: String,
    date: { type: Date, default: Date.now },
    issue: String,
    comments: [{ body: String, date: Date , tech: String }],
    total: Number,
    sys_info: [{
        make: { type: String, enum: ['Acer','Asus','Dell','Lenovo','HP','Other'], required: true },
        model: String,
        
    }]
})