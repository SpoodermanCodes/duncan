import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()
  await prisma.newsArticle.deleteMany()

  await prisma.product.createMany({
    data: [
      {
        name: 'NVIDIA GeForce RTX 4060 Ti',
        brand: 'NVIDIA',
        price: 399.00,
        oldPrice: 499.00,
        memory: '8GB GDDR6',
        boostClock: '2.54 GHz',
        imageUrl: 'https://assets.nvidia.partners/images/png/GeForce-ADA-RTX4060Ti-Back.png',
      },
      {
        name: 'Gigabyte NVIDIA GeForce RTX 5090 Windforce OC',
        brand: 'Gigabyte',
        price: 2399.99,
        memory: '32GB GDDR7',
        boostClock: '2467 MHz',
        imageUrl: 'https://assets.nvidia.partners/images/png/805564.png',
      },
      {
        name: 'GIGABYTE GeForce RTX 3060 Gaming OC 12G',
        brand: 'GIGABYTE',
        price: 299.99,
        memory: '12GB GDDR6',
        boostClock: '1837 MHz',
        imageUrl: 'https://assets.nvidia.partners/images/png/415j4KJM74L._SL500.png',
      },
      {
        name: 'ASUS GeForce GTX 1650 TUF Gaming OC Edition',
        brand: 'ASUS',
        price: 349.12,
        memory: '4GB GDDR6',
        boostClock: '1785 MHz',
        imageUrl: 'https://assets.nvidia.partners/images/png/4718017505291_US.png',
      },
      {
        name: 'GIGABYTE GeForce RTX 4060 AERO OC 8G',
        brand: 'GIGABYTE',
        price: 369.99,
        memory: '8GB GDDR6',
        boostClock: '2460 MHz',
        imageUrl: 'https://assets.nvidia.partners/images/png/41cTlR6C8SL._SL500_.png',
      },
      {
        name: 'Gigabyte NVIDIA GeForce RTX 4070 Ti Super Windforce',
        brand: 'Gigabyte',
        price: 799.99,
        memory: '16GB GDDR6X',
        boostClock: '2625 MHz',
        imageUrl: 'https://assets.nvidia.partners/images/png/0676374_661819.png',
      },
      {
        name: 'Zotac RTX 3080 TrinOC ZT-A30820J-10PLHR',
        brand: 'Zotac',
        price: 1115.54,
        memory: '12GB GDDR6X',
        boostClock: '1725 MHz',
        imageUrl: 'https://assets.nvidia.partners/images/png/4895173624667.png',
      },
      {
        name: 'AMD Radeon RX 7700 XT',
        brand: 'AMD',
        price: 449.99,
        memory: '12GB GDDR6',
        boostClock: '2544 MHz',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GudX_DQO1zR9ve2DDlS_8wHaHV%26pid%3DApi&f=1',
      },
      {
        name: 'XFX Speedster MERC 319 Radeon RX 6900 XT Black',
        brand: 'XFX',
        price: 599.99,
        memory: '16GB GDDR6',
        boostClock: '2365 MHz',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W86NRe2PVWsXNWv03eqLHQHaHa%26pid%3DApi&f=1',
      },
      {
        name: 'Gigabyte Radeon RX Vega 64 Gaming OC 8GB HBM2',
        brand: 'Gigabyte',
        price: 299.99,
        memory: '8GB HBM2',
        boostClock: '1630 MHz',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3-WEHe-aiisE9I8Dh3hvGwHaHa%26pid%3DApi&f=1',
      },
      {
        name: 'ASUS Radeon RX 550 4GB GDDR5',
        brand: 'ASUS',
        price: 89.99,
        memory: '4GB GDDR5',
        boostClock: '1183 MHz',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.xrToS23lNW3o2kUVdDYFwAHaFh%26pid%3DApi&f=1',
      },
      {
        name: 'MSI Radeon RX 5500 XT Gaming X 8GB GDDR6',
        brand: 'MSI',
        price: 199.99,
        memory: '8GB GDDR6',
        boostClock: '1845 MHz',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wu5BSLgbanhv3wZUTsti8QHaF7%26pid%3DApi&f=1',
      },
    ],
  })

  await prisma.newsArticle.createMany({
    data: [
      {
        title: "Threadripper 7000 is the most reliable CPU as per Puget Systems stats — Nvidia RTX Ada Generation GPUs have the lowest failure rates",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/ozqDihdWshdHA5AE2Mfu3g-970-80.jpg.webp",
        content: `Threadripper 7000 is the most reliable CPU as per Puget Systems stats — Nvidia RTX Ada Generation GPUs have the lowest failure rates

Custom PC builder Puget Systems just released its list of the most reliable hardware for 2024. Puget Systems wants to recognize the best brands and models that delivered "exceptional reliability over the last year." However, the company noted that its list only represents its experience with its partners and "does not cover the entire computer hardware industry."

Nevertheless, Puget System's list is quite encompassing, primarily as it works with several industry brands. The company mainly focused on its desktop workstation and rack station data and only included components with a minimum sale of 200 units.

According to the company's list, AMD Ryzen Threadripper 7000 and Threadripper Pro 7000WX processors were the most reliable CPUs, achieving a failure rate of 2%. While this is relatively high compared to the other component types, this is less than half of the overall failure rate of processors, which sits at 5% owing to the complexity of modern chips.

Conversely, GPUs have excellent reliability, with an average failure rate of just 0.68%. The Nvidia RTX Ada Generation and Asus GeForce RTX 40-series ProArt GPUs have a lower average failure rate of less than 0.5%, but the Asus GeForce RTX 40-series TUF GPU has achieved an impressive 0% failure rate.

Component Type | Product Name | Total Failure Rate
CPU | AMD Ryzen Threadripper 7000 and AMD Ryzen Threadripper PRO 7000WX Series | 2%
GPU | Nvidia RTX Ada Generation | less than 0.5%
GPU | Asus GeForce RTX 40-Series Pro Art | less than 0.5%
GPU | Asus GeForce RTX 40-Series TUF | 0%
Motherboard | Asus TUF B760M-Plus Wi-Fi II | less than 1%
RAM | Kingston DDR5-5600 32GB (KVR56U46BD8-32) | 0.15%
Storage | Kingston KC3000 series NVMe SSDs (1TB, 2TB, and 4TB) | 0.08%
PSU | Super Flower LEADEX VII Gold ATX 3.0 1000W / 1300W and Super Flower LEADEX Titanium ATX 3.0 1600W | 0.26%

Motherboards have a comparatively high failure rate of 4.9% for 2024, likely because of this component's complexity. However, the Asus TUF B760M-Plus Wi-Fi II stood out from the crowd, as it only suffered two failures throughout the year, putting its failure rate at less than 1%.

Kingston also flew high in Puget's reliability list, with its memory and storage garnering a failure rate of 0.15% and 0.08%, respectively. This is less than a third of the average failure rate for RAM and an impressive 5% of the average failure rate for storage drives.

Lastly, three Super Flower PSUs were graded as the most reliable power supplies, with a combined failure rate of 0.26%. Puget Systems says that Super Flower's exceptional reliability is the reason it has stuck mainly with this brand in recent years.`,
      },
      {
        title: "AMD Now Powers 121 of the World's Fastest Supercomputers",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/ozqDihdWshdHA5AE2Mfu3g-970-80.jpg.webp",
        content: `AMD Now Powers 121 of the World's Fastest Supercomputers

The Top 500 list of the fastest supercomputers in the world was released today, and AMD continues its streak of impressive wins with 121 systems now powered by AMD's silicon — a year-over-year increase of 29%. Additionally, AMD continues to hold the #1 spot on the Top 500 with the Frontier supercomputer, while the test and development system based on the same architecture continues to hold the second spot in power efficiency metrics on the Green 500 list. Overall, AMD also powers seven of the top ten systems on the Green 500 list.

The AMD-powered Frontier remains the only fully-qualified exascale-class supercomputer on the planet, as the Intel-powered two-exaflop Aurora has still not submitted a benchmark result after years of delays. In contrast, Frontier is now fully operational and is being used by researchers in a multitude of science workloads.

In fact, Frontier continues to improve from tuning — the system entered the Top 500 list with 1.02 exaflops of performance in June 2022 but has now improved to 1.194 exaflops, a 17% increase. That's an impressive increase from the same 8,699,904 CPU cores it debuted with.

Holding the top spot on the Top 500 is an important milestone, but many of the other AMD-powered systems are also at the top of the list — supercomputers powered by AMD CPUs continue to hold four of the top ten spots while Intel and IBM power two of the top ten apiece. AMD also powers 12 of the top 20 fastest systems in the world.

Top 500 Supercomputer List | AMD CPU Powered | Intel CPU Powered
2016 | 13 | 454
2023 | 121 | 360

Frontier also ranks first in the world in the HLP-MxP benchmark, a measure of HPC and AI performance in mixed-precision workloads, with 9.95 exaflops. Meanwhile, the AMD-powered LUMI supercomputer holds the second spot with 2.2 exaflops.

AMD's continued push into the upper ranks of the Top 500, Green 500, HPCG, and HLP-MXP benchmarks highlights that its CPUs have a performance advantage over competing entrants from Intel.`,
      },
      {
        title: "Ryzen AI 7 Pro 160 bests previous-gen Ryzen 9 — chip hits Geekbench with three Zen 5 and five Zen 5c cores",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/7Udj9QhWsJHMuftSjJ7XoM-970-80.jpg.webp",
        content: `Ryzen AI 7 Pro 160 bests previous-gen Ryzen 9 — chip hits Geekbench with three Zen 5 and five Zen 5c cores

AMD's two new Ryzen AI 9 HX 300 processors are the only Zen 5-based mobile chips on the market so far. But that could change soon; Benchleaks on X (Twitter) has discovered the first non-Ryzen 9 AI-series CPU from AMD in the Geekbench browser, featuring the Ryzen AI 7 Pro 160 with just eight Zen 5/Zen5c cores.

The new CPU is undoubtedly one of AMD's upcoming lower-end SKUs that will join the CPU manufacturer's lineup of outgoing Ryzen AI 300 series processors. Adding the 'Pro' nomenclature confirms that AMD will make professional/business variants of the AI 300 series.

Geekbench Benchmark Results:
CPU | Single Core | Multi Core
Ryzen AI 7 Pro 160 | 2,514 | 11,772
Ryzen AI 9 HX 370 | 2,544 | 14,158
Ryzen 9 8945HS | 2,387 | 11,654
Ryzen 9 7945HX3D | 2,820 | 16,460
Core Ultra 9 185H | 2,266 | 12,133
Intel Core i7-14700HX | 2,490 | 13,420
Intel Core i5-14500HX | 2,350 | 13,505

According to the Geekbench spec sheet, the Ryzen AI 7 Pro 160 sports eight cores in two clusters, one holding three Zen 5 cores and the other five Zen 5c cores. The chip also comes with Radeon 870M integrated graphics.

Geekbench performance is within striking distance of the previous generation Ryzen 9 8945HS. The 'AI Pro 160' chip yielded a single-core result of 2,514 points and a multi-core score of 11,772 points. This represents a 5% advantage and 1% advantage in the single- and multi-core results in favor of the Ryzen 7 AI Pro 160.

Assuming these benchmark results showcase the real-world performance of the new AI pro 160 chip, these results provide evidence that AMD's Zen 5-based Ryzen 7 parts will perform very similarly to its previous generation Ryzen 9 chips.`,
      },
      {
        title: "Nvidia's new tech reduces VRAM usage by up to 96% in beta demo — RTX Neural Texture Compression looks impressive",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/yzsMA9uBckB4LmUTzZZt6E-970-80.png.webp",
        content: `Nvidia's new tech reduces VRAM usage by up to 96% in beta demo — RTX Neural Texture Compression looks impressive

Nvidia's RTX Neural Texture Compression (NTC) has finally been benchmarked, demonstrating the technology's capabilities in an actual 3D workload. Compusemble benchmarked Nvidia's new memory compression tech on an RTX 4090 at 1440p and 4K resolution, revealing a whopping 96% reduction in memory texture size with NTC compared to conventional texture compression techniques.

Compusemble tested NTC in two modes: "NTC transcoded to BCn" and "Inference on Sample." The former transcodes textures to BCn on load, while the latter only decompresses the individual texels needed to render a specific view, further reducing texture memory size.

At 1440p with DLSS upscaling enabled, the "NTC transcoded to BCn" mode reduced the test application's texture memory footprint by 64%, from 272MB to 98MB. However, the "NTC inference on sample" mode decreased the texture size significantly to just 11.37MB. This represents a 95.8% reduction in memory utilization compared to non-neural compression, and an 88% reduction compared to the previous neural compression mode.

Compusemble's benchmarks revealed that performance takes a minor hit when RTX Neural Texture Compression is enabled. However, the benchmarker ran this beta software on the prior-gen RTX 4090, not the current-gen RTX 5090, so it is possible that these performance reductions could shrink with the newer architecture.

"NTC transcoded to BCn" mode showed a negligible reduction in average FPS compared to NTC off, though 1% FPS lows were noticeably better than regular texture compression with NTC disabled. "NTC inference on sample" mode took the biggest hit, going from the mid-1,600 FPS range to the mid-1,500 FPS range.

Memory capacity reduction is the same at 1440p with TAA anti-aliasing instead of DLSS upscaling, but the GPU's performance behavior differs. All three modes ran significantly faster than DLSS, operating at almost 2000 FPS.`,
      },
    ],
  })

  console.log('Seed complete: 12 products and 4 news articles created.')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
