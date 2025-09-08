import React from "react";
import { Book } from "../bookTypes";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  book: Book;
  onEdit: (b: Book) => void;
  onDelete: (b: Book) => void;
}

export default function BookRow({ book, onEdit, onDelete }: Props) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>
        <button className="icon-btn" onClick={() => onEdit(book)}>
          <Pencil size={16} />
        </button>
        <button className="icon-btn danger" onClick={() => onDelete(book)}>
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
}