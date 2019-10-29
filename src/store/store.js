import createStore from 'storeon';
import persistState from '@storeon/localstorage';
import stages from '../data/stages'

const stage = store => {
  store.on('@init', () => ({
    stage: 0,
    final: false,
    modal: false,
    kviz: {
      order: 1,
      show: false,
    }
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
  store.on('stage/next', ({stage}, number) => {
    if (stages.length <= stage + 1) {
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