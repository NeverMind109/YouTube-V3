import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components/";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route exact path="/YouTube-V3/" element={<Feed />} />
        <Route path="/YouTube-V3/video/:id" element={<VideoDetail />} />
        <Route path="/YouTube-V3/channel/:id" element={<ChannelDetail />} />
        <Route path="/YouTube-V3/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
