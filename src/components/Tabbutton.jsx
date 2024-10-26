function TabButton(props) {
  return (
    <button
      className={props.isSelected ? 'active' : undefined}
      onClick={props.onSelect}
    >
      {props.children}
    </button>
  );
}

export default TabButton;
