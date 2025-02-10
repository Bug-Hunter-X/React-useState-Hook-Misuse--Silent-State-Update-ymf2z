# React useState Hook Misuse: Silent State Update
This example demonstrates a common mistake when using the useState hook in React.  Directly modifying the state variable (count) without using the setter function (setCount) prevents React from detecting the change, leading to unexpected behavior: the UI does not reflect the actual changes in the state.

**The bug:**
The code attempts to increment the count variable directly within the useEffect hook. This is incorrect; you must always use the setter function (setCount) provided by useState to update state values and trigger a re-render.

**The solution:**
The solution uses the correct approach - using setCount to update the state. This tells React that the state has changed, triggering a re-render and updating the UI accordingly.
