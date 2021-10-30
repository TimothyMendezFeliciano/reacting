import HomeForm from "../components/Form/HomeForm";
import { useState } from "react";

function Home() {
  const [changedText, setChangedtext] = useState(false);

  const changetexthandler = () => {
    setChangedtext(!changedText);
  };

  return (
    <section>
      {!changedText && <h1>User Form</h1>}
      {changedText && <h1>Formed User</h1>}
      <button variant="primary" onClick={changetexthandler}>
        Change me, Senpai!
      </button>
      <HomeForm />
    </section>
  );
}

export default Home;
