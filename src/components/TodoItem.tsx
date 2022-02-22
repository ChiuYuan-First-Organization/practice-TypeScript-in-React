import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onRemove: (id: string) => void;
}> = (props) => {
  const { id, text, onRemove } = props;

  const removeHandler = (e: React.MouseEvent) => {
    onRemove(id);
  };

  return (
    <li className={styles.item} onClick={removeHandler}>
      <p>{text}</p>
    </li>
  );
};

export default TodoItem;
