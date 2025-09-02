import { FC, useEffect, useState } from 'react';
import s from './PopularSearches.module.css';
import searchIcon from '../../assets/icons/search.png';

interface Props {
  setSearchValue: (value: string) => void;
}

export const PopularSearches: FC<Props> = ({ setSearchValue }) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://noxer-test.ru/webapp/api/products?on_main=true');
        if (response.ok) {
          const data = await response.json();
          setCategories(data.special_project_parameters_json.fast_search_strings.parameters_list);
        }
      } catch (err) {
        console.error('Ошибка запроса:', err);
      }
    };
    fetchData();
  }, []);

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
