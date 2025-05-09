import QuizGame from '@/components/quiz-game';

export function generateStaticParams() {
  const levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  const topics = ['grammar', 'listening', 'speaking', 'reading'];

  const params = levels.flatMap(level =>
    topics.map(topic => ({ level, topic }))
  );

  return params;
}

export default function Page({ params }: { params: { level: string; topic: string } }) {
  return (
    <QuizGame params={params} />
  );
}
