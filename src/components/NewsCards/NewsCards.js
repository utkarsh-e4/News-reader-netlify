import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';


import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color: '#231F20', title: 'Latest News',info: 'Gives you top-headlines from all categories...', text: 'Give me the latest news' },
    { color: '#231F20', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology...', text: 'Give me the latest sports news' },
    { color: '#231F20', title: 'News by Terms', info: 'Bitcoin, PlayStation, Smartphones, Coronavirus...', text: 'What\'s up with smartphones ?' },
    { color: '#231F20', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({articles, activeArticle}) => {
    const classes = useStyles();

    if(!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                <Typography variant="h5" style={{fontFamily:'Gill Sans MT', fontWeight:'bold'}}>{infoCard.title}</Typography>
                                { infoCard.info ? (<Typography variant="6"><strong><u>{infoCard.title.split(' ')[2]}</u>
                                </strong><br /><br />{infoCard.info}</Typography>): null}
                                <Typography variant="h6">Try Saying :- <br /> <i style={{fontFamily:'Sans-serif',fontSize:'16px'}}>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>           
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>
                ))}
            </Grid>           
        </Grow>
    );
}

export default NewsCards;