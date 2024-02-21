import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setchar] = useState(false);
  const [pass, setPass] = useState("");
  const passwordRef = useRef()

  // Lets thing on the generator function
  const generator = useCallback(() => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let Password = "";

    if (number) string += "0123456789";
    if (char) string += "@!#$&%";

    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * string.length + 1);
      Password += string.charAt(pos);
    }

    setPass(Password);
  }, [length, number, char]);

  const generate = useEffect(() => {
    generator();
  }, [length, number, char]);

  const copyPass = () => {
    window.navigator.clipboard.writeText(pass);
    passwordRef.current.select();
  }

  return (
    <>
      <section className="generator pt-5">
        <div className="generator-area rounded p-3">
          <h1 className="text-center">Password Generator</h1>
          <div className="form-area">
            {/* Form and Display area */}
            <div className="d-flex gap-1">
              <div className="col-10">
                <input
                  type="text"
                  className=" form-control"
                  value={pass}
                  ref={passwordRef}
                  readOnly
                />
              </div>
              <div className="col-2">
                <button 
                className="btn btn-primary"
                onClick={copyPass}
                >Copy</button>
              </div>
            </div>

            {/* Optionals */}
            <div className="optional mt-3">
              <div className="d-sm-flex gap-5">
                <div className="lenth">
                  <input
                    type="range"
                    id="numberForCharacter"
                    min="8"
                    max="30"
                    className="form-range"
                    defaultValue="8"
                    onChange={(e) => {
                      setLength(e.target.value);
                    }}
                  />
                  <label htmlFor="numberForCharacter" className="form-lable">
                    Length {length}
                  </label>
                </div>

                <div className="allow-numbers form-check">
                  <input
                    type="checkbox"
                    name=""
                    id="allow-numbers"
                    className="form-check-input"
                    defaultChecked={number}
                    onChange={() => {
                      setNumber(!number);
                    }}
                  />
                  <label htmlFor="allow-numbers" className="form-check-label">
                    Include numbers
                  </label>
                </div>

                <div className="allow-char form-check">
                  <input
                    type="checkbox"
                    name=""
                    id="allow-char"
                    className="form-check-input"
                    defaultChecked={char}
                    onChange={() => {
                      setchar(!char);
                    }}
                  />
                  <label htmlFor="allow-char" className="form-check-label">
                    Include Characters
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
