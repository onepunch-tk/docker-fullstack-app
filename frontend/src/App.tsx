import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface IList {
  id: number;
  value: string;
}

function App() {
  const [lists, setLists] = useState<IList[]>([]);
  const [value, setValue] = useState("");
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/value", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    if (response.ok) {
      const { success, result }: { success: boolean; result: IList } =
        await response.json();
      if (success) {
        console.log();
        setLists((prevState) => [
          ...prevState,
          { id: result.id, value: result.value },
        ]);
      }
    } else {
      alert("입력 실패");
    }
    setValue("");
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/values");
      if (response.ok) {
        console.log(response);
        setLists((await response.json()) as IList[]);
      }
    })();
  }, []);
  return (
    <>
      <div>
        <h2>Super Compose Test</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ul>
        {lists && lists.map((list) => <li key={list.id}>{list.value}</li>)}
      </ul>
      <div className="container">
        <form className="example" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="입력해주세요."
            value={value}
            onChange={changeHandler}
          />
          <button type="submit">확인</button>
        </form>
      </div>
    </>
  );
}

export default App;
