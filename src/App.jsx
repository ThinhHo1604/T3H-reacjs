import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";
import PrivatieRoute from "./components/commons/PrivateRouter";
import ValidateForm1 from "./lesson5/FormValidateForm1";
import ValidateForm2 from "./lesson5/ValidateForm2";
import Side_Effect from "./lessson6/useEffect";
import Count from "./lessson6/Count";
import FetchData from "./lessson6/fetchData";
import DisplayName from "./lessson6/displayName";
import DisplayAge from "./lessson6/displayAge";
import { Flex } from "@chakra-ui/react";

const App = () => {
  const [value, setValue] = useState({ name: "T3H", age: 20 });
  const [number, setNumber] = useState(2);

  const updateNumber = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const sqare = useMemo(() => {
    return number ** 2;
  }, [number]);

  const updateValue = () => {
    setValue({ name: "T3H", age: 20 });
  };

  const updateName = () => {
    setValue({ ...value, name: value.name + "x" });
  };

  const increaseAge = useCallback(() => {
    setValue({ ...value, age: value.age + 1 });
  }, [value]);
  return (
    <div>
      <button onClick={updateNumber}>Tăng giá trị number</button>
      <h1>Giá trị bình phương của number:{sqare}</h1>
      <hr />
      <button onClick={updateValue}>Change value</button>
      <button onClick={updateName}>Change Name</button>
      <button onClick={increaseAge}>Change Age</button>
      <hr />
      <DisplayName name={value.name} />
      <hr />
      <DisplayAge age={value.age} />
      <Routes>
        <Route path="/lesson5" element={<ValidateForm2 />}></Route>
        <Route path="/lesson6" element={<FetchData />}></Route>
      </Routes>
      {/* <DefaultLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <PrivatieRoute>
                <Contact />
              </PrivatieRoute>
            }
          />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Post />
      </DefaultLayout> */}
    </div>
  );
};

export default App;
