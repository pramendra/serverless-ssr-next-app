/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';
import { prismicClient } from './lib/prismic';
const gql = require('graphql-tag');
const routeMain = express.Router({});

routeMain.get('/', function (req: any, res: any) {
  res.status(200).send('Hello World!');
});

routeMain.post('/webhook', (req: any, res: any) => {
  const {
    PRISMIC_WEBHOOK_SECRET = '',
    PRISMIC_GRAPHQL = '',
    PRISMIC_ACCESS_TOKEN = '',
  } = process.env;
  const { secret = '' } = res.body || {};
  if (secret && secret !== PRISMIC_WEBHOOK_SECRET) {
    res.status(403).send('permission denied');
    return;
  }

  const client = prismicClient(PRISMIC_GRAPHQL, PRISMIC_ACCESS_TOKEN);
  client
    .query({
      query: gql`
        {
          allNewss {
            edges {
              node {
                _meta {
                  id
                  uid
                  lastPublicationDate
                }
                hero
                title
                summary
                references {
                  title1
                  src {
                    _linkType
                    __typename
                    ... on _ExternalLink {
                      url
                    }
                  }
                }
                category
                tags {
                  tag
                }
                rank
              }
            }
          }
        }
      `,
    })
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error);
    });

  res.status(200).send('webhook');
});

export const http = routeMain;

exports.event = (event: any, callback: any) => {
  callback();
};
