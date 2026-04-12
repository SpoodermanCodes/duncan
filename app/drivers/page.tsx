'use client'
import { useState } from 'react'

const gpuData: Record<string, { clock: string; memory: string; price: string; driver: string }> = {
  'RTX 4060 Ti': { clock: '2.54 GHz', memory: '8GB GDDR6', price: '$399', driver: 'https://www.nvidia.com/download/driverResults.aspx/218826/en-us/' },
  'RTX 4070 Ti Super': { clock: '2.625 GHz', memory: '16GB GDDR6X', price: '$799', driver: 'https://www.nvidia.com/download/driverResults.aspx/218826/en-us/' },
  'RX 7700 XT': { clock: '2.544 GHz', memory: '12GB GDDR6', price: '$449', driver: 'https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-7000-series/amd-radeon-rx-7700-xt.html' },
}

const gpuOptions = Object.keys(gpuData)

export default function DriversPage() {
  const [tab, setTab] = useState<'driver' | 'comparison'>('driver')
  const [selectedGpu, setSelectedGpu] = useState('')
  const [gpu1, setGpu1] = useState('')
  const [gpu2, setGpu2] = useState('')
  const [compared, setCompared] = useState(false)

  function compare() {
    if (gpu1 && gpu2 && gpu1 !== gpu2) setCompared(true)
    else alert('Please select two different GPUs.')
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-400 text-center mb-6">DRIVERS</h2>
      <div className="max-w-lg mx-auto bg-[#1e1e1e] shadow-[0_0_15px_5px_rgb(138,227,227)] rounded p-8">
        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setTab('driver')}
            className={`px-4 py-2 rounded font-bold transition-colors ${tab === 'driver' ? 'bg-cyan-400 text-black' : 'bg-cyan-900 text-cyan-300 hover:bg-cyan-700'}`}
          >
            Driver Download
          </button>
          <button
            onClick={() => setTab('comparison')}
            className={`px-4 py-2 rounded font-bold transition-colors ${tab === 'comparison' ? 'bg-cyan-400 text-black' : 'bg-cyan-900 text-cyan-300 hover:bg-cyan-700'}`}
          >
            GPU Comparison
          </button>
        </div>

        {tab === 'driver' && (
          <div>
            <h3 className="text-green-400 font-semibold mb-3">Select Your GPU to Download Driver</h3>
            <select
              value={selectedGpu}
              onChange={e => setSelectedGpu(e.target.value)}
              className="w-full p-2 bg-black border border-cyan-500 rounded text-white mb-4"
            >
              <option value="">-- Select GPU --</option>
              {gpuOptions.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            {selectedGpu && (
              <a
                href={gpuData[selectedGpu].driver}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Download Driver for {selectedGpu}
              </a>
            )}
          </div>
        )}

        {tab === 'comparison' && (
          <div>
            <h3 className="text-green-400 font-semibold mb-3">Compare Two GPUs</h3>
            <select value={gpu1} onChange={e => setGpu1(e.target.value)} className="w-full p-2 bg-black border border-cyan-500 rounded text-white mb-3">
              <option value="">-- Select First GPU --</option>
              {gpuOptions.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            <select value={gpu2} onChange={e => setGpu2(e.target.value)} className="w-full p-2 bg-black border border-cyan-500 rounded text-white mb-3">
              <option value="">-- Select Second GPU --</option>
              {gpuOptions.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            <button onClick={compare} className="w-full bg-cyan-400 text-black font-bold py-2 rounded hover:bg-cyan-300 transition-colors">
              Compare
            </button>
            {compared && gpu1 && gpu2 && (
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-green-600 p-2 text-cyan-400">Feature</th>
                    <th className="border-2 border-green-600 p-2 text-cyan-400">{gpu1}</th>
                    <th className="border-2 border-green-600 p-2 text-cyan-400">{gpu2}</th>
                  </tr>
                </thead>
                <tbody>
                  {(['clock', 'memory', 'price'] as const).map(key => (
                    <tr key={key}>
                      <td className="border-2 border-green-600 p-2 text-cyan-400 capitalize">{key === 'clock' ? 'Boost Clock' : key === 'memory' ? 'Memory Size' : 'Price'}</td>
                      <td className="border-2 border-green-600 p-2 text-cyan-400">{gpuData[gpu1][key]}</td>
                      <td className="border-2 border-green-600 p-2 text-cyan-400">{gpuData[gpu2][key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
