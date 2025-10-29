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
    { name: 'Ursula', image: UrsulaPNG, voiceLine: UrsulaAudio, expansion: 'Base Game', difficulty: 'Hard', objective: 'Have the Trident and the Crown at Ursula\'s Lair' },
    { name: 'Prince John', image: PrinceJohnPNG, voiceLine: PrinceJohnAudio, expansion: 'Base Game', difficulty: 'Very Easy', objective: 'Accumulate 20 power' },
    { name: 'Jafar', image: jafarPNG, voiceLine: jafarAudio, expansion: 'Base Game', difficulty: 'Hard', objective: 'Unlock Cave of Wonders, find Magic Lamp, Hypnotize Genie, move Lamp to Sultan\'s palace' }
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
    { name: 'Gaston', image: GastonPNG, voiceLine: GastonAudio, expansion: 'Despicable Plots', difficulty: 'Medium', objective: 'Remove obstacles to prove you\'re the perfect man' },
    { name: 'The Horned King', image: HornedKingPNG, voiceLine: HornedKingAudio, expansion: 'Despicable Plots', difficulty: 'Hard', objective: 'Acquire Black Cauldron and fill realm with Cauldron Born' },
    { name: 'Lady Tremaine', image: LadyTremainePNG, voiceLine: LadyTremaineAudio, expansion: 'Despicable Plots', difficulty: 'Very Hard', objective: 'Marry one of your stepdaughters to The Prince' }
  ],
  'Bigger and Badder': [
    { name: 'Lotso', image: LotsoPNG, voiceLine: LotsoAudio, expansion: 'Bigger and Badder', difficulty: 'Hard', objective: 'Weaken heroes and move them to Caterpillar Room' },
    { name: 'Syndrome', image: SyndromePNG, voiceLine: SyndromeAudio, expansion: 'Bigger and Badder', difficulty: 'Very Hard', objective: 'Activate Remote at Omnidroid v.10 location, then clear realm of Heroes' },
    { name: 'Madam Mim', image: MadamMimPNG, voiceLine: MadamMimAudio, expansion: 'Bigger and Badder', difficulty: 'Medium', objective: 'Defeat Merlin in a wizard\'s duel' }
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
    { name: 'Tamatoa', image: TamatoaPNG, voiceLine: TamatoaAudio, expansion: 'Treacherous Tides', difficulty: 'Medium', objective: 'Have Heart of Te Fiti and Maui\'s Hook at Tamatoa\'s Lair' }
  ]
};

// Flatten all villains into a single array
const getAllVillains = () => {
  return Object.values(VillainsByExpansion).flat();
};

const VillanousCharacters = getAllVillains();
  class VillanousCharacterSelector extends React.Component {
    constructor(props) {
      super(props);
      this.audioRef = React.createRef();
      this.spinInterval = null;
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
        selectedMultiVillains: [] // Array of selected villains for multi-player
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
    }

    componentWillUnmount() {
      if (this.spinInterval) {
        clearInterval(this.spinInterval);
      }
    }

    getAvailableVillains() {
      const { filterMode, selectedExpansions, selectedVillains } = this.state;

      if (filterMode === 'expansion') {
        // Filter by selected expansions
        return VillanousCharacters.filter(villain =>
          selectedExpansions.includes(villain.expansion)
        );
      } else {
        // Filter by selected individual villains
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

      // Don't allow clicking during spin
      if (this.state.isSpinning) {
        return;
      }

      // Multi-player mode: select multiple villains
      if (playerCount > 1) {
        this.selectMultipleVillains(availableVillains, playerCount);
      } else {
        // Single player mode
        const randomIndex = Math.floor(Math.random() * availableVillains.length);
        const randomCharacter = availableVillains[randomIndex];
        this.spinToVillain(availableVillains, randomCharacter);
      }
    }

    spinToVillain(availableVillains, finalCharacter) {
      // Get speed multiplier
      const { animationSpeed } = this.state;
      const speedMultipliers = {
        fast: 0.5,    // 2x faster
        normal: 1,    // normal speed
        slow: 2       // 2x slower
      };
      const speedMult = speedMultipliers[animationSpeed] || 1;

      // Create a reel with the available villains
      const reelLength = availableVillains.length;
      const reelVillains = [];

      // Fill the reel with shuffled villains from available pool
      const shuffled = [...availableVillains].sort(() => Math.random() - 0.5);
      for (let i = 0; i < reelLength; i++) {
        reelVillains.push(shuffled[i]);
      }

      // Make sure the final villain is at the end
      reelVillains[reelLength - 1] = finalCharacter;

      this.setState({
        isSpinning: true,
        reelVillains: reelVillains,
        reelOffset: 0
      });

      let currentOffset = 0;
      let spinCount = 0;
      const totalSpins = reelLength - 1;
      let currentDelay = 30 * speedMult; // Starting delay in ms

      const spin = () => {
        spinCount++;
        currentOffset++;

        this.setState({
          reelOffset: currentOffset,
          currentCharacter: reelVillains[currentOffset]
        });

        // Calculate progressive delay (slow down effect)
        const progress = spinCount / totalSpins;
        currentDelay = (30 + (progress * progress * progress * 500)) * speedMult; // Cubic slowdown

        if (spinCount < totalSpins) {
          // Continue spinning
          this.spinInterval = setTimeout(spin, currentDelay);
        } else {
          // Final reveal
          setTimeout(() => {
            this.setState({
              isSpinning: false
            });

            // Play audio after animation completes
            setTimeout(() => {
              if (this.audioRef.current && finalCharacter.voiceLine) {
                this.audioRef.current.load();
                this.audioRef.current.play().catch(err => console.log('Audio play failed:', err));
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
        this.setState({
          isSpinning: false,
          currentCharacter: finalVillain,
          reelOffset: reelVillains.length - 1
        });

        // Play audio
        setTimeout(() => {
          if (this.audioRef.current && finalVillain.voiceLine) {
            this.audioRef.current.load();
            this.audioRef.current.play().catch(err => console.log('Audio play failed:', err));
          }
        }, 100);
      }
    }

    setAnimationSpeed(speed) {
      this.setState({ animationSpeed: speed });
    }

    setPlayerCount(count) {
      this.setState({
        playerCount: count,
        selectedMultiVillains: [] // Reset multi-villain selection
      });
    }

    selectMultipleVillains(availableVillains, count) {
      if (availableVillains.length < count) {
        alert(`Not enough villains available! Please select at least ${count} villains.`);
        return;
      }

      // Shuffle and select unique villains
      const shuffled = [...availableVillains].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, count);

      this.setState({
        selectedMultiVillains: selected,
        currentCharacter: selected[0] // Show first villain in main display
      });

      // Play first villain's audio
      setTimeout(() => {
        if (this.audioRef.current && selected[0].voiceLine) {
          this.audioRef.current.load();
          this.audioRef.current.play().catch(err => console.log('Audio play failed:', err));
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
      this.setState({
        selectedExpansions: Object.keys(VillainsByExpansion)
      });
    }

    selectAllVillains() {
      this.setState({
        selectedVillains: VillanousCharacters.map(v => v.name)
      });
    }
  
    render() {
      const { currentCharacter, filterMode, selectedExpansions, selectedVillains, isSpinning, animationSpeed, playerCount, selectedMultiVillains } = this.state;
      const availableCount = this.getAvailableVillains().length;

      return (
        <div className="app-container">
          <h1>Random Villainous Character</h1>

          {/* Game Settings */}
          <div className="game-settings">
            {/* Player Count */}
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

            {/* Animation Speed */}
            <div className="setting-group">
              <label>Speed:</label>
              <div className="button-group">
                <Button
                  size="sm"
                  variant={animationSpeed === 'fast' ? 'primary' : 'outline-primary'}
                  onClick={() => this.setAnimationSpeed('fast')}
                  disabled={isSpinning}
                >
                  Fast
                </Button>
                <Button
                  size="sm"
                  variant={animationSpeed === 'normal' ? 'primary' : 'outline-primary'}
                  onClick={() => this.setAnimationSpeed('normal')}
                  disabled={isSpinning}
                >
                  Normal
                </Button>
                <Button
                  size="sm"
                  variant={animationSpeed === 'slow' ? 'primary' : 'outline-primary'}
                  onClick={() => this.setAnimationSpeed('slow')}
                  disabled={isSpinning}
                >
                  Slow
                </Button>
              </div>
            </div>
          </div>

          {/* Filter Mode Toggle */}
          <div className="filter-mode-toggle">
            <Button
              variant={filterMode === 'expansion' ? 'primary' : 'secondary'}
              onClick={this.toggleFilterMode}
              className="mode-button"
            >
              {filterMode === 'expansion' ? 'Filter by Expansion' : 'Filter by Villain'}
            </Button>
          </div>

          {/* Filter Controls */}
          <div className="filter-controls">
            {filterMode === 'expansion' ? (
              <div className="expansion-filters">
                <div className="filter-header">
                  <h3>Select Expansions:</h3>
                  <Button size="sm" onClick={this.selectAllExpansions}>Select All</Button>
                </div>
                <div className="filter-grid">
                  {Object.keys(VillainsByExpansion).map(expansion => {
                    const villainCount = VillainsByExpansion[expansion].length;

                    return (
                      <label key={expansion} className="filter-item">
                        <input
                          type="checkbox"
                          checked={selectedExpansions.includes(expansion)}
                          onChange={() => this.toggleExpansion(expansion)}
                        />
                        <span>
                          {expansion} ({villainCount})
                        </span>
                      </label>
                    );
                  })}
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

          {/* Current Character Display - Only show in single player mode */}
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
                          <Image
                            src={villain.image}
                            alt={villain.name}
                            className="villain-image reel-villain"
                          />
                          <h2>{villain.name}</h2>
                          <p className="expansion-name">{villain.expansion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  currentCharacter.image ? (
                    <>
                      <Image
                        src={currentCharacter.image}
                        alt={currentCharacter.name}
                        className="villain-image"
                      />
                      <h2>{currentCharacter.name}</h2>
                      <p className="expansion-name">{currentCharacter.expansion}</p>

                      {/* Villain Info */}
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
                        <p>Image & Audio Not Available</p>
                      </div>
                      <p className="expansion-name">{currentCharacter.expansion}</p>
                    </>
                  )
                )}
              </div>
              {/* Always render audio element */}
              {currentCharacter.voiceLine && (
                <audio src={currentCharacter.voiceLine} ref={this.audioRef} style={{display: 'none'}}/>
              )}
            </div>
          )}

          {/* Randomize Button */}
          <div className="button-container">
            <div className="button-row">
              <Button
                className={`button randomize-button ${isSpinning ? 'spinning' : ''}`}
                onClick={this.handleClick}
                disabled={isSpinning}
              >
                {isSpinning ? 'Spinning...' : (playerCount > 1 ? `Choose ${playerCount} Villains!` : 'Choose a Villain!')}
              </Button>
              {isSpinning && playerCount === 1 && (
                <Button
                  className="skip-button"
                  onClick={this.skipAnimation}
                  variant="outline-light"
                >
                  Skip
                </Button>
              )}
            </div>
            <p className="available-count">
              {availableCount} villain{availableCount !== 1 ? 's' : ''} available
            </p>
          </div>

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

                    {/* Villain Info */}
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

        </div>
      );
    }
  }

export default VillanousCharacterSelector;
