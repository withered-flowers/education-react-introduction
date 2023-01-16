const CustomHeader = (props) => {
  const buttonOnClickHandler = () => {
    console.log("Halo Dunia");
  };

  const buttonOnClickHandler2 = (strValue) => {
    console.log(strValue);
  };

  // render
  return (
    <section>
      <h1>Selamat datang di website intro, {props.nama}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <button onClick={buttonOnClickHandler}>
          Klik Aku (Dalam Komponen)
        </button>
        <button onClick={() => buttonOnClickHandler2("Koi")}>
          Klik Aku (Dalam Komponen Dengan Parameter)
        </button>
        <button onClick={props.fnOnClick}>Klik Aku (Dari Luar Komponen)</button>
      </div>
    </section>
  );
};

export default CustomHeader;
