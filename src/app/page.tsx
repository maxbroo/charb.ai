import { Navigation } from '../components/navigation';

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1 className="text-center mt-8 text-3xl font-bold">Welcome to Charb AI</h1>
      <p className="text-center mt-4">Select a page from the navigation to get started.</p>
    </div>
  );
}
