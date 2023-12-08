import { useEffect, useState } from 'react'
import { CSSTransition } from "react-transition-group"

export default function Buttons(
  { showModal, setMode, mode, choice }:
    { showModal: any; setMode: any; mode: number, choice: any }) {

  const [isFading, setIsFading] = useState<boolean>(true)
  useEffect(() => { setIsFading(prevFade => !prevFade) }, [choice])

  return (
    <CSSTransition in={isFading} appear timeout={1000} classNames='buttonsFade'>
      <div className="btnContainer">
        <button className="game_btn btn font-600" aria-label='change game mode'
          onClick={() => mode ? setMode(0) : setMode(1)}>mode</button>
        <button className="btn rules_btn font-600"
          onClick={() => showModal(true)}>rules</button>
      </div>
    </CSSTransition>
  )
}