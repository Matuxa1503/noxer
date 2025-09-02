import { FC, useContext } from 'react';
import s from './PopularSearches.module.css';
import searchIcon from '../../assets/icons/search.png';
import { AppDataContext } from '../../AppDataContext';

interface Props {
  setSearchValue: (any) => void;
}

export const PopularSearches: FC<Props> = ({ setSearchValue }) => {
  const { data } = useContext(AppDataContext);
  const categories = data.special_project_parameters_json.fast_search_strings.parameters_list;

  return (
    <div className={s.wrapper}>
      <h2 className={s.subtitle}>Часто ищут</h2>
      <ul>
        {categories &&
          categories.length > 0 &&
          categories.map((item, ind) => (
            <div onClick={() => setSearchValue(item)} key={ind} className={s.item}>
              <img src={searchIcon} alt="search" />
              <li>{item}</li>
            </div>
          ))}
      </ul>
    </div>
  );
};
