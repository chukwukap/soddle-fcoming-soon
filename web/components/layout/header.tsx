import SoddleLogo from '@/app/games/_components/soddle-logo';
import Container from './container';

export default function Header() {
  return (
    <header className="mb-10">
      <Container className="">
        <SoddleLogo />
      </Container>
    </header>
  );
}
