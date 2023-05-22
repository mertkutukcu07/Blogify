import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import { BlogDetailProvider } from './src/Context/BlogDetailContext';

function App() {
  return (
    <BlogDetailProvider>
      <StackNavigator />
    </BlogDetailProvider>
  );
}

export default App;
