import { FC, useEffect, useState } from 'react';
import s from './PopularSearches.module.css';
import searchIcon from '../../assets/icons/search.png';
import { fetchDataOnMain } from '../../api';

interface Props {
  setSearchValue: (value: string) => void;
}

export const PopularSearches: FC<Props> = ({ setSearchValue }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchDataOnMain();
      console.log('on_main=true', data);
      setCategories(data.special_project_parameters_json.fast_search_strings.parameters_list);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className={s.wrapper}>
      <h2 className={s.subtitle}>Часто ищут</h2>

      {loading && <p>Загрузка популярных категорий...</p>}
      {!loading && categories.length === 0 && <p>Популярные категории не найдены</p>}

      <ul>
        {!loading &&
          categories.length > 0 &&
          categories.map((item, ind) => (
            <div onClick={() => setSearchValue(item)} key={ind} className={s.item}>
              <img src={searchIcon} alt="search" />
              <li>{item}</li>
            </div>
          ))}
      </ul>
    </section>
  );
};
