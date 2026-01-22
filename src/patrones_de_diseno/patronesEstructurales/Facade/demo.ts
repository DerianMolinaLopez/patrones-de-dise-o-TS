import PopCornMaker from "./classes/PopCornMaker";
import Projector from "./classes/Projector";
import SoundSystem from "./classes/SoundSystem";
import VideoPlayer from "./classes/VideoPlayer";
import HomeTheaterFacade, { HomeTheaterOptions } from "./Facade";


const options:HomeTheaterOptions = {
    projector:new Projector(),
    soundSystem:new SoundSystem(),
    popMaker: new PopCornMaker(),
    videoplayer:new VideoPlayer()
}
const init:HomeTheaterFacade = new HomeTheaterFacade(options)

init.watchMovie('el ultimo samurai')
