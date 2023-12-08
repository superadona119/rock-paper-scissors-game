import VictoryShadow from "./VictoryShadow"
import { useState, useEffect, useRef } from "react"
import { CSSTransition } from 'react-transition-group'

export default function Reveal({ currentGameArr, setChoice, setScore, choice }:
    { currentGameArr: string[], setChoice: any, setScore: any, choice: string }) {

    const [playerChoice] = [...currentGameArr]
    const [housePick, setHousePick] = useState<number>(0)
    const [reveal, setReveal] = useState<boolean>(false)
    const [animateFade, setAnimateFade] = useState<boolean>(true)

    const resultRef = useRef(null), playerRef = useRef(null), houseRef = useRef(null);

    useEffect(() => { choice ? setAnimateFade(true) : setAnimateFade(false) }, [choice])
    useEffect(() => {
        setTimeout(() => { randomHouseChoice(); playerWinScoreIncrement() }, 1000);
    }, [housePick])

    return (
        <div className={reveal ? "revealContainer revealed" : "revealContainer"}>
            <CSSTransition in={reveal} timeout={1000} nodeRef={resultRef}
                classNames='animate'>
                <div ref={resultRef} className={reveal
                    ? "revealContainer_result"
                    : 'revealContainer_result-notRevealed'}>
                    <p className="font-700">{`you ${resultFunc()}`}</p>
                    <button className="font-700"
                        onClick={() => setChoice(undefined)}>play again</button>
                </div>
            </CSSTransition>
            <CSSTransition in={reveal} timeout={1000} nodeRef={playerRef}
                classNames='playerSlideAnimate'>
                <div ref={playerRef} className={"revealContainer_player"}>
                    <div className={`button button_${playerChoice} revealButton`}>
                        <div>{resultFunc() === 'win' && <VictoryShadow />}</div>
                    </div>
                    <CSSTransition in={animateFade} timeout={500} appear
                        classNames='revealContainerFade'>
                        <h2 className="font-600">you picked</h2>
                    </CSSTransition>
                </div>
            </CSSTransition>
            <CSSTransition in={reveal} timeout={1000} nodeRef={houseRef}
                classNames='houseSlideAnimate'>
                <CSSTransition in={animateFade} timeout={500} appear
                    classNames='revealContainerFade'>
                    <div ref={houseRef} className="revealContainer_house">
                        <div className={reveal
                            ? `button revealButton button_${currentGameArr[housePick]}`
                            : 'button revealButton revealButton_blank'}>
                            {reveal && <div>{resultFunc() === 'lose' && <VictoryShadow />}</div>}
                        </div>
                        <h2 className="font-600">the house picked</h2>
                    </div>
                </CSSTransition>
            </CSSTransition>
        </div>
    )

    function resultFunc(): string {
        if (housePick === 0) {
            return 'draw'
        } else if (housePick % 2 === 1) {
            return 'lose'
        } else if (housePick % 2 === 0) {
            return 'win'
        }
        return '';
    }

    function randomHouseChoice() {
        if (!housePick) {
            setHousePick(Math.floor(Math.random() * currentGameArr.length))
            setReveal(true)
        }
        return
    }

    function playerWinScoreIncrement() {
        if (resultFunc() === 'win') {
            setScore((prevScore: number) => prevScore += 1)
        }
        return
    }

}