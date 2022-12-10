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


const VillanousCharacters = [
    {
      name: 'Dr. Facilier',
      image: DrFacPNG,
      voiceLine: DrFacAudio
    },
    {
      name: 'Maleficent',
      image: MalefPNG,
      voiceLine: MalefAudio
    },
    {
      name: 'Hades',
      image: HadesPNG,
      voiceLine: HadesAudio
    },
    {
      name: 'Ursula',
      image: UrsulaPNG,
      voiceLine: UrsulaAudio
    },
    {
      name: 'Jafar',
      image: jafarPNG,
      voiceLine: jafarAudio
    },
    {
      name: 'Captain Hook',
      image: CapHookPNG,
      voiceLine: CapHookAudio
    },
    {
      name: 'The Evil Queen',
      image: EvilQueenPNG,
      voiceLine: EvilQueenAudio
    },
    {
      name: 'Scar',
      image: ScarPNG,
      voiceLine: ScarAudio
    },
    {
      name: 'Professor Ratigan',
      image: RatiganPNG,
      voiceLine: RatiganAudio
    },
    {
      name: 'Yzma',
      image: YzmaPNG,
      voiceLine: YzmaAudio
    },
    {
      name: 'Cruella De Vil',
      image: CruellaDeVilPNG,
      voiceLine: CruellaDeVilAudio
    },
    {
      name: 'Mother Gothel',
      image: MotherGothelPNG,
      voiceLine: MotherGothelAudio
    },
    {
      name: 'Prince John',
      image: PrinceJohnPNG,
      voiceLine: PrinceJohnAudio
    },
    {
      name: 'The Queen of Hearts',
      image: QueenOfHeartsPNG,
      voiceLine: QueenOfHeartsAudio
    },
    {
      name: 'Pete',
      image: PetePNG,
      voiceLine: PeteAudio
    },
    {
      name: 'Gaston',
      image: GastonPNG,
      voiceLine: GastonAudio
    },
    {
      name: 'The Horned King',
      image: HornedKingPNG,
      voiceLine: HornedKingAudio
    },
    {
      name: 'Lady Tremaine',
      image: LadyTremainePNG,
      voiceLine: LadyTremaineAudio
    },
    {
      name: 'Lotso',
      image: LotsoPNG,
      voiceLine: LotsoAudio
    },
    {
      name: 'Madam Mim',
      image: MadamMimPNG,
      voiceLine: MadamMimAudio
    },
    {
      name: 'Syndrome',
      image: SyndromePNG,
      voiceLine: SyndromeAudio
    }
  ];
  class VillanousCharacterSelector extends React.Component {
    constructor(props) {
      super(props);
      this.audioRef = React.createRef();
      this.state = {
        currentCharacter: VillanousCharacters[0],
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      const randomIndex = Math.floor(Math.random() * VillanousCharacters.length);
      const randomCharacter = VillanousCharacters[randomIndex];
      this.setState({
        currentCharacter: randomCharacter
      });
  
      // Stop the audio
      this.audioRef.current.pause();
  
      // Play the audio again
      this.audioRef.current.play();
      
    }
  
    render() {
      return (
        <div>
          <h1>Random Villanous Character</h1>
          <Image src={this.state.currentCharacter.image} alt={this.state.currentCharacter.name} />
          <h1>{this.state.currentCharacter.name}</h1>
          <audio src={this.state.currentCharacter.voiceLine} ref={this.audioRef} autoPlay/>
          {/* <audio src={this.state.currentCharacter.voiceLine} controls autoplay/> */}
          <Button className="button" onClick={this.handleClick}>Choose a Villain!</Button>
        </div>
      );
    }
  }

export default VillanousCharacterSelector;
