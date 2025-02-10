```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Using setCount to update the state
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div> 
       <p>You clicked {count} times</p>
    </div>
  );
}
```