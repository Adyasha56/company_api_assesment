import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: Number },
  foundedYear: { type: Number },
  website: { type: String },
  revenue: { type: Number },
  ceo: { type: String },
  description: { type: String }
}, { timestamps: true });


const Company = mongoose.model("Company", companySchema);

export default Company;
