import React, { useState, useEffect } from "react";

// Company Card
const CompanyCard = ({ company, onDelete, onEdit }) => (
  <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition p-4">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-blue-900 font-bold text-lg">{company.name}</h3>
      <div className="flex gap-2">
        <button onClick={() => onEdit(company)} className="text-blue-500 hover:text-blue-800 text-sm">
          Edit
        </button>
        <button onClick={() => onDelete(company._id)} className="text-red-500 hover:text-red-700 text-sm">
          Delete
        </button>
      </div>
    </div>
    <div className="space-y-1 text-sm text-gray-700">
      <p><b>Industry:</b> {company.industry}</p>
      <p><b>Location:</b> {company.location}</p>
      {company.ceo && <p><b>CEO:</b> {company.ceo}</p>}
      {company.foundedYear && <p><b>Founded:</b> {company.foundedYear}</p>}
      {company.size && <p><b>Size:</b> {company.size} employees</p>}
      {company.revenue && <p><b>Revenue:</b> ₹{company.revenue.toLocaleString()}</p>}
      {company.website && (
        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visit Website
        </a>
      )}
    </div>
  </div>
);

// Filter Form
const FilterForm = ({ onFilter }) => {
  const [filters, setFilters] = useState({ industry: "", location: "", size: "" });

  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const clearFilters = () => {
    setFilters({ industry: "", location: "", size: "" });
    onFilter({});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap gap-3">
      <input
        name="industry"
        placeholder="Industry"
        value={filters.industry}
        onChange={handleChange}
        className="border rounded px-3 py-2 flex-1"
      />
      <input
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
        className="border rounded px-3 py-2 flex-1"
      />
      <input
        name="size"
        type="number"
        placeholder="Min Size"
        value={filters.size}
        onChange={handleChange}
        className="border rounded px-3 py-2 flex-1"
      />
      <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Apply</button>
      <button type="button" onClick={clearFilters} className="bg-gray-400 text-white px-4 py-2 rounded">Clear</button>
    </form>
  );
};

// Add/Edit Form
const CompanyForm = ({ company, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "", industry: "", location: "", ceo: "", foundedYear: "", size: "", revenue: "", website: ""
  });

  useEffect(() => { if (company) setFormData(company); }, [company]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{company ? "Edit Company" : "Add Company"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input name="industry" placeholder="Industry*" value={formData.industry} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input name="location" placeholder="Location*" value={formData.location} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          <input name="ceo" placeholder="CEO" value={formData.ceo} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="foundedYear" type="number" placeholder="Founded Year" value={formData.foundedYear} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="size" type="number" placeholder="Size" value={formData.size} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="revenue" type="number" placeholder="Revenue" value={formData.revenue} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <div className="flex gap-3 mt-4">
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded flex-1">Save</button>
            <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded flex-1">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

//Main App
const App = () => {
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = "http://localhost:5000/api/companies";

  const fetchCompanies = async (filters = {}) => {
    setLoading(true);
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(query ? `${API_BASE}?${query}` : API_BASE);
    const data = await res.json();
    setCompanies(data);
    setLoading(false);
  };

  const saveCompany = async (formData) => {
    const url = editingCompany ? `${API_BASE}/${editingCompany._id}` : API_BASE;
    const method = editingCompany ? "PUT" : "POST";
    await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
    setShowForm(false);
    setEditingCompany(null);
    fetchCompanies();
  };

  const deleteCompany = async (id) => {
    if (!window.confirm("Delete this company?")) return;
    await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
    fetchCompanies();
  };

  useEffect(() => { fetchCompanies(); }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Company Handler</h1>
          <button onClick={() => setShowForm(true)} className="bg-blue-900 text-white px-4 py-2 rounded">+ Add Company</button>
        </div>
        <FilterForm onFilter={fetchCompanies} />
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((c) => (
              <CompanyCard key={c._id} company={c} onDelete={deleteCompany} onEdit={(c) => { setEditingCompany(c); setShowForm(true); }} />
            ))}
          </div>
        )}
        {showForm && (
          <CompanyForm
            company={editingCompany}
            onSave={saveCompany}
            onCancel={() => { setShowForm(false); setEditingCompany(null); }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
