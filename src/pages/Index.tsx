const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            CoupleCare
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Relationship Advice & Solutions for Couples
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Strengthen Your Relationship
            </h2>
            <p className="text-muted-foreground">
              CoupleCare helps partners strengthen their relationships with expert advice, 
              tools, and solutions. Find answers to your love and communication issues easily.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
