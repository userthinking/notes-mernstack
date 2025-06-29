import React, { useState } from "react";
import { useNotesContext } from "../context/NotesContext";
import { deleteNote, updateNote } from "../api/notes";
import { toast } from "react-toastify";

const Note = ({ note }) => {
  const today = new Date(note.createdAt);
  const formattedToday = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { setNotes } = useNotesContext();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: note.title, body: note.body });

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    await deleteNote(note._id);
    setNotes((prev) => prev.filter((n) => n._id !== note._id));
    toast.success("Note deleted");
  };

  const handleUpdate = async () => {
    const updated = await updateNote(note._id, form);
    setNotes((prev) => prev.map((n) => (n._id === note._id ? updated : n)));
    toast.success("Note updated");
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setForm({ title: note.title, body: note.body });
    setEditMode(false);
  };

  const resolvedBgColor = note.bgColor && note.bgColor !== "#FFFFFF" ? note.bgColor : "#FEC971";

  return (
    <div
      className="group rounded-2xl p-6 w-72 h-64 shadow-lg relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ backgroundColor: resolvedBgColor }}
    >
      {editMode ? (
        <div className="h-full flex flex-col">
          {/* Edit Title */}
          <input
            className="text-black text-lg font-semibold bg-transparent border-b-2 border-black/30 mb-3 w-full outline-none focus:border-black/60 transition-colors duration-200"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            autoFocus
          />
          
          {/* Edit Body */}
          <textarea
            className="text-gray-800 font-medium text-sm leading-relaxed overflow-auto flex-1 w-full bg-transparent border border-black/30 rounded-lg p-2 outline-none focus:border-black/60 transition-colors duration-200 resize-none mb-12"
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          
          {/* Edit Action Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-200 shadow-lg"
              title="Cancel"
            >
              ✕
            </button>
            <button 
              onClick={handleUpdate}
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-200 shadow-lg"
              title="Save"
            >
              ✓
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          {/* Note Title */}
          <h2 className="text-black text-lg font-semibold leading-snug truncate mb-3">
            {note.title}
          </h2>
          
          {/* Note Body */}
          <div className="text-gray-800 font-medium text-sm leading-relaxed overflow-auto flex-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pr-2">
            {note.body}
          </div>
          
          {/* Date */}
          <p className="text-sm text-black/70 mt-4 font-medium">
            {formattedToday}
          </p>
          
          {/* Action Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg"
              title="Delete Note"
            >
              🗑️
            </button>
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-lg"
              title="Edit Note"
            >
              ✏️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;