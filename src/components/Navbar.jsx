import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', top: 0, justifyContent: "space-between", background: "#000" }}>
    <Link to="/YouTube-V3/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} height={45} alt="logo" />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar