import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/Tabbutton.jsx';
import { useState } from 'react';
function App() {
  function handleClick(selectedBtn) {
    console.log(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleClick('component')}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;