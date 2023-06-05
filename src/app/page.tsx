import ProductViewer from "./productViewer";

export default function Home() {
  return (
    <main className="site-core">
      <div className="site-content">
        <section className="relative flex justify-center items-center mb-20">
          <ProductViewer />
        </section>
        <section className="flex ml-auto mr-auto h-screen bg-secondary justify-center items-center">
          news wheel
        </section>
        <section className="flex ml-auto mr-auto h-screen bg-primary justify-center items-center">
          testimonials
        </section>
      </div>
    </main>
  );
}
