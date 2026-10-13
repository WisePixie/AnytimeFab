export const Shop = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-light">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Shop</h1>
          <p className="text-lg text-secondary max-w-2xl">
            Browse our available fabrication and custom work products.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Brackets",
                description:
                  "Precision-made brackets for automotive and industrial use.",
                price: "$120+",
              },
              {
                title: "Prototype Panels",
                description:
                  "Custom-fabricated panels built to your dimensions.",
                price: "$180+",
              },
              {
                title: "Welding Services",
                description:
                  "Professional weld work for repair, fabrication, and upgrades.",
                price: "Quote",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-light rounded-lg p-6 shadow-sm"
              >
                <div className="mb-4 h-40 rounded-lg bg-secondary/10" />
                <h2 className="text-2xl font-semibold text-primary mb-2">
                  {item.title}
                </h2>
                <p className="text-secondary mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold">{item.price}</span>
                  <button className="btn-primary">Request Quote</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
