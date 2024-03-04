
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import Image from "next/image";
import * as React from "react";

interface ContactMeProps {
  name: string,
  tel: string,
  from: string,
  idea: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactMe = ({
  name,
  tel,
  from,
  idea
}: ContactMeProps) => {

  return (
    <Html>
      <Head />
      <Preview>{'previewText'}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
  
            </Section>


            <Text className="text-black text-[14px] leading-[24px]">

              <span>
                {' '}{name}{' - '}
              </span>
              <Link
                href={`mailto:${from}`}
                className="text-blue-600 no-underline"
              >
                <strong>
                  {from}
                </strong>
              </Link>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Tel:
              <Link
                href={`tel:${from}`}
                className="text-blue-600 no-underline"
              >
                <strong>
                  {' '}{tel}
                </strong>
              </Link>
            </Text>

            <Text>
              <h3>Idea</h3>
              <p>
                {idea}
              </p>
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={''}
              >
                Join the team
              </Button>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactMe.PreviewProps = {
  name: 'Antonio Moccia',
  tel: '3314487994',
  from: "moccia.ant@gmail.com",
  idea: `Cillum esse eiusmod incididunt eiusmod laborum non consectetur esse non Lorem occaecat. Ea do tempor in laboris sint eu incididunt voluptate non aliqua ut. Aliquip commodo quis minim veniam excepteur adipisicing Lorem irure. Dolor sit labore mollit incididunt. Aute consequat consectetur mollit sint consequat duis.
        Aliqua elit et non Lorem labore proident. Esse Lorem nostrud irure ea labore proident aute nostrud nostrud aliquip nulla irure veniam mollit. Esse voluptate id quis ex amet sit fugiat incididunt qui aliquip do duis. Proident duis eu deserunt adipisicing aute velit enim magna culpa labore tempor enim commodo. Tempor nostrud occaecat ea aliquip elit.`
} as ContactMeProps;

export default ContactMe;
