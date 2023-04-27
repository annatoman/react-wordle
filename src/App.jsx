import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

// data we need to track:
//   -- solution
//     -- 5 letter string, e.g. 'drain'
//   -- past guesses
//     -- an array of past guesses
//     -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
//     -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
//   -- current guess
//     -- string 'hello'
//   -- keypad letters
//     -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
//   -- number of turns
//     -- an integer 0 - 6

// game process:
//   -- entering words:
//     -- user enters a letter & a square is filled with that letter
//     -- when a user hits delete it deletes the previous letter
//     -- when a user hits enter it submits the word
//       -- if all squares are not filled with letters then the word is not submitted
//       -- if that word has already been used in a prev guess then the word is not submitted
//   -- checking submitted words:
//     -- each letter is checked to see if it matches to the solution
//     -- each letter is assigned a color based on it's inclusion in the solution
//       -- exact matches (correct position in the solution) are green
//       -- partial matches (in the solution but not the correct position) are yellow
//       -- none-matches (not in the solution at all) are grey
//     -- the guess is added the grid with the correct colors
//     -- the current guess moves to the next row
//     -- the keypad letters are updated (colors)
//   -- ending the game:
//     -- when the guessed word fully matches the solution
//       -- modal to say 'well done'
//     -- when the user runs out of guesses
//       -- modal to say 'unlucky'

// */
