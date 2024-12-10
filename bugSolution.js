```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await router.push('/another-page');
      // Other logic that might throw an error
      console.log('This might throw an error');
      //If you need to wait for the navigation to complete
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('Error during navigation:', error);
      // Handle the error appropriately, e.g., display a user-friendly message
    }
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent; 
```