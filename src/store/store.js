import createStore from 'storeon';
import persistState from '@storeon/localstorage';
import stages from '../data/stages'

const preloader = document.querySelector('#preload__percent');

const stage = store => {
  store.on('@init', () => ({
    stage: 0,
    final: false,
    modal: false,
    preloader: {
      container: preloader,
      count: 0,
      show: true,
    },
    countQuestions: 0,
    countCorrectAnswers: 0,
    kviz: {
      order: 1,
      show: false,
    },
    help: false
  }));
  store.on('modal/show', ({quiz}, state) => {
    return ({modal: true});
  });
  store.on('modal/hide', ({quiz}, state) => {
    return ({modal: false});
  });
  store.on('kviz/set', ({kviz}, state) => {
    return ({kviz: {...kviz, order: state.order}});
  });

  store.on('preload/set', ({preloader}, state) => {
    preloader.container.innerHTML = `${state} %`;
    if (state === 100) {
      document.querySelector('#preload').style.opacity = 0;
      document.querySelector('#preload').style.zIndex = -99;
    }
    return ({preloader: {...preloader, count: state}});
  });

  store.on('kviz/show', ({kviz}) => {
    return ({kviz: {...kviz, show: true}});
  });
  store.on('kviz/hide', ({kviz}) => {
    return ({kviz: {...kviz, show: false}});
  });

  store.on('stage/final', ({final}, state) => {
    return ({final: state});
  });
  store.on('stage/to', ({stage}, number) => {
    if (number === 0 || number) {
      return ({stage: number});
    }
  });
  store.on('help/show', ({kviz}) => {
    return ({help: true});
  });
  store.on('help/hide', ({kviz}) => {
    return ({help: false});
  });
  store.on('countQuestion', ({countQuestions}) => {
    return ({countQuestions: countQuestions + 1});
  });
  store.on('countCorrectAnswers', ({countCorrectAnswers}) => {
    return ({countCorrectAnswers: countCorrectAnswers + 1});
  });
  store.on('stage/next', ({stage}, data) => {
    store.dispatch('countQuestion');
    if (data) {
      if (data.right) {
        store.dispatch('countCorrectAnswers')
      }
    }

    if (stages.length <= stage + 1) {
      store.dispatch('stage/final', true);
      return ({stage: stage});
    }
    return ({stage: stage + 1});
  });
};
/*

const audio = store => {
  store.on('@init', () => ({
    audio: {
      intro: false,
      win: false,
    },
  }));

  store.on('intro/on', ({audio}) => {
    return ({audio: {...audio, intro: true}});
  });
  store.on('intro/off', ({audio}) => {
    return ({audio: {...audio, intro: false}});
  });
};

const progress = store => {
  store.on('@init', () => ({progress: 0}));
  store.on('setProgress', ({progress}, count) => {
    return ({progress: count});
  });
};

const articles = store => {
  store.on('@init', () => ({articles: {}}));
  store.on('articles/addMedal', ({articles}, data) => {
    const [id, medal, percent] = data;
    return {
      articles: {
        ...articles, [id]: {
          medal: medal,
          percent: percent
        },
      },
    };
  });
};
*/

export const store = createStore([stage, persistState(['stage'])]);