import { useState, useEffect } from "react";

const SectionForm = () => {
  // State !
  const [formValue, setFormValue] = useState({
    user: "Ibnu",
    pass: "",
    description: "",
  });

  const formOnSubmitHandler = (event) => {
    // PREVENT DEFAULT
    event.preventDefault();

    console.log("Final Submission", formValue);
  };

  // Lifecycle (Side Effects)

  // Paramter pertama (Handler)
  // Parameter kedua (dependency list) - OPTIONAL
  useEffect(() => {
    console.log("Halo Ayu");
  });

  // Efek ini hanya akan terjadi satu kali saja, pada saat dia dirender
  useEffect(() => {
    console.log("Halo Ajat");
  }, []);

  useEffect(() => {
    console.log("Halo Iseng");
  }, [formValue.user]);

  return (
    <section>
      <form
        onSubmit={formOnSubmitHandler}
        style={{
          marginTop: "1em",
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <input
          type="text"
          name="user"
          id="user"
          value={formValue.user}
          onChange={(event) => {
            setFormValue({
              ...formValue,
              user: event.target.value,
            });

            console.log(formValue);
          }}
        />
        <input
          type="password"
          name="pass"
          id="pass"
          value={formValue.pass}
          onChange={(event) => {
            setFormValue({
              ...formValue,
              pass: event.target.value,
            });

            console.log(formValue);
          }}
        />

        <input
          type="text"
          name="desc"
          id="desc"
          value={formValue.description}
          onChange={(event) => {
            setFormValue({
              ...formValue,
              description: event.target.value,
            });

            console.log(formValue);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SectionForm;
