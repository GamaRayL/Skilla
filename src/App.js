import { Header } from "./components/Header";
import css from "./styles.module.css";


function App() {
  async function getData() {
    const URL = "https://api.skilla.ru/mango/getCallback?phone=222";

    try {
      const res = await fetch(URL, {
        method: "post",
        headers: new Headers({ Authorization: "Bearer testtoken" }),
      });
      const resData = await res.json();
      console.log(resData);
    } catch (error) {}
  }

  getData();
  return (
    <div className={css.app}>
      <Header />
    </div>
  );
}

export default App;
