export default function LongTestPage() {
  return (
    <div className="p-6 space-y-10">

      <section id="hero" className="h-screen bg-blue-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Hero Section</h1>
      </section>

      <section id="features" className="min-h-screen bg-red-50 p-10">
        <h2 className="text-4xl font-bold mb-6">Features Section</h2>
        <p className="text-lg leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt blandit elit,
          a commodo neque elementum id. Pellentesque habitant morbi tristique senectus et netus.
          Fusce dictum mi et orci tincidunt, quis pellentesque dui ultrices. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pulvinar mi nec
          justo pellentesque, vitae fermentum massa feugiat.
        </p>

        {[...Array(20)].map((_, i) => (
          <p key={i} className="text-gray-600 leading-7 mt-4">
            More text #{i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer laoreet suscipit nisl, nec consequat velit bibendum eget.
          </p>
        ))}
      </section>

      <section id="about" className="min-h-screen bg-green-50 p-10">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-8">
          Donec eget tortor consectetur, blandit lorem ac, lacinia mi. Integer sit amet arcu
          vitae nisl consequat tristique. Sed id porta nulla. Vivamus non dui vitae massa posuere
          malesuada at vel felis.
        </p>
      </section>

      <section id="contact" className="min-h-screen bg-yellow-50 p-10">
        <h2 className="text-4xl font-bold mb-6">Contact Section</h2>
        <p className="text-lg leading-8">
          Curabitur tempus mi nec dolor dapibus, in convallis massa varius. Integer et suscipit leo,
          in pharetra sapien. Pellentesque nec commodo purus.
        </p>
      </section>

    </div>
  );
}
