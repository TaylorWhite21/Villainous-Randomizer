import './App.css';
import React from 'react';
import { Button, Image } from 'react-bootstrap';

import CapHookAudio from './audio/CapHook.mp3';
import CapHookPNG from './images/CapHook.png';
import CruellaDeVilAudio from './audio/Cruella.mp3';
import CruellaDeVilPNG from './images/Cruella.png';
import DrFacAudio from './audio/drfac.mp3';
import DrFacPNG from './images/DrFac.png';
import EvilQueenAudio from './audio/evilqueen.mp3';
import EvilQueenPNG from './images/evilqueen.png';
import GastonAudio from './audio/gaston.mp3';
import GastonPNG from './images/gaston.png';
import HadesAudio from './audio/hades.mp3';
import HadesPNG from './images/hades.png';
import HornedKingAudio from './audio/hornedking.mp3';
import HornedKingPNG from './images/hornedking.png';
import jafarAudio from './audio/jafar.mp3';
import jafarPNG from './images/Jafar.png';
import LadyTremaineAudio from './audio/ladytremaine.mp3';
import LadyTremainePNG from './images/ladytremaine.png';
import LotsoAudio from './audio/lotso.mp3';
import LotsoPNG from './images/lotso.png';
import MadamMimAudio from './audio/madammim.mp3';
import MadamMimPNG from './images/madammim.png';
import MalefAudio from './audio/malef.mp3';
import MalefPNG from './images/malef.png';
import MotherGothelAudio from './audio/mothergothel.mp3';
import MotherGothelPNG from './images/mothergothel.png';
import PeteAudio from './audio/pete.mp3';
import PetePNG from './images/pete.png';
import PrinceJohnAudio from './audio/princejohn.mp3';
import PrinceJohnPNG from './images/princejohn.png';
import QueenOfHeartsAudio from './audio/queenofhearts.mp3';
import QueenOfHeartsPNG from './images/queenofhearts.png';
import RatiganAudio from './audio/ratigan.mp3';
import RatiganPNG from './images/ratigan.png';
import ScarAudio from './audio/scar.mp3';
import ScarPNG from './images/scar.png';
import SyndromeAudio from './audio/syndrome.mp3';
import SyndromePNG from './images/syndrome.png';
import UrsulaAudio from './audio/ursula.mp3';
import UrsulaPNG from './images/ursula.png';
import YzmaAudio from './audio/yzma.mp3';
import YzmaPNG from './images/yzma.png';
import OogieAudio from './audio/oogieboogie.mp3';
import OogiePNG from './images/oogieboogie.png';
import KingCandyAudio from './audio/kingcandy.mp3';
import KingCandyPNG from './images/kingcandy.png';
import ShereKhanAudio from './audio/sherekhan.mp3';
import ShereKhanPNG from './images/sherekhan.png';
import DavyJonesAudio from './audio/davyjones.mp3';
import DavyJonesPNG from './images/davyjones.png';
import TamatoaAudio from './audio/tamatoa.mp3';
import TamatoaPNG from './images/tamatoa.png';


// Organized by expansion boxes with difficulty and objectives
const VillainsByExpansion = {
  'Base Game': [
    { name: 'Maleficent', image: MalefPNG, voiceLine: MalefAudio, expansion: 'Base Game', difficulty: 'Easy', objective: 'Play a curse to each location in your realm' },
    { name: 'The Queen of Hearts', image: QueenOfHeartsPNG, voiceLine: QueenOfHeartsAudio, expansion: 'Base Game', difficulty: 'Easy', objective: 'Have a Wicket at each location and successfully take a shot' },
    { name: 'Captain Hook', image: CapHookPNG, voiceLine: CapHookAudio, expansion: 'Base Game', difficulty: 'Medium', objective: 'Defeat Peter Pan at the Jolly Roger' },
    { name: 'Ursula', image: UrsulaPNG, voiceLine: UrsulaAudio, expansion: 'Base Game', difficulty: 'Hard', objective: "Have the Trident and the Crown at Ursula's Lair" },
    { name: 'Prince John', image: PrinceJohnPNG, voiceLine: PrinceJohnAudio, expansion: 'Base Game', difficulty: 'Very Easy', objective: 'Accumulate 20 power' },
    { name: 'Jafar', image: jafarPNG, voiceLine: jafarAudio, expansion: 'Base Game', difficulty: 'Hard', objective: "Unlock Cave of Wonders, find Magic Lamp, Hypnotize Genie, move Lamp to Sultan's palace" }
  ],
  'Wicked to the Core': [
    { name: 'Dr. Facilier', image: DrFacPNG, voiceLine: DrFacAudio, expansion: 'Wicked to the Core', difficulty: 'Hard', objective: 'Use Fortune pile mechanics to transform New Orleans' },
    { name: 'The Evil Queen', image: EvilQueenPNG, voiceLine: EvilQueenAudio, expansion: 'Wicked to the Core', difficulty: 'Medium', objective: 'Vanquish Snow White using poison' },
    { name: 'Hades', image: HadesPNG, voiceLine: HadesAudio, expansion: 'Wicked to the Core', difficulty: 'Hard', objective: 'Get three Titans to Mount Olympus' }
  ],
  'Evil Comes Prepared': [
    { name: 'Professor Ratigan', image: RatiganPNG, voiceLine: RatiganAudio, expansion: 'Evil Comes Prepared', difficulty: 'Very Hard', objective: 'Start turn with Robot Queen at Buckingham Palace, or defeat Basil' },
    { name: 'Scar', image: ScarPNG, voiceLine: ScarAudio, expansion: 'Evil Comes Prepared', difficulty: 'Hard', objective: 'Start turn with at least 15 in Succession pile' },
    { name: 'Yzma', image: YzmaPNG, voiceLine: YzmaAudio, expansion: 'Evil Comes Prepared', difficulty: 'Very Hard', objective: 'Defeat Kuzco using Kronk' }
  ],
  'Perfectly Wretched': [
    { name: 'Cruella De Vil', image: CruellaDeVilPNG, voiceLine: CruellaDeVilAudio, expansion: 'Perfectly Wretched', difficulty: 'Medium', objective: 'Start turn with at least 99 captured puppies' },
    { name: 'Mother Gothel', image: MotherGothelPNG, voiceLine: MotherGothelAudio, expansion: 'Perfectly Wretched', difficulty: 'Hard', objective: 'Have at least 10 Trust with Rapunzel' },
    { name: 'Pete', image: PetePNG, voiceLine: PeteAudio, expansion: 'Perfectly Wretched', difficulty: 'Medium', objective: 'Complete four different randomly selected goals' }
  ],
  'Despicable Plots': [
    { name: 'Gaston', image: GastonPNG, voiceLine: GastonAudio, expansion: 'Despicable Plots', difficulty: 'Medium', objective: "Remove obstacles to prove you're the perfect man" },
    { name: 'The Horned King', image: HornedKingPNG, voiceLine: HornedKingAudio, expansion: 'Despicable Plots', difficulty: 'Hard', objective: 'Acquire Black Cauldron and fill realm with Cauldron Born' },
    { name: 'Lady Tremaine', image: LadyTremainePNG, voiceLine: LadyTremaineAudio, expansion: 'Despicable Plots', difficulty: 'Very Hard', objective: 'Marry one of your stepdaughters to The Prince' }
  ],
  'Bigger and Badder': [
    { name: 'Lotso', image: LotsoPNG, voiceLine: LotsoAudio, expansion: 'Bigger and Badder', difficulty: 'Hard', objective: 'Weaken heroes and move them to Caterpillar Room' },
    { name: 'Syndrome', image: SyndromePNG, voiceLine: SyndromeAudio, expansion: 'Bigger and Badder', difficulty: 'Very Hard', objective: 'Activate Remote at Omnidroid v.10 location, then clear realm of Heroes' },
    { name: 'Madam Mim', image: MadamMimPNG, voiceLine: MadamMimAudio, expansion: 'Bigger and Badder', difficulty: 'Medium', objective: "Defeat Merlin in a wizard's duel" }
  ],
  'Filled with Fright': [
    { name: 'Oogie Boogie', image: OogiePNG, voiceLine: OogieAudio, expansion: 'Filled with Fright', difficulty: 'Hard', objective: 'Convince Jack to return to Halloween Town and defeat him' }
  ],
  'Sugar and Spite': [
    { name: 'King Candy', image: KingCandyPNG, voiceLine: KingCandyAudio, expansion: 'Sugar and Spite', difficulty: 'Hard', objective: 'Win the race with complex racing mechanics' },
    { name: 'Shere Khan', image: ShereKhanPNG, voiceLine: ShereKhanAudio, expansion: 'Sugar and Spite', difficulty: 'Medium', objective: 'Defeat Mowgli and keep fire away' }
  ],
  'Treacherous Tides': [
    { name: 'Davy Jones', image: DavyJonesPNG, voiceLine: DavyJonesAudio, expansion: 'Treacherous Tides', difficulty: 'Medium', objective: 'Collect five treasure tokens' },
    { name: 'Tamatoa', image: TamatoaPNG, voiceLine: TamatoaAudio, expansion: 'Treacherous Tides', difficulty: 'Medium', objective: "Have Heart of Te Fiti and Maui's Hook at Tamatoa's Lair" }
  ],
  'Introduction to Evil': [
    { name: 'Maleficent (Intro)', image: MalefPNG, voiceLine: MalefAudio, expansion: 'Introduction to Evil', difficulty: 'Easy', objective: 'Have a Curse at each location in your realm' },
    { name: 'Captain Hook (Intro)', image: CapHookPNG, voiceLine: CapHookAudio, expansion: 'Introduction to Evil', difficulty: 'Medium', objective: 'Defeat Peter Pan at the Jolly Roger' },
    { name: 'Ursula (Intro)', image: UrsulaPNG, voiceLine: UrsulaAudio, expansion: 'Introduction to Evil', difficulty: 'Hard', objective: "Have the Trident and the Crown at Ursula's Lair" },
    { name: 'Prince John (Intro)', image: PrinceJohnPNG, voiceLine: PrinceJohnAudio, expansion: 'Introduction to Evil', difficulty: 'Easy', objective: 'Accumulate 20 power and have Robin Hood at The Jail' }
  ],
  'Unstoppable': [
    { name: 'Hades (Unstoppable)', image: HadesPNG, voiceLine: HadesAudio, expansion: 'Unstoppable', difficulty: 'Easy', objective: 'Move your Titan four spaces to complete your evil plan' },
    { name: 'Ursula (Unstoppable)', image: UrsulaPNG, voiceLine: UrsulaAudio, expansion: 'Unstoppable', difficulty: 'Easy', objective: 'Gather four shells and flip doomed merfolk to their cursed forms' },
    { name: 'Maleficent (Unstoppable)', image: MalefPNG, voiceLine: MalefAudio, expansion: 'Unstoppable', difficulty: 'Easy', objective: 'Assemble a four-piece jigsaw that becomes a dragon' },
    { name: 'Scar (Unstoppable)', image: ScarPNG, voiceLine: ScarAudio, expansion: 'Unstoppable', difficulty: 'Easy', objective: 'Collect four pain tokens to complete your evil plan' }
  ]
};

