import { Card } from 'react-bootstrap';
import { Note as NoteModel } from '../models/note';
import styles from '../styles/Note.module.css';
import styleUtils from '../styles/utils.module.css';
import { formatDate } from '../utils/formatDate';
import { MdDelete } from 'react-icons/md';

interface NoteProps {
  note: NoteModel;
  onNoteClicked: (note: NoteModel) => void;
  onDeleteNoteClicked: (note: NoteModel) => void;
  className?: string;
}

const Note = ({ note, onNoteClicked, onDeleteNoteClicked, className }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createUpdatedDate: string;
  if (updatedAt > createdAt) {
    createUpdatedDate = `Updated: ${formatDate(updatedAt)}`;
  } else {
    createUpdatedDate = `Created: ${formatDate(createdAt)}`;
  }

  return (
    <Card className={`${styles.noteCard} ${className}`} onClick={() => onNoteClicked(note)}>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styleUtils.flexCenter}>
          <span className={`${styles.cardTitle} text-truncate`}>{title}</span>
          <MdDelete
            className="text-muted ms-auto"
            onClick={(e) => {
              onDeleteNoteClicked(note);
              e.stopPropagation();
            }}
          />
        </Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createUpdatedDate}</Card.Footer>
    </Card>
  );
};

export default Note;
