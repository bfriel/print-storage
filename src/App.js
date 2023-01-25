import { useEffect, useState } from "react";

function App() {
  const [storageArrays, setStorageArrays] = useState({
    localStorage: [],
    sessionStorage: [],
  });

  useEffect(() => {
    const createArray = (storage) => {
      const array = [];
      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        const value = storage.getItem(key);
        array.push({ key, value });
      }
      return array;
    };

    const localStorage = createArray(window.localStorage);
    const sessionStorage = createArray(window.sessionStorage);

    setStorageArrays({ localStorage, sessionStorage });
  }, []);

  const listItems = (storage) =>
    storage.map((item) => (
      <li key={item.key}>
        <b>{item.key}: </b>
        {item.value}
      </li>
    ));

  return (
    <div>
      <h1>Local Storage</h1>
      {listItems(storageArrays.localStorage)}
      <h1>Session Storage</h1>
      {listItems(storageArrays.sessionStorage)}
    </div>
  );
}

export default App;