// Flatten all villains into a single array
const getAllVillains = () => {
  return Object.values(VillainsByExpansion).flat();
};

const VillanousCharacters = getAllVillains();

// Fisher-Yates shuffle — unbiased, uniform random permutation
function fisherYatesShuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

  class VillanousCharacterSelector extends React.Component {
    constructor(props) {
      super(props);
      this.audioRef = React.createRef();
      this.spinInterval = null;
      this.pendingTimeouts = [];
      this.state = {
        currentCharacter: VillanousCharacters[0],
        selectedExpansions: Object.keys(VillainsByExpansion),
        selectedVillains: VillanousCharacters.map(v => v.name),
        filterMode: 'expansion', // 'expansion' or 'villain'
        isSpinning: false,
        reelVillains: [], // Array of villains for the reel display
        reelOffset: 0, // Vertical offset for animation
        animationSpeed: 'normal', // 'fast', 'normal', 'slow'
        playerCount: 1, // 1-6 players
        selectedMultiVillains: [], // Array of selected villains for multi-player
        showGameSettings: true, // Collapsible game settings - expanded by default
        showFilters: true, // Collapsible filters - expanded by default
        villainHistory: [], // Session history of selected villains
        showHistory: true, // Collapsible history panel
        showSidebar: true // Sidebar visibility (for mobile toggle)
      };
      this.handleClick = this.handleClick.bind(this);
      this.toggleExpansion = this.toggleExpansion.bind(this);
      this.toggleVillain = this.toggleVillain.bind(this);
      this.toggleFilterMode = this.toggleFilterMode.bind(this);
      this.selectAllExpansions = this.selectAllExpansions.bind(this);
      this.selectAllVillains = this.selectAllVillains.bind(this);
      this.spinToVillain = this.spinToVillain.bind(this);
      this.skipAnimation = this.skipAnimation.bind(this);
      this.setAnimationSpeed = this.setAnimationSpeed.bind(this);
      this.setPlayerCount = this.setPlayerCount.bind(this);
      this.selectMultipleVillains = this.selectMultipleVillains.bind(this);
      this.toggleGameSettings = this.toggleGameSettings.bind(this);
      this.toggleFilters = this.toggleFilters.bind(this);
      this.clearHistory = this.clearHistory.bind(this);
      this.toggleHistory = this.toggleHistory.bind(this);
      this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentWillUnmount() {
      if (this.spinInterval) {
        clearTimeout(this.spinInterval);
      }
      this.pendingTimeouts.forEach(id => clearTimeout(id));
    }

    scheduleTimeout(fn, delay) {
      const id = setTimeout(() => {
        this.pendingTimeouts = this.pendingTimeouts.filter(t => t !== id);
        fn();
      }, delay);
      this.pendingTimeouts.push(id);
      return id;
    }

    getAvailableVillains() {
      const { filterMode, selectedExpansions, selectedVillains } = this.state;

      if (filterMode === 'expansion') {
        return VillanousCharacters.filter(villain =>
          selectedExpansions.includes(villain.expansion)
        );
      } else {
        return VillanousCharacters.filter(villain =>
          selectedVillains.includes(villain.name)
        );
      }
    }

    handleClick() {
      const availableVillains = this.getAvailableVillains();
      const { playerCount } = this.state;

      if (availableVillains.length === 0) {
        alert('Please select at least one expansion or villain!');
        return;
      }

      if (this.state.isSpinning) {
        return;
      }

      if (playerCount > 1) {
        this.selectMultipleVillains(availableVillains, playerCount);
      } else {
        const randomIndex = Math.floor(Math.random() * availableVillains.length);
        const randomCharacter = availableVillains[randomIndex];
        this.spinToVillain(availableVillains, randomCharacter);
      }
    }

    spinToVillain(availableVillains, finalCharacter) {
      const { animationSpeed } = this.state;
      const speedMultipliers = { fast: 0.5, normal: 1, slow: 2 };
      const speedMult = speedMultipliers[animationSpeed] || 1;

      const fixedSpinCount = 15 + Math.floor(Math.random() * 4);
      const reelVillains = [];

      for (let i = 0; i < fixedSpinCount; i++) {
        const randomVillain = availableVillains[Math.floor(Math.random() * availableVillains.length)];
        reelVillains.push(randomVillain);
      }

      reelVillains[fixedSpinCount - 1] = finalCharacter;

      this.setState({ isSpinning: true, reelVillains: reelVillains, reelOffset: 0 });

      let currentOffset = 0;
      let spinCount = 0;
      const totalSpins = fixedSpinCount - 1;
      let currentDelay = 30 * speedMult;

      const spin = () => {
        spinCount++;
        currentOffset++;

        this.setState({
          reelOffset: currentOffset,
          currentCharacter: reelVillains[currentOffset]
        });

        const progress = spinCount / totalSpins;
        currentDelay = (30 + (progress * progress * progress * 500)) * speedMult;

        if (spinCount < totalSpins) {
          this.spinInterval = setTimeout(spin, currentDelay);
        } else {
          this.scheduleTimeout(() => {
            this.setState(prevState => ({
              isSpinning: false,
              villainHistory: [
                { villain: finalCharacter, timestamp: new Date(), players: 1 },
                ...prevState.villainHistory
              ]
            }));

            this.scheduleTimeout(() => {
              if (this.audioRef.current && finalCharacter.voiceLine) {
                this.audioRef.current.load();
                this.audioRef.current.play().catch(() => {});
              }
            }, 100);
          }, 300 * speedMult);
        }
      };

      spin();
    }

    skipAnimation() {
      if (this.spinInterval) {
        clearTimeout(this.spinInterval);
      }

      const { reelVillains } = this.state;
      if (reelVillains.length > 0) {
        const finalVillain = reelVillains[reelVillains.length - 1];
        this.setState(prevState => ({
          isSpinning: false,
          currentCharacter: finalVillain,
          reelOffset: reelVillains.length - 1,
          villainHistory: [
            { villain: finalVillain, timestamp: new Date(), players: 1 },
            ...prevState.villainHistory
          ]
        }));

        this.scheduleTimeout(() => {
          if (this.audioRef.current && finalVillain.voiceLine) {
            this.audioRef.current.load();
            this.audioRef.current.play().catch(() => {});
          }
        }, 100);
      }
    }

    setAnimationSpeed(speed) {
      this.setState({ animationSpeed: speed });
    }

    setPlayerCount(count) {
      this.setState({ playerCount: count, selectedMultiVillains: [] });
    }

    selectMultipleVillains(availableVillains, count) {
      if (availableVillains.length < count) {
        alert(`Not enough villains available! Please select at least ${count} villains.`);
        return;
      }

      // Fisher-Yates shuffle for unbiased random selection
      const selected = fisherYatesShuffle(availableVillains).slice(0, count);

      this.setState(prevState => ({
        selectedMultiVillains: selected,
        currentCharacter: selected[0],
        villainHistory: [
          { villains: selected, timestamp: new Date(), players: count },
          ...prevState.villainHistory
        ]
      }));

      this.scheduleTimeout(() => {
        if (this.audioRef.current && selected[0].voiceLine) {
          this.audioRef.current.load();
          this.audioRef.current.play().catch(() => {});
        }
      }, 100);
    }

    toggleExpansion(expansion) {
      this.setState(prevState => {
        const isSelected = prevState.selectedExpansions.includes(expansion);
        return {
          selectedExpansions: isSelected
            ? prevState.selectedExpansions.filter(e => e !== expansion)
            : [...prevState.selectedExpansions, expansion]
        };
      });
    }

    toggleVillain(villainName) {
      this.setState(prevState => {
        const isSelected = prevState.selectedVillains.includes(villainName);
        return {
          selectedVillains: isSelected
            ? prevState.selectedVillains.filter(v => v !== villainName)
            : [...prevState.selectedVillains, villainName]
        };
      });
    }

    toggleFilterMode() {
      this.setState(prevState => ({
        filterMode: prevState.filterMode === 'expansion' ? 'villain' : 'expansion'
      }));
    }

    selectAllExpansions() {
      this.setState({ selectedExpansions: Object.keys(VillainsByExpansion) });
    }

    selectAllVillains() {
      this.setState({ selectedVillains: VillanousCharacters.map(v => v.name) });
    }

    toggleGameSettings() {
      this.setState(prevState => ({ showGameSettings: !prevState.showGameSettings }));
    }

    toggleFilters() {
      this.setState(prevState => ({ showFilters: !prevState.showFilters }));
    }

    clearHistory() {
      this.setState({ villainHistory: [] });
    }

    toggleHistory() {
      this.setState(prevState => ({ showHistory: !prevState.showHistory }));
    }

    toggleSidebar() {
      this.setState(prevState => ({ showSidebar: !prevState.showSidebar }));
    }

    render() {
      const {
        currentCharacter, filterMode, selectedExpansions, selectedVillains,
        isSpinning, animationSpeed, playerCount, selectedMultiVillains,
        showGameSettings, showFilters, villainHistory, showHistory, showSidebar
      } = this.state;
      const availableCount = this.getAvailableVillains().length;

      return (
        <div className="layout-container">
          {/* Mobile sidebar toggle (hidden on desktop) */}
          <Button className="sidebar-toggle" onClick={this.toggleSidebar}>&#9776; Settings &amp; Filters</Button>

          {/* Sidebar backdrop (mobile only, shown when sidebar open) */}
          {showSidebar && <div className="sidebar-backdrop" onClick={this.toggleSidebar} />}

          {/* LEFT SIDEBAR */}
          <div className={`sidebar ${showSidebar ? 'open' : ''}`}>

            {/* Game Settings Toggle */}
            <div className="section-toggle">
              <Button variant="outline-warning" onClick={this.toggleGameSettings} className="toggle-button">
                {showGameSettings ? '▼' : '▶'} Game Settings
              </Button>
            </div>

            {/* Game Settings */}
            {showGameSettings && (
              <div className="game-settings">
                <div className="setting-group">
                  <label>Players:</label>
                  <div className="button-group">
                    {[1, 2, 3, 4, 5, 6].map(count => (
                      <Button
                        key={count}
                        size="sm"
                        variant={playerCount === count ? 'primary' : 'outline-primary'}
                        onClick={() => this.setPlayerCount(count)}
                        disabled={isSpinning}
                      >
                        {count}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="setting-group">
                  <label>Speed:</label>
                  <div className="button-group">
                    {['fast', 'normal', 'slow'].map(speed => (
                      <Button
                        key={speed}
                        size="sm"
                        variant={animationSpeed === speed ? 'primary' : 'outline-primary'}
                        onClick={() => this.setAnimationSpeed(speed)}
                        disabled={isSpinning}
                      >
                        {speed.charAt(0).toUpperCase() + speed.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Filters Toggle */}
            <div className="section-toggle">
              <Button variant="outline-warning" onClick={this.toggleFilters} className="toggle-button">
                {showFilters ? '▼' : '▶'} Filters
              </Button>
            </div>

            {/* Filter Mode Toggle + Controls */}
            {showFilters && (
              <>
                <div className="filter-mode-toggle">
                  <Button
                    variant={filterMode === 'expansion' ? 'primary' : 'secondary'}
                    onClick={this.toggleFilterMode}
                    className="mode-button"
                  >
                    {filterMode === 'expansion' ? 'Filter by Expansion' : 'Filter by Villain'}
                  </Button>
                </div>

                <div className="filter-controls">
                  {filterMode === 'expansion' ? (
                    <div className="expansion-filters">
                      <div className="filter-header">
                        <h3>Select Expansions:</h3>
                        <Button size="sm" onClick={this.selectAllExpansions}>Select All</Button>
                      </div>
                      <div className="filter-grid">
                        {Object.keys(VillainsByExpansion).map(expansion => (
                          <label key={expansion} className="filter-item">
                            <input
                              type="checkbox"
                              checked={selectedExpansions.includes(expansion)}
                              onChange={() => this.toggleExpansion(expansion)}
                            />
                            <span>{expansion} ({VillainsByExpansion[expansion].length})</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="villain-filters">
                      <div className="filter-header">
                        <h3>Select Villains:</h3>
                        <Button size="sm" onClick={this.selectAllVillains}>Select All</Button>
                      </div>
                      <div className="filter-grid">
                        {VillanousCharacters.map(villain => (
                          <label key={villain.name} className="filter-item">
                            <input
                              type="checkbox"
                              checked={selectedVillains.includes(villain.name)}
                              onChange={() => this.toggleVillain(villain.name)}
                            />
                            <span>{villain.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

          </div>

          {/* MAIN CONTENT */}
          <div className="main-content">
            <h1>Random Villainous Character</h1>

            {/* Current Character Display */}
            {(playerCount === 1 || selectedMultiVillains.length === 0) && (
              <div className="character-display-wrapper">
                <div className={`character-display ${isSpinning ? 'spinning' : ''}`}>
                  {isSpinning && this.state.reelVillains.length > 0 ? (
                    <div className="slot-reel">
                      <div
                        className="reel-container"
                        style={{
                          transform: `translateY(-${this.state.reelOffset * 400}px)`,
                          transition: 'transform 0.1s ease-out'
                        }}
                      >
                        {this.state.reelVillains.map((villain, index) => (
                          <div key={index} className="reel-item">
                            <Image src={villain.image} alt={villain.name} className="villain-image reel-villain" />
                            <h2>{villain.name}</h2>
                            <p className="expansion-name">{villain.expansion}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    currentCharacter.image ? (
                      <>
                        <Image src={currentCharacter.image} alt={currentCharacter.name} className="villain-image" />
                        <h2>{currentCharacter.name}</h2>
                        <p className="expansion-name">{currentCharacter.expansion}</p>
                        {currentCharacter.difficulty && (
                          <div className="villain-info">
                            <div className={`difficulty-badge difficulty-${currentCharacter.difficulty.toLowerCase().replace(' ', '-')}`}>
                              <strong>Difficulty:</strong> {currentCharacter.difficulty}
                            </div>
                            {currentCharacter.objective && (
                              <div className="objective-text">
                                <strong>Objective:</strong> {currentCharacter.objective}
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="placeholder-box">
                          <h2>{currentCharacter.name}</h2>
                          <p>Image &amp; Audio Not Available</p>
                        </div>
                        <p className="expansion-name">{currentCharacter.expansion}</p>
                      </>
                    )
                  )}
                </div>
                {currentCharacter.voiceLine && (
                  <audio src={currentCharacter.voiceLine} ref={this.audioRef} style={{display: 'none'}}/>
                )}
              </div>
            )}

            {/* Multi-Player Results */}
            {playerCount > 1 && selectedMultiVillains.length > 0 && (
              <div className="multi-villain-results">
                <h3>Selected Villains:</h3>
                <div className="multi-villain-grid">
                  {selectedMultiVillains.map((villain, index) => (
                    <div key={index} className="multi-villain-card">
                      <Image src={villain.image} alt={villain.name} className="multi-villain-image" />
                      <h4>{villain.name}</h4>
                      <p className="expansion-name">{villain.expansion}</p>
                      {villain.difficulty && (
                        <div className="villain-info">
                          <div className={`difficulty-badge difficulty-${villain.difficulty.toLowerCase().replace(' ', '-')}`}>
                            <strong>Difficulty:</strong> {villain.difficulty}
                          </div>
                          {villain.objective && (
                            <div className="objective-text">
                              <strong>Objective:</strong> {villain.objective}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Session History */}
            {villainHistory.length > 0 && (
              <div className="history-section">
                <div className="section-toggle history-toggle">
                  <Button variant="outline-warning" onClick={this.toggleHistory} className="toggle-button">
                    {showHistory ? '▼' : '▶'} Session History ({villainHistory.length})
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={this.clearHistory} className="clear-history-button">
                    Clear
                  </Button>
                </div>

                {showHistory && (
                  <div className="history-list">
                    {villainHistory.map((entry, index) => (
                      <div key={index} className="history-entry">
                        {entry.players === 1 ? (
                          <div className="history-single">
                            <Image src={entry.villain.image} alt={entry.villain.name} className="history-image" />
                            <div className="history-info">
                              <span className="history-name">{entry.villain.name}</span>
                              <span className="history-expansion">{entry.villain.expansion}</span>
                              <span className={`history-difficulty difficulty-${entry.villain.difficulty.toLowerCase().replace(' ', '-')}`}>
                                {entry.villain.difficulty}
                              </span>
                            </div>
                            <span className="history-round">Roll {villainHistory.length - index}</span>
                          </div>
                        ) : (
                          <div className="history-multi">
                            <div className="history-multi-header">
                              <span className="history-round">Roll {villainHistory.length - index}</span>
                              <span className="history-player-count">{entry.players} players</span>
                            </div>
                            <div className="history-multi-villains">
                              {entry.villains.map((v, i) => (
                                <div key={i} className="history-multi-item">
                                  <Image src={v.image} alt={v.name} className="history-image" />
                                  <span className="history-name">{v.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* STICKY ROLL BAR (fixed to bottom) */}
          <div className="sticky-roll-bar">
            <p className="available-count">{availableCount} villain{availableCount !== 1 ? 's' : ''} available</p>
            <Button
              className={`button randomize-button ${isSpinning ? 'spinning' : ''}`}
              onClick={this.handleClick}
              disabled={isSpinning}
            >
              {isSpinning ? 'Spinning...' : (playerCount > 1 ? `Choose ${playerCount} Villains!` : 'Choose a Villain!')}
            </Button>
            {isSpinning && playerCount === 1 && (
              <Button className="skip-button" onClick={this.skipAnimation} variant="outline-light">
                Skip
              </Button>
            )}
          </div>

        </div>
      );
    }
  }

export default VillanousCharacterSelector;
