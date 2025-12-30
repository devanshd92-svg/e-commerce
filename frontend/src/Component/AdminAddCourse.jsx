import React, { useState } from "react";

const AdminAddCourse = ({ onNewCourse }) => {
  const [form, setForm] = useState({
   
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/create-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Course Added Successfully");
       onNewCourse(data.course);
      setForm({
        categoryTitle: "",
        categoryDescription: "",
        title: "",
        description: "",
        price: "",
      });
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex justify-center mt-20  w-full h-200 items-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-96">
        {/* <input value={form.categoryTitle} name="categoryTitle" placeholder="Category Title" onChange={handleChange} /> */}
        {/* <input value={form.categoryDescription} name="categoryDescription" placeholder="Category Description" onChange={handleChange} /> */}
        <input value={form.title} name="title" placeholder="Course Title" onChange={handleChange} />
        <textarea value={form.description} name="description" placeholder="Course Description" onChange={handleChange} />
        <input value={form.price} name="price" type="number" placeholder="Price" onChange={handleChange} />
        <button className="bg-blue-500 text-white px-6 py-2 rounded w-full">Add Course</button>
      </form>
    </div>
  );
};

export default AdminAddCourse;
