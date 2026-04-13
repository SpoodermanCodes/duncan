export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-10 px-5 mt-10">
      <div className="flex flex-wrap justify-around gap-6">
        <div>
          <h4 className="text-green-500 font-semibold mb-2">Get in touch</h4>
          <p className="text-gray-400 text-sm">business@duncan.com</p>
          <p className="text-gray-400 text-sm">support@duncan.com</p>
        </div>
        <div>
          <h4 className="text-green-500 font-semibold mb-2">Follow Us At</h4>
          <p className="text-sm"><a href="#" className="text-white hover:text-green-400">LinkedIn</a></p>
          <p className="text-sm"><a href="#" className="text-white hover:text-green-400">Instagram</a></p>
          <p className="text-sm"><a href="#" className="text-white hover:text-green-400">X</a></p>
        </div>
        <div>
          <h4 className="text-green-500 font-semibold mb-2">Offline Service Centres</h4>
          <p className="text-gray-400 text-sm">789 Oak Blvd, Miami, FL 33101</p>
          <p className="text-gray-400 text-sm">101 Maple Dr, Austin, TX 73301</p>
          <p className="text-gray-400 text-sm">202 Pine Ln, New York, NY 10001</p>
        </div>
        <div>
          <h4 className="text-green-500 font-semibold mb-2">Ventures</h4>
          <p className="text-gray-400 text-sm">456 Elm Ave, Los Angeles, CA 90001</p>
          <p className="text-gray-400 text-sm">123 Main St, Springfield, IL 62704</p>
          <p className="text-gray-400 text-sm">303 Cedar Ct, Chicago, IL 60601</p>
        </div>
      </div>
    </footer>
  )
}
