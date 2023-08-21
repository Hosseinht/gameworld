## React Query

```tsx
const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => setTodos(res.data))
            .catch((error) => setError(error));
    }, []);
```

This is how we typically fetch data.\
Problems with this:

1. Side effect. Sometimes we need a cleanup function to undo what we did before.
2. No separation of concern. There is no reusability, modularity. We need to encapsulate the logic inside a 
3. No retrying failed request
4. No automatic refresh
5. No caching

This is where **React Query** comes into play. **React Query** is a powerful library for managing data fetching and 
caching in React application

**Installation**
```bash
npm i @tanstack/react-query@4.28
```
Now in **main.tsx**
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);

```

## Fetching Data with React Query

