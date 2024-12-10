```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some other logic that might throw an error
    console.log('This might throw an error');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```