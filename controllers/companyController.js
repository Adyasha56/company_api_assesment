import Company from "../models/Company.js";

// Create
export const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    const saved = await company.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All + Filters
export const getCompanies = async (req, res) => {
  try {
    const filters = {};
    if (req.query.industry) filters.industry = req.query.industry;
    if (req.query.location) filters.location = req.query.location;
    if (req.query.size) filters.size = req.query.size;

    const companies = await Company.find(filters);
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get One
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: "Not found" });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updateCompany = async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
export const deleteCompany = async (req, res) => {
  try {
    const deleted = await Company.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Company deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
