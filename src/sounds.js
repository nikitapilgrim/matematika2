import {Howl, Howler} from 'howler';

const data = {
    success: [
        require('./assets/sound/success_mixdown.aac'),
        require('./assets/sound/success_mixdown.mp3'),
        require('./assets/sound/success_mixdown.ogg'),
    ],
    background: [
        require('./assets/sound/backgroundmusic.aac'),
        require('./assets/sound/backgroundmusic.mp3'),
    ]
};

export const sounds = {
    success: new Howl({
        src: data.success
    }),
    background: new Howl({
        src: data.background,
        autoplay: true,
        loop: true,
    })
};