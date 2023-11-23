
import Link from 'next/link';
import Highlight from './components/highlight/Highlight';

export default function Home() {
  return (
    <main>
      <section>
        <h1>Cesare Pagano</h1>
        <p>
          De mon <Highlight>corps</Highlight> en <Highlight>décomposition</Highlight>,
          <br /> des <Highlight>fleurs</Highlight> pousseront.
        </p>
      </section>

      <section>
        <h1>Moi-même</h1>
        <p>
          I'm a <Highlight>developer</Highlight>, <Highlight>sysadmin</Highlight>, and <Highlight>cat</Highlight>.{' '}
          <br />I currently work at <Highlight>0x0</Highlight> as a <Highlight>sysadmin</Highlight> and{' '}
          <Highlight>technician</Highlight>.
        </p>

        <br />

        <p>
          I like <Highlight>design</Highlight>, <Highlight>art</Highlight>, <Highlight>music</Highlight>, and{' '}
          <Highlight>reading</Highlight>. <br />
          Sometimes I <Link href="/blog">write</Link> about <Highlight>life</Highlight>.
        </p>
      </section>
    </main>
  );
}
