import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import ConfirmModal from "./components/ConfirmModal";
import { Book } from "./bookTypes";

const LS_KEY = "book_list";

export default function App() {
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Clean Code" },
      { id: 2, title: "Design Patterns" },
     
    ];
  });

  const [input, setInput] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Book | null>(null);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (!input.trim()) return;
    const newBook: Book = { id: books.length + 1, title: input.trim() };
    setBooks([...books, newBook]);
    setInput("");
  };

  const deleteBook = (book: Book) => {
    setBooks(books.filter((b) => b.id !== book.id));
    setDeleteTarget(null);
  };

  return (
    <div>
      <Header />
      <div className="toolbar">
        <input
          placeholder="Nhập tiêu đề sách"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-btn" onClick={addBook}>+ Thêm sách</button>
      </div>
      <BookTable books={books} onEdit={(b)=>alert("Sửa "+b.title)} onDelete={setDeleteTarget} />

      {deleteTarget && (
        <ConfirmModal
          message="Bạn chắc chắn muốn xóa?"
          onCancel={() => setDeleteTarget(null)}
          onConfirm={() => deleteBook(deleteTarget)}
        />
      )}
    </div>
  );
}