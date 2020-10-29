import { ApolloProvider } from '@apollo/client';
import { User } from '@graphql';
import { apolloClient, mixinUtils } from '@shared';
import '@uiw/react-markdown-preview/dist/markdown.css';
import '@uiw/react-md-editor/dist/markdown-editor.css';
import { Alert, Col, Layout, Row } from 'antd';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menus from './menus';
import { Routes } from './routes';
import { CurrentUserContext, MixinContext, PrsdiggContext } from './shared';

export default function App(props: {
  csrfToken: string;
  currentUser?: Partial<User>;
  prsdigg: {
    appId: string;
  };
}) {
  const { csrfToken, currentUser, prsdigg } = props;
  return (
    <ApolloProvider client={apolloClient('/graphql', csrfToken)}>
      <PrsdiggContext.Provider value={prsdigg}>
        <MixinContext.Provider
          value={{
            mixinAppversion: mixinUtils.appVersion(),
            mixinConversationId: mixinUtils.conversationId(),
            mixinEnv: mixinUtils.environment(),
            mixinImmersive: mixinUtils.immersive(),
          }}
        >
          <CurrentUserContext.Provider value={currentUser}>
            <Router>
              <Layout>
                <Menus />
                <Alert
                  message='网站公测中，正式上线后会将数据重置!'
                  type='warning'
                />
                <Layout.Content
                  style={{ background: '#fff', padding: '1rem 1rem ' }}
                >
                  <Row justify='center'>
                    <Col
                      flex={1}
                      xs={24}
                      sm={24}
                      md={18}
                      lg={16}
                      xl={14}
                      xxl={12}
                    >
                      <Routes />
                    </Col>
                  </Row>
                </Layout.Content>
              </Layout>
            </Router>
          </CurrentUserContext.Provider>
        </MixinContext.Provider>
      </PrsdiggContext.Provider>
    </ApolloProvider>
  );
}
