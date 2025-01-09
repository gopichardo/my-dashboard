"use client"

import { useState } from "react";

interface CartCounterProps {
    value?: number;
}

export default function CartCounter({ value = 0 }: CartCounterProps) {
    const [itemsCounter, setItemsCounter] = useState(value);


    const handleIncrement = () => {
        setItemsCounter(itemsCounter + 1)
    };

    const handleDecrement = () => {
        setItemsCounter(itemsCounter - 1)
    };

    return (
        <>
            <span className="text-9xl">{itemsCounter}</span>

            {/* Client Side  */}
            <div className="flex">
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={handleDecrement}
                >
                    -1
                </button>
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={handleIncrement}
                >
                    +1
                </button>
            </div>
        </>
    );
}