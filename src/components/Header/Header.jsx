import './header.css';
let options = ['Core', 'Fundamental', 'Important'];
let generateRandom = function (num) {
  return Math.floor(Math.random() * (num + 1));
};

function Header() {
  let description = options[generateRandom(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
