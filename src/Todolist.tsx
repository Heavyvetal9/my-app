import React from "react";

export function Todolist() {
    return (
        <div>
            <h3>What to Learn</h3>
            <div>
                <input/>
                <button>+</button>
                <ul>
                    <li><input type="checkbox" checked={true}/><span>CSS&HTML</span></li>
                    <li><input type="checkbox" checked={true}/><span>JS</span></li>
                    <li><input type="checkbox" checked={false}/><span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Complete</button>
                </div>
            </div>
        </div>
    )
}