import { createContext, useState, useEffect, FC, ReactNode } from 'react';

export const AppDataContext = createContext<any>({ products: [] });

interface AppDataProviderProps {
  children: ReactNode;
}

export const AppDataProvider: FC<AppDataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://noxer-test.ru/webapp/api/products?on_main=true');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data);
        }
      } catch (err) {
        console.error('Ошибка запроса:', err);
      }
    };
    fetchData();
  }, []);

  return <AppDataContext.Provider value={{ data }}>{children}</AppDataContext.Provider>;
};
