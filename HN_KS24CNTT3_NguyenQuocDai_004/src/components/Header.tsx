import React from "react";
import { BookOpen } from "lucide-react"; 

export default function Header() {
  return (
    <header className="header">
      <BookOpen size={28} style={{ marginRight: 8 }} />
      <h1>Quản lý sách</h1>
    </header>
  );
}