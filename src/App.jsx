import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/Tabbutton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState();

  function handleClick(selectedBtn) {
    setSelectedTab(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              isSelected={selectedTab == 'components'}
              onSelect={() => handleClick('components')}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTab == 'jsx'}
              onSelect={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab == 'props'}
              onSelect={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab == 'state'}
              onSelect={() => handleClick('state')}
            >
              State
            </TabButton>
          </menu>
          {!selectedTab ? (
            <p>Please select a tab</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
