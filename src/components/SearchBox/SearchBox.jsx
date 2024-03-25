import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.searchBoxInput}
      />
    </div>
  );
};

export default SearchBox;
