import { Center, Heading, Link as UILink } from "@yamada-ui/react";
import { FC } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import { Link } from "react-router-dom";

export const H5AudioPlayerExample: FC = () => {
    return <Center w="100vw" h="100dvh" flexDir="column" px={5}>
        <Heading>react-h5-audio-player</Heading>
        <UILink as={Link} to='/'>to back</UILink>
        <H5AudioPlayer src="http://kolber.github.io/audiojs/demos/mp3/juicy.mp3"
            autoPlay
            onPlay={() => {
                console.log("play!!");
            }}
            onListen={() => {
                console.log("listen!!");
            }}
            muted
        />
    </Center>
}