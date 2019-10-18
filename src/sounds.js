import {Howl, Howler} from 'howler';

const data = {
    success: [
        require('./assets/sound/success_mixdown.aac'),
        require('./assets/sound/success_mixdown.mp3'),
        require('./assets/sound/success_mixdown.ogg'),
    ]
};

export const sounds = {
    success: new Howl({
        src: data.success
    })
};