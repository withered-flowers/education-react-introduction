import { useState } from "react";

const SectionIncrement = () => {
  // The Real Way - useState
  // bentuknya tuple
  // index 0: nama state
  // index 1: setter dari state (nama fungsi setter)
  const [angkaCounter, setAngkaCounter] = useState(15);

  // let angkaCounter = 10; // BUKAN SEPERTI INI !

  const incrementCounter = () => {
    // angkaCounter += 1;
    setAngkaCounter(angkaCounter + 1);
    console.log("counter:", angkaCounter);
  };

  return (
    <section>
      {/* Hanya akan terender apabila angkaCounter <= 20 */}
      {/* FALSE && TRUE */}
      {angkaCounter <= 20 ? (
        <p>Angka Counter: {angkaCounter}</p>
      ) : (
        <h1>Udah lebih dari 20 nih</h1>
      )}
      <button onClick={incrementCounter}>Nambahin Counter</button>
    </section>
  );
};

export default SectionIncrement;
