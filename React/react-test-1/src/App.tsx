import { createContext, useState } from "react";
import "./App.css";
import ClassCompExample from "./components/01-class-components/ClassCompExample";
import FunctionalCompExample from "./components/02-functional-components/FunctionalCompExample";
import List from "./components/Misc/List";
import { MessageWithLogger } from "./components/HOC/Message";
import Parent from "./components/Hooks/Context/Parent";
import Counter from "./components/Hooks/useStateHook/Counter";
import UseEffectHookExample from "./components/Hooks/useEffectHook/useEffectHookExample";
import UseCallbackExample from "./components/Hooks/useCallbackHook/useCallbackHookExample";
import UseMemoHookExample from "./components/Hooks/useMemoHook/UseMemoHookExample";
import UseReducerHookExample from "./components/Hooks/useReducerHook/useReducerHookExample";
import UseRefExample from "./components/Hooks/useRefHook/useRefExample";
import ForwardRefExample from "./components/forwardRef/Parent";
import DocumentTitleOne from "./components/Hooks/CustomHooks/useDocumentTitle/DocumentTitleOne";
import CounterHookExample from "./components/Hooks/CustomHooks/useCounter/CounterHookExample";
import UseFetchHookExample from "./components/Hooks/CustomHooks/useFetch/UseFetchHookExample";
import UseMountedExample from "./components/Hooks/CustomHooks/useMounted/useMountedExample";

export const ThemeContext = createContext(false);

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeValues = { isDarkTheme, toggleTheme };

  return (
    <>
      <h2>Class Component Example</h2>
      <ClassCompExample />

      <br />
      <hr />

      <h2>Functional Component Example</h2>
      <FunctionalCompExample />

      <br />
      <hr />

      <h2>Maping an Array Example</h2>
      <List />

      <br />
      <hr />

      <h2>HOC Example</h2>
      <MessageWithLogger msgString="Hare Krishnaa" />
      <br />
      <hr />

      <h1>Hooks</h1>

      <h2>useState Example</h2>
      <Counter />
      <br />
      <hr />

      <h2>useEffect Example</h2>
      <UseEffectHookExample />
      <br />
      <hr />

      <h2>Context Example</h2>
      <ThemeContext.Provider value={themeValues}>
        <Parent />
      </ThemeContext.Provider>
      <br />
      <hr />

      <h2>useRef Example</h2>
      <UseRefExample />
      <br />
      <hr />

      <h2>forwardRef Example</h2>
      <ForwardRefExample />
      <br />
      <hr />

      <h2>useCallback with React.Memo Example</h2>
      <UseCallbackExample />
      <br />
      <hr />

      <h2>useMemo Example</h2>
      <UseMemoHookExample />
      <br />
      <hr />

      <h2>useReducer Example</h2>
      <UseReducerHookExample />
      <br />
      <hr />

      <h2>CUSTOM HOOK: useDocumentTitle Example</h2>
      <DocumentTitleOne />
      <br />
      <hr />

      <h2>CUSTOM HOOK: useCounter Example</h2>
      <CounterHookExample />
      <br />
      <hr />

      <h2>CUSTOM HOOK: useFetch Example</h2>
      <UseFetchHookExample />
      <br />
      <hr />

      <h2>CUSTOM HOOK: useMounted Example</h2>
      <UseMountedExample />
      <br />
      <hr />
    </>
  );
}

export default App;
