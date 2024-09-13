import React, { useState } from "react";

const Flames = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateRelationship = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please enter a valid input");
      return;
    }
    let res = "";
    let n1 = name1;
    let n2 = name2;
    for (let char of n1) {
      if (n2.includes(char)) {
        n2 = n2.replace(char, "", 1);
      } else {
        res += char;
      }
    }

    const flamesRes = (res + n2).length % 6;
    console.log(flamesRes);
    const relationships = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];
    setResult(relationships[flamesRes]);
  };
  const handleReset = () => {
    setName1("");
    setName2("");
    setResult("");
  };
  return (
    <div>
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        data-testid="input1"
        placeholder="name1"
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        data-testid="input2"
        placeholder="name2"
      />
      <button
        onClick={calculateRelationship}
        data-testid="calculate_relationship"
      >
        Calculate Relationship Future
      </button>
      <button onClick={handleReset} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default Flames;
