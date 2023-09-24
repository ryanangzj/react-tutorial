import { Header } from "./components/Header";
import { Section } from "./components/Section";
import data from "./data";

export function App() {
  const section = data.map((item) => {
    return <Section key={item.id} item={item} />;
  });

  return (
    <div>
      <Header />
      <section className="section-list">{section}</section>
    </div>
  );
}
