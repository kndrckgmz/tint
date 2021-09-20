import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Link href="/multiplayer">
        <a>
          Online multiplayer
        </a>
      </Link>
      <br />
      <Link href="/localgame">
        <a>
          Local Game
        </a>
      </Link>
    </>
  );
}
