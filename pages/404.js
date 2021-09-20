import Link from 'next/link';

export default function Home() {

    return (
        <div className="App">
            <div className="body">
                <div>You are trying to go somewhere else.</div>
                <Link href="/localgame">
                    <a>
                        Home
                    </a>
                </Link>
            </div>
        </div>
    );
}
