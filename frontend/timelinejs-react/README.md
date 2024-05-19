# knight lab's Timeline for React

[Northwestern University' knight lab](https://knightlab.northwestern.edu/)
developed a great [Timeline](https://timeline.knightlab.com/) js library.

This simply provides the necessary wiring and type definitions for it to work as
a component in React.

## How to use

```ts
import React from 'react';
import Timeline from 'timelinejs-react';

const events: Slide[] = [];
const title: TitleSlide = {};
const options: TimelineOptions = {};

const MyComponent: React.FC = () => {
    return <Timeline
        target={<div className="timeline"/>}
        events={events}
        title={title} // optional
        options={options} // optional
    />;
};
```
