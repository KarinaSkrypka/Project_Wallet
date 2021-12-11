import { PRIVATE_URL } from '../assets/constants';

// const PRIVATE_URL =
//   'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export async function fetchData() {
  try {
    const res = await fetch(PRIVATE_URL);
    return res.json();
  } catch (err) {
    return err;
  }
}
