// import { Component } from "preact";
import { useState } from "preact/hooks";
import Flicking from "@egjs/preact-flicking";
// import "../css/infinite.css";

export default function InfiniteFlicking() {
    // state = {
    //   list0: [0, 1, 2, 3, 4],
    //   list1: [0, 1, 2, 3, 4],
    //   list2: [0, 1, 2, 3, 4]
    // };
    const [list0, setList0] = useState([0, 1, 2, 3, 4]);
    const [list1, setList1] = useState([0, 1, 2, 3, 4]);
    const [list2, setList2] = useState([0, 1, 2, 3, 4]);

    // render() {
    return (
        <div id="infinite" className="container" >
            <h1>Infinite Flicking</h1>
            <h2>Append &amp; Prepend panel dynamically</h2>
            <ul className="extra">
                <li>You can dynamically add panels to the flicking.</li>
                <li>The panel's indexes are zero-based integer.</li>
                <li>
                    Note: The number displayed above each panel is not panel's index.
                </li>
            </ul>
            <Flicking className="flicking flicking0" gap={10}>
                {list0.map((num) => {
                    return (
                        <div
                            key={num}
                            className={"infinite infinite" + (Math.abs(num) % 5)}
                        >
                            {num}
                        </div>
                    );
                })}
            </Flicking>
            <div className="buttons">
                <button
                    id="prepend"
                    onClick={(e) =>
                        this.setState((state) => {
                            const start = state.list0[0] || 0;
                            return { list0: [start - 2, start - 1, ...state.list0] };
                        })
                    }
                >
                    {" "}
                    Prepend
                </button>
                <button
                    id="append"
                    onClick={(e) =>
                        this.setState((state) => {
                            const end = state.list0[state.list0.length - 1] || 0;
                            return { list0: [...state.list0, end + 1, end + 2] };
                        })
                    }
                >
                    Append
                </button>
            </div>
            <pre>
                <code className="hljs html" data-script="flicking0"></code>
            </pre>
            <h2>infinite: true &amp; needPanel event</h2>
            <ul className="extra">
                <li>
                    Enabling the infinite option can make <strong>needPanel</strong> event
                    to be triggered when more panels at moving direction should be fetched
                    within <strong>infiniteThreshold</strong> value.
                </li>
            </ul>
            <Flicking
                className="flicking flicking1"
                gap={10}
                infinite={true}
                infiniteThreshold={50}
                onNeedPanel={() => {
                    // this.setState((state) => {
                    //   const end = list1[list1.length - 1] || 0;
                    //   return { list1: [...state.list1, end + 1, end + 2] };
                    // });
                }}
            >
                {list1.map((num) => {
                    return (
                        <div
                            key={num}
                            className={"infinite infinite" + (Math.abs(num) % 5)}
                        >
                            {num}
                        </div>
                    );
                })}
            </Flicking>
            <pre>
                <code className="hljs html" data-script="flicking1"></code>
            </pre>
            <h2>infinite: true &amp; placeholder</h2>
            <ul className="extra">
                <li>
                    You can make continuous carousel UI with asynchronous data by adding
                    placeholder panel first, then update panel with fetched data later.
                </li>
            </ul>
            <Flicking
                className="flicking flicking2"
                gap={10}
                infinite={true}
                moveType={"freeScroll"}
                onNeedPanel={() => {
                    this.setState((state) => {
                        const end = state.list2[state.list2.length - 1] || 0;

                        return { list2: [...state.list2, end + 1, end + 2] };
                    });
                }}
            >
                {list2.map((num) => {
                    return (
                        <div key={num} num={num}>
                            {num}
                        </div>
                    );
                })}
            </Flicking>
            <pre>
                <code className="hljs html" data-script="flicking2"></code>
            </pre>
        </div>
    );
    // }
}
