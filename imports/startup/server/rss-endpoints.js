import _ from 'underscore';
import moment from 'moment';
import { HTTP } from 'meteor/http';

var Api = new Restivus();

Api.addRoute('news_feeds/ap_top_news', {
  get: function () {
    let url = 'https://afs-prod.appspot.com/api/v2/feed/tag?tags=apf-topnews';
    let result = HTTP.get(url);

    let feed = {
      version: 'https://jsonfeed.org/version/1',
      title: 'AP Top News',
      home_page_url: 'https://apnews.com/tag/apf-topnews',
      icon: 'https://apnews.com/dist/assets/icons/icon-hires.png',
      favicon: 'https://apnews.com/dist/assets/icons/favicon.ico',
    };

    feed.items =  _.map(result.data.cards, function(card) {
      let contents = card.contents[0];

      return {
        id: card.id,
        url: contents.localLinkUrl,
        title: contents.headline,
        content_html: contents.firstWords,
        date_published: moment(contents.published).toISOString(),
        date_modified: moment(contents.updated).toISOString()
      };
    });

    return feed;
  }
});
