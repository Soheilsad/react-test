import React, { useEffect, useState } from 'react';
import Queue from './Queue.js';

const BoundingBoxImage = () => {
    const coords1 = {
        x1: 73.936500549316406,
        y1: 97.54302978515625, // Simplified calculations for clarity
        x2: 306.0780029296875,
        y2: 111,
        text: 'Hello My name is MohammadSoheil Sadabadi',
        name:'lol1'
    };

    const coords2 = {
        x1: 23.936500549316406,
        y1: 97.54302978515625, // Simplified calculations for clarity
        x2: 306.0780029296875,
        y2: 111,
        text: 'Hello My name is NOT MohammadSoheil Sadabadi',
        name:'lol2',
    };

    const coords3 = {
        x1: 23.936500549316406,
        y1: 137.54302978515625, // Simplified calculations for clarity
        x2: 306.0780029296875,
        y2: 171,
        text: 'Hello YOUR name is MohammadSoheil Sadabadi',
        name: 'lol3'
    };
    // much easier to do it like this. so get a json array from server
    const [boundingBoxHandlers, setBoundingBoxHandlers] = useState([coords1]);
    const [queue, setQueue] = useState(new Queue([coords2, coords3]));

    const handleDequeue = () => {
        if (!queue.isEmpty()) {
            const item = queue.front();
            setQueue((prevQueue) => {
                const newQueue = new Queue(prevQueue.items.slice(1));
                return newQueue;
            });

            setBoundingBoxHandlers((prevHandlers) => [...prevHandlers, item]);
        } else {
            console.log('queue was empty');
        }
    };
    const handleInputChange = (event) => {
        const newhandler = boundingBoxHandlers[boundingBoxHandlers.length - 1];
        console.log(boundingBoxHandlers)
        console.log(newhandler);
        newhandler.text = event.target.value
        setBoundingBoxHandlers([...boundingBoxHandlers.slice(0, -1),newhandler ]);
      };
    return (
        <div style={{ position: 'relative' }}>
            <img src="out0.jpg" alt="Your Image" style={{ maxWidth: '100%', height: '792px', pointerEvents: 'none' }} />
            {boundingBoxHandlers.map((handler, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: handler.x1 + 'px',
                        top: handler.y1 + 'px',
                        width: (handler.x2 - handler.x1) + 'px',
                        lineHeight: handler.text.length < 25 ? '20%' : '5%',
                        fontSize: '15%',
                        height: (handler.y2 - handler.y1) + 'px',
                        border: '2px solid red',
                        boxSizing: 'border-box',
                    }}
                    onClick={handleDequeue}
                >
                    <input type='text' name={handler.name} value={handler.text} onChange={handleInputChange}></input>
                    {handler.text}
                </div>
            ))}
            <button onClick={handleDequeue}>Dequeue</button>
        </div>
    );
};

export default BoundingBoxImage;
