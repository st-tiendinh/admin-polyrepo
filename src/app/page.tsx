'use client';

import { formatDate } from '@st-tiendinh/shared-utils-polyrepo';
import { Button } from '@/components/ui';

export default function Home() {
  const today = new Date();

  return (
    <main style={{ padding: '50px', fontFamily: 'system-ui' }}>
      <h1 className="text-4xl font-bold">Next.js App</h1>
      <p>Today is: {formatDate(today, 'long')}</p>
      <Button onClick={() => alert('Hello from Next.js!')}>Click me</Button>
    </main>
  );
}
