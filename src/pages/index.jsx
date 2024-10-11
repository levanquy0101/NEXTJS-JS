import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h2>Đây là trang chủ</h2>
      <Link href="/news">
        News
      </Link>
    </main>
  );
}
