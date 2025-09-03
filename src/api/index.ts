export const fetchDataOnMain = async () => {
  try {
    const res = await fetch('https://noxer-test.ru/webapp/api/products?on_main=true');
    if (!res.ok) throw new Error('Ошибка запроса');
    return await res.json();
  } catch (err) {
    console.error('Ошибка запроса:', err);
  }
};

export const fetchDataOnAnother = async () => {
  try {
    const res = await fetch(`https://noxer-test.ru/webapp/api/products?on_main=false`);
    if (!res.ok) throw new Error('Ошибка запроса');
    return await res.json();
  } catch (err) {
    console.error('Ошибка запроса:', err);
  }
};

export const fetchDataPagination = async (page: number, per_page = 11) => {
  try {
    const res = await fetch(`https://noxer-test.ru/webapp/api/products?on_main=false&per_page=${per_page}&page=${page}`);
    if (!res.ok) throw new Error('Ошибка запроса');
    return await res.json();
  } catch (err) {
    console.error('Ошибка запроса:', err);
  }
};
