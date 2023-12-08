import { useState, useEffect, } from "react"
import Header from './components/Header'
import GameGrid from './components/GameGrid'
import Modal from './components/Modal'
import Buttons from "./components/Buttons"
import { gameModes } from './data.tsx'
import '../dist/css/index.css'

function App() {

  const [score, setScore] = useState<number>(0)
  const [isModal, setIsModal] = useState<boolean>(false)
  const [choice, setChoice] = useState<any>(undefined)
  const [currentGameArr, setCurrentGameArr] = useState<string[]>([])
  const [mode, setMode] = useState<number>(0)

  let currentMode = gameModes[mode]

  useEffect(() => changeMode(), [mode])
  useEffect(() => createWinConditionsArr(), [choice])

  return (
    <main>
      <Header
        score={score}
        mode={mode}
        altText={currentMode.options.join(', ')} />

      <GameGrid
        mode={mode}
        choice={choice}
        setChoice={setChoice}
        setScore={setScore}
        currentGameArr={currentGameArr} />

      <Buttons
        setMode={setMode}
        mode={mode}
        choice={choice}
        showModal={setIsModal} />

      <Modal
        currentMode={currentMode}
        modalOpen={isModal}
        closeModal={() => setIsModal(false)} />
    </main>
  )

  function changeMode() {
    currentMode = gameModes[mode];
    setChoice(undefined)
  }

  function createWinConditionsArr() {
    let { options } = currentMode
    if (choice) {
      const choiceIndex: number = options.indexOf(choice)
      const gameArr: string[] = options.slice(choiceIndex)
        .concat(options.slice(0, choiceIndex))
      setCurrentGameArr(gameArr)
    }
  }

}

export default App