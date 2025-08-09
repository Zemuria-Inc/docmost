import { container, footer, h1, logo, main } from '../css/styles';
import {
  Body,
  Container,
  Head,
  Html,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface MailBodyProps {
  children: React.ReactNode;
  appName?: string;
}

export function MailBody({ children, appName = 'Docmost' }: MailBodyProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <MailHeader />
        <Container style={container}>{children}</Container>
        <MailFooter appName={appName} />
      </Body>
    </Html>
  );
}

export function MailHeader() {
  return (
    <Section style={logo}>
      {/* <Heading style={h1}>docmost</Heading> */}
    </Section>
  );
}

export function MailFooter({ appName = 'Docmost' }: { appName?: string }) {
  return (
    <Section style={footer}>
      <Row>
        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
          © {new Date().getFullYear()} {appName}, All Rights Reserved <br />
        </Text>
      </Row>
    </Section>
  );
}
