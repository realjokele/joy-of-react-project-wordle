export const KEYBOARD_LAYOUT = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Y", "X", "C", "V", "B", "N", "M"],
];

function Key({ letter, status }) {
  return <span className={`key ${status}`}>{letter}</span>;
}

export function Keyboard({ status }) {
  return (
    <div>
      {KEYBOARD_LAYOUT.map((keyboardRow, index) => {
        return (
          <div key={index} className="keyboard-layout">
            {keyboardRow.map((letter) => (
              <Key key={letter} letter={letter} status={status[letter]} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
