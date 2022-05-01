import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import css from "./styles.module.css";

function App() {
  async function getData() {
    const URL =
      "https://api.skilla.ru/partnership/getPersonsList?position=accountant&is_blocked=0";

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
      <Sidebar />
      <div className={css.container}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
