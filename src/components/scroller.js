import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import ResultsMatches from "./resultsMatches";
import PendingMatches from "./pendingMatches";

let width = 0;

export default function Scroller(props) {
    const ref = useRef();
    const { events } = useDraggable(ref);

    const scrollLeft = () => {
        width -= parseInt(document.querySelector('.match-block-wrapper').getBoundingClientRect().width);
        if (width < 0) {
            width = 0;
        }
        console.log(width)
        document.querySelector('.scroller-wrapper').scrollTo(width,0);
    }   

    const scrollRight = () => {
        width += parseInt(document.querySelector('.match-block-wrapper:first-child').getBoundingClientRect().width);
        if (width > parseInt(document.querySelector('.arrow-slider').getBoundingClientRect().width)) {
            width = parseInt(document.querySelector('.arrow-slider').getBoundingClientRect().width);
        }
        console.log(width)
        document.querySelector('.scroller-wrapper').scrollTo(width,0);
    }

    return (<div className="scroller-outer">
        <div class="arrow-left" onClick={scrollLeft}><img src="img/arrow-left.svg"></img></div><div class="arrow-right"><img src="img/arrow-right.svg" onClick={scrollRight}></img></div>
        <div className="scroller-wrapper" {...events} ref={ref}>
            <div className="arrow-slider overflow-x-scroll scrollbar-hide">
                {typeof props.pending !== 'undefined' ? <PendingMatches pending={props.pending} /> : ''}
            </div>
        </div>
    </div>
    );
}

