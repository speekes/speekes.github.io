
const Blockchain = () => {

  return (
    <section className="bg-white text-black p-5 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold">
        Secure, Decentralized and Reliable
            </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 md:col-gap-3">
        <div>
          <img src="/images/diagram.png" className="mb-10 md:mb-0" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">
            Decentralized Identity
                </h3>
          <p className="mt-5 md:mr-10 mb-12">
            A DID (decentralized identity) or self-sovereign identity is a new approach where no one but
            you own or control the state of your digital identity.
                </p>
          <h3 className="text-2xl font-bold">
            Decentralized Content
                </h3>
          <p className="mt-5 md:mr-10 mb-12">
            Your content is decentralized over the IPFS network,
            where you can control who can access your data, from Private to Public.
                </p>
          <h3 className="text-2xl font-bold">
            Blockchain Network
                </h3>
          <p className="mt-5 md:mr-10 mb-12">
            The blockchain network, provides the economic system behide it with its token that will be used
            as incentives and payment method of services available on the Social Media layer.
                </p>
        </div>
      </div>
    </section>
  )
}

export default Blockchain