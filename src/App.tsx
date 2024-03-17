import { FC } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { ReactAudioPlayerExample } from "./screens/react-audio-player";
import { H5AudioPlayerExample } from "./screens/react-h5-audio-player";

const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/react-audio-player' element={<ReactAudioPlayerExample/>} />
        <Route path='/react-h5-audio-player' element={<H5AudioPlayerExample />} />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
