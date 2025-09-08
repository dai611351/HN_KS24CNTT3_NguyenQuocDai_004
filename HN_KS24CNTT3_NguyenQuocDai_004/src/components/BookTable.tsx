import React from "react";
import { Book } from "../bookTypes";
import BookRow from "./BookRow";

interface Props {
  books: Book[];
  onEdit: (b: Book) => void;
  onDelete: (b: Book) => void;
}

export default function BookTable({ books, onEdit, onDelete }: Props) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <BookRow key={b.id} book={b} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}