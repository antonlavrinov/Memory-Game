import chocolate from './images/candies/chocolate-min.png';
import chocolateBall from './images/candies/chocolate-ball-min.png';
import chupa from './images/candies/chupa-min.png';
import candy from './images/candies/candy-min.png';
import mellow from './images/candies/mellow-min.png';
import ball from './images/candies/ball-min.png';
import lollypop from './images/candies/lollypop-min.png';
import lemon from './images/candies/lemon-min.png';
import marshmallow from './images/candies/marshmallow-min.png';
import i18n from './i18n';
import i18next from 'i18next';

let candies = [];

i18next
    .loadNamespaces("translation")
    .then(() => {
        candies = [
            {id: 0, url: chocolate, name: `${i18n.t('candies.chocolate')}`, taste: `${i18n.t('candies.taste.chocolate')}`, color: "brown" },
            {id: 1, url: chocolateBall, name: `${i18n.t('candies.chocolateBall')}`, taste: `${i18n.t('candies.taste.chocolateBall')}`, color: "brown" },
            {id: 2, url: chupa, name: `${i18n.t('candies.chupa')}`, taste: `${i18n.t('candies.taste.chupa')}`, color: "brown" },
            {id: 3, url: candy, name: `${i18n.t('candies.candy')}`, taste: `${i18n.t('candies.taste.candy')}`, color: "purple" },
            {id: 4, url: mellow, name: `${i18n.t('candies.mellon')}`, taste: `${i18n.t('candies.taste.mellon')}`, color: "purple" },
            {id: 5, url: ball, name: `${i18n.t('candies.ball')}`, taste: `${i18n.t('candies.taste.ball')}`, color: "purple" },
            {id: 6, url: lollypop, name: `${i18n.t('candies.lollypop')}`, taste: `${i18n.t('candies.taste.lollypop')}`, color: "orange" },
            {id: 7, url: lemon, name: `${i18n.t('candies.lemon')}`, taste: `${i18n.t('candies.taste.lemon')}`, color: "orange" },
            {id: 8, url: marshmallow, name: `${i18n.t('candies.marshmallow')}`, taste: `${i18n.t('candies.taste.marshmallow')}`, color: "orange" },
        ]
        console.log("ПРОВЕЕРКААА", candies[0].name)
        return candies;
    });

i18next
    .loadNamespaces("translation")
    .then(() => {    
        i18next
            .on('languageChanged', () => {
                candies = [
                    {id: 0, url: chocolate, name: `${i18n.t('candies.chocolate')}`, taste: `${i18n.t('candies.taste.chocolate')}`, color: "brown" },
                    {id: 1, url: chocolateBall, name: `${i18n.t('candies.chocolateBall')}`, taste: `${i18n.t('candies.taste.chocolateBall')}`, color: "brown" },
                    {id: 2, url: chupa, name: `${i18n.t('candies.chupa')}`, taste: `${i18n.t('candies.taste.chupa')}`, color: "brown" },
                    {id: 3, url: candy, name: `${i18n.t('candies.candy')}`, taste: `${i18n.t('candies.taste.candy')}`, color: "purple" },
                    {id: 4, url: mellow, name: `${i18n.t('candies.mellon')}`, taste: `${i18n.t('candies.taste.mellon')}`, color: "purple" },
                    {id: 5, url: ball, name: `${i18n.t('candies.ball')}`, taste: `${i18n.t('candies.taste.ball')}`, color: "purple" },
                    {id: 6, url: lollypop, name: `${i18n.t('candies.lollypop')}`, taste: `${i18n.t('candies.taste.lollypop')}`, color: "orange" },
                    {id: 7, url: lemon, name: `${i18n.t('candies.lemon')}`, taste: `${i18n.t('candies.taste.lemon')}`, color: "orange" },
                    {id: 8, url: marshmallow, name: `${i18n.t('candies.marshmallow')}`, taste: `${i18n.t('candies.taste.marshmallow')}`, color: "orange" },
                ]
                console.log("bbbbbbbbbbbb", candies[0].name)
                return candies;

            });
    });

export {candies};


