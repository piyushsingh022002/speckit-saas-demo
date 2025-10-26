import styled from "styled-components";

interface KnowledgeCardProps {
  title: string;
  content: string;
  link?: string;
}

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  max-width: 400px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Link = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const KnowledgeCard = ({ title, content, link }: KnowledgeCardProps) => (
  <Card>
    <Title>{title}</Title>
    <Text>{content}</Text>
    {link && <Link href={link} target="_blank" rel="noopener noreferrer">Learn more →</Link>}
  </Card>
);
