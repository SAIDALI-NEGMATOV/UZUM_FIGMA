import './App.css';
import { Box } from '@mui/material';
import { Components } from './Components/Components';
import { Nav } from './Components/Nav/Nav';
import { Search } from './Components/Search/Search';
import { Navigation } from './Components/Navigation/Navigation';

function App() {
  return (
    <Box>
      <Nav/>
      <Search/>
      <Navigation/>
      <Components/>
    </Box>
  );
}

export default App;
