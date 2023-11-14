import { useMemo } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchBarFlexShrink }) => {
  const searchBarStyle = useMemo(() => {
    return {
      flexShrink: searchBarFlexShrink,
    };
  }, [searchBarFlexShrink]);

  return (
    <div className={styles.searchBar} style={searchBarStyle}>
      <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
      <div className={styles.searchForApps}>
        Search for apps, files, templates and more
      </div>
    </div>
  );
};

export default SearchBar;
