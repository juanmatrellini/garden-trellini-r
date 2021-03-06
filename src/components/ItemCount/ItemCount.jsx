import React, { useState } from "react";
import "./ItemCount.css"

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const handleAdd = () => {
        if (count < stock) {
            return setCount(count + 1)
        }
    }

    const handleLess = () => {
        if (count > initial) {
            return setCount(count - 1)
        } else if (count > 0 && count <= 1) {
            return count
        }
    }

    return (
        <div>
            <div className="ItemCount">
                <button className="btnLess" onClick={handleLess}>-</button>
                <span className="count">{count}</span>
                <button className="btnAdd" onClick={handleAdd}>+</button>
            </div>
            <div className="divBuy">
                <button className="btnBuy" onClick={() => onAdd(count)}>COMPRAR</button>
            </div>
        </div>
    );
}

export default ItemCount;
