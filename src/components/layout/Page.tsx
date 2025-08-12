import Header from "./Header";
import Footer from "./Footer";

export interface PageProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div>
      <h1>{props.title}</h1>
        <Header />
        <main className="min-h-screen">
          {props.children}
        </main>
        <Footer />
    </div>
  );
}