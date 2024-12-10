# Next.js router.push() Error Handling

This example demonstrates a scenario where using `router.push()` within a component's `onClick` handler, and that component being wrapped in an `ErrorBoundary`, doesn't reliably prevent errors thrown after the navigation call. 

The issue is that the error occurs *after* `router.push()` successfully begins the navigation, resulting in a broken user experience. 

The solution explores ways to mitigate the problem by employing promises and async/await, thereby ensuring that errors are handled properly, even after initiating navigation.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button. Observe the error in the console despite the `ErrorBoundary`.