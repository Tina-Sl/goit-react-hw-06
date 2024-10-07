import s from "./SearchBox.module.css";

const SearchBox = ({ value, handleSelect }) => {
  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel}>
        Find contacts by name
        <input
          className={s.searchInput}
          type="text"
          placeholder=""
          value={value}
          onChange={(e) => handleSelect(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
