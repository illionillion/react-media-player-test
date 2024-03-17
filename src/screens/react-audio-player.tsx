import { Center, Heading, Link as UILink } from "@yamada-ui/react";
import { FC } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

export const ReactAudioPlayerExample: FC = () => {
    return <Center w="100vw" h="100dvh" flexDir="column">
        <Heading>react-audio-player</Heading>
        <UILink as={Link} to='/'>to back</UILink>
        <ReactAudioPlayer src="http://kolber.github.io/audiojs/demos/mp3/juicy.mp3"
            autoPlay
            controls
            style={{ backgroundColor: "#000" }}
            muted
            onListen={() => console.log("listen!")}
        />
    </Center>
}