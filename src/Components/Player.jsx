import { IconContext } from 'react-icons'
import { FaPlayCircle } from 'react-icons/fa'
import { BsFillPauseCircleFill, BsFillStopCircleFill } from 'react-icons/bs'

import styled from 'styled-components'

import { useState } from 'react';

import ReactPlayer from 'react-player'


const DivCss = styled.div`
  display: flex;
  margin-left: 15px;

`

const ContainerCss = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
`

export default function Player(props) {
  const [state, setState] = useState({
    playing: false,
    url: props.link,
    play: props.play
  })


  function btnPlayPause() {
    setState({ 
      ...state,
      url: props.link,
      playing: !state.playing
    })
  }


  function btnStop() {
    setState({
      ...state,
      url: null,
      playing: false
    })
  }


  return (
    <IconContext.Provider value={{ size: '50px', color: '#EE6C4D' }}>
      <ContainerCss>
        <ReactPlayer url={state.url} playing={state.playing} width='0px' height='0px' />
        <BsFillStopCircleFill onClick={btnStop} />

        {state.playing ?


          <DivCss >
            <BsFillPauseCircleFill onClick={btnPlayPause} />
          </DivCss>

          :
          <DivCss >
            <FaPlayCircle onClick={btnPlayPause} />
          </DivCss>
        }



      </ContainerCss>
    </IconContext.Provider>
  )
}

// https://drive.google.com/uc?id=1ls4MZbcu4KAIGFodhTHdz18-MQUA83A1#.mp3

/*

*/