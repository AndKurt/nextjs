import React from "react";

import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
} from "@react-email/components";

type TThanksSubscribeEmail = {
    email: string;
};

const baseUrl = process.env.VERCEL_BASE_URL
    ? `https://${process.env.VERCEL_BASE_URL}`
    : "http://localhost:3000";

const main = {
    backgroundColor: "#ffffff",
};

const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
};

const h1 = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
};

const link = {
    color: "#2754C5",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
};

const text = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
};

export const ThanksSubscribeEmail = ({ email }: TThanksSubscribeEmail) => (
    <Html>
        <Head />
        <Preview>Thank you for subscribing!</Preview>

        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>Thank you for subscribing Modsen ProperLand news!</Heading>
                <Img
                    alt='Modsen ProperLand'
                    height='32'
                    //src={`${baseUrl}/_next/static/media/logo.b1324496.svg`}
                    src={`${baseUrl}/static/Logo.png`}
                    width='32'
                />
                <Text style={{ ...text, marginBottom: "14px" }}>
                    {`We will send news to your email: ${email}`}
                </Text>
                <Text
                    style={{
                        ...text,
                        color: "#ababab",
                        marginTop: "14px",
                        marginBottom: "16px",
                    }}
                >
                    If you didn&apos;t to get news. Unsubscribe{" "}
                    <Link
                        href={`${baseUrl}/unsubscribe`}
                        style={{
                            ...link,
                            display: "block",
                            marginBottom: "16px",
                        }}
                        target='_blank'
                    >
                        here
                    </Link>
                </Text>
            </Container>
        </Body>
    </Html>
);
