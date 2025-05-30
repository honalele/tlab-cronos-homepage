"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // Language toggle state (simple demo, not i18n)
  const [lang, setLang] = useState<'ja' | 'en'>('ja');

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col items-center py-6 px-4">
          <div className="flex flex-col items-center gap-2">
            <Image src="/cronos-logo.png" alt="CRONOS Project Logo" width={64} height={64} className="mb-2" />
            <span className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-center">CRONOS Project</span>
          </div>
          <nav className="mt-6 flex gap-8 text-xs md:text-sm tracking-widest uppercase text-gray-700 font-medium">
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#symposium" className="hover:underline underline-offset-4">Symposium</a>
            <a href="#research" className="hover:underline underline-offset-4">Research</a>
            <a href="#participants" className="hover:underline underline-offset-4">Participants</a>
            <a href="#posters" className="hover:underline underline-offset-4">Posters</a>
            <a href="#resources" className="hover:underline underline-offset-4">Resources</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
          <div className="flex items-center gap-2 mt-4">
            <button
              className={`px-2 py-1 rounded text-xs font-semibold border ${lang === 'ja' ? 'bg-gray-900 text-white' : 'text-gray-600 border-gray-300'}`}
              onClick={() => setLang('ja')}
            >
              日本語
            </button>
            <button
              className={`px-2 py-1 rounded text-xs font-semibold border ${lang === 'en' ? 'bg-gray-900 text-white' : 'text-gray-600 border-gray-300'}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-36 bg-white overflow-hidden border-b border-gray-200">
        {/* SVG geometric line art background */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#888" strokeWidth="0.5">
            <line x1="50" y1="20" x2="750" y2="280" />
            <line x1="100" y1="50" x2="700" y2="250" />
            <line x1="200" y1="10" x2="600" y2="290" />
            <line x1="400" y1="0" x2="400" y2="300" />
            <line x1="0" y1="150" x2="800" y2="150" />
            <line x1="300" y1="30" x2="500" y2="270" />
            <line x1="600" y1="20" x2="200" y2="280" />
            <line x1="700" y1="60" x2="100" y2="240" />
            <line x1="750" y1="10" x2="50" y2="290" />
          </g>
        </svg>
        <h1 className="font-serif text-2xl md:text-4xl font-bold mb-4 z-10">多様な移動体と人間を繋ぐ進化型コミュニケーション基盤</h1>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto z-10">
          JST funded research on integrated V2V/V2X communication systems with LLMs and VR simulation technologies
        </p>
        <div className="flex gap-4 justify-center z-10">
          <a href="#register" className="px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-medium tracking-wider hover:bg-gray-900 hover:text-white transition">Register</a>
          <a href="#about" className="px-6 py-2 border border-gray-400 text-gray-700 rounded-full font-medium tracking-wider hover:bg-gray-100 transition">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">About the CRONOS Project</h2>
        <p className="text-gray-800 mb-4">
          The CRONOS Project aims to develop an advanced communication platform connecting diverse mobile entities and humans. Our research focuses on integrating V2V/V2X systems, Large Language Models, and VR simulation technologies to enable seamless, secure, and human-centered interactions in next-generation mobility environments.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Key objectives: Trustworthy, scalable, and intelligent communication frameworks</li>
          <li>Research focus: V2V/V2X, LLMs, VR, Human-Embodied AI</li>
        </ul>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">JST Funded</span>
          <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">Tsukada Laboratory</span>
        </div>
      </section>

      {/* Project Objectives Section */}
      <section id="objectives" className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">Project Objectives</h2>
        <ol className="list-decimal pl-6 text-gray-800 space-y-4">
          <li><span className="font-semibold">Build an interoperability platform</span> for heterogeneous communication messages using foundational models</li>
          <li><span className="font-semibold">Optimize bidirectional interaction</span> between humans and Embodied AI</li>
          <li><span className="font-semibold">Develop an adaptive communication platform</span> that evolves to accommodate diversity</li>
          <li><span className="font-semibold">Demonstrate a communication platform</span> for human-Embodied AI co-creative transportation system</li>
        </ol>
      </section>

      {/* Symposium Details */}
      <section id="symposium" className="bg-white py-16 px-4 border-t border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">Symposium</h2>
          <div className="mb-4 text-gray-700">
            <span className="font-semibold">Date & Location:</span> 2025/5/12
          </div>
          <div className="mb-8">
            <h3 className="font-serif text-lg font-bold mb-2">プログラム</h3>
            <ul className="space-y-2 text-gray-800">
              <li>14:00-14:30　CRONOSプロジェクトと活動紹介（塚田）</li>
              <li>14:30-15:20　五十嵐先生、中山先生、馬先生、</li>
              <li>15:20-15:30　（休憩）</li>
              <li>15:30-16:45　研究紹介１（CRONOSプロジェクトの進捗）Hao Si</li>
              <li>15:45-17:00　研究紹介２</li>
              <li>15:00-17:15　研究紹介３</li>
              <li>15:30-16:00　評価環境：CVPRチャレンジの取り組みとCRONOSリーダーボード開発</li>
              <ul className="ml-6 list-disc text-sm text-gray-700">
                <li>チャレンジ１：TUMTraf V2X Cooperative Perception Dataset (CVPR&apos;24) <a href="https://coop-intelligence.github.io/" className="underline text-gray-900" target="_blank" rel="noopener noreferrer">https://coop-intelligence.github.io/</a></li>
                <li>チャレンジ２：End-to-End Autonomous Driving through V2X Cooperation （Track1: Temporal Perception）<a href="https://coop-intelligence.github.io/V2X-Sec_MEIS/#Perception-track" className="underline text-gray-900" target="_blank" rel="noopener noreferrer">https://coop-intelligence.github.io/V2X-Sec_MEIS/#Perception-track</a></li>
                <li>チャレンジ３：End-to-End Autonomous Driving through V2X Cooperation （Track1: Temporal Perception）<a href="https://coop-intelligence.github.io/V2X-Sec_MEIS/#E2E-track" className="underline text-gray-900" target="_blank" rel="noopener noreferrer">https://coop-intelligence.github.io/V2X-Sec_MEIS/#E2E-track</a></li>
              </ul>
              <li>16:00-17:00　ディスカッション＋ポスターセッション</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Participants */}
      <section id="participants" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">Participants</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-base mb-2">Featured Researchers</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Takuro Yonezawa</li>
              <li>Akira Kanaoka</li>
              <li>Takayuki Aoki</li>
              <li>Manabu Tsukada</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">Academic Institutions</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Nagoya University</li>
              <li>Toho University</li>
              <li>Kadinche Co.</li>
              <li>Tokyo University</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">Industry Partners</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Industry Partner A</li>
              <li>Industry Partner B</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Member Introduction Section */}
      <section id="members" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">Member Introduction</h2>
        <div className="space-y-10">
          {/* Manabu Tsukada */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-1">Manabu Tsukada</h3>
            <div className="text-sm text-gray-700 mb-1">Associate Professor, The University of Tokyo</div>
            <div className="italic text-gray-600 mb-2">多様な移動体と人間を繋ぐ進化型コミュニケーション基盤</div>
            <p className="text-gray-800 text-sm">Dr. Manabu Tsukada is currently an associate professor at the Graduate School of Information Science and Technology, the University of Tokyo, Japan. He is also a designated associate professor at the Center for Embedded Computing Systems, Nagoya University, Japan. And He is a visiting professor at Aalto University from February 2021 to November 2021. He received his B.S. and M.S degrees from Keio University, Japan, in 2005 and 2007, respectively. He worked in IMARA Team, Inria, France, during his Ph.D. course and obtained his Ph.D. degree from Centre de Robotique, Mines ParisTech, France, in 2011. During his pre and postdoc research stages, he has participated in a multitude of international projects in the networked ITS area, such as GeoNet, ITSSv6, SCORE@F, CVIS, Nautilus6, or ANEMONE. He served as a board member of the WIDE Project 2014-2022. His research interests are mobility support for the next-generation Internet (IPv6), Internet audio-visual media, and communications for intelligent vehicles.</p>
          </div>
          {/* Takeo Igarashi */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-1">Takeo Igarashi</h3>
            <div className="text-sm text-gray-700 mb-1">Professor, The University of Tokyo</div>
            <div className="italic text-gray-600 mb-2">Bring LLM to eHMI: toward continuous and bidirectional car-pedestrian interaction</div>
            <p className="text-gray-800 text-sm">Takeo Igarashi is a Professor of Computer Science Department at The University of Tokyo. He received a Ph.D from the Department of Information Engineering at The University of Tokyo in 2000. He joined the Department of Computer Science as an assistant professor in 2002 and was promoted to a professor in 2011. His research interest is in user interfaces and interactive computer graphics in general. He is known for the development of a sketch-based modeling system (Teddy) and a multi-touch shape deformation method. He led a JST ERATO project and a JST CREST project as a director. He served as program co-chair for UIST 2013, general co-chair for UIST 2016, technical papers chair for SIGGRAPH ASIA 2018, and technical program co-chair for ACM CHI 2021. He received the SIGGRAPH Significant New Researcher Award, JSPS Award, CHI Academy Award, and the Asia Graphics 2020 Outstanding Technical Contributions Award.</p>
          </div>
          {/* Hideki Nakayama */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-1">Hideki Nakayama</h3>
            <div className="text-sm text-gray-700 mb-1">Professor, The University of Tokyo</div>
            <div className="italic text-gray-600 mb-2">Toward Timely and Reliable Knowledge Control in Multimodal LLMs</div>
            <p className="text-gray-800 text-sm">Prof. Nakayama has conducted extensive research in both computer vision and natural language processing. His expertise lies in multimodal deep learning, particularly in transparently linking various types of data, such as images and text, to perform recognition, understanding, and generation. Recently, he has been actively working on the development and application of multimodal large language models. To date, he has published over 40 papers at top-tier international conferences, such as ICLR and AAAI (Machine Learning/AI), CVPR, ICCV, and ECCV (Computer Vision), and ACL, EMNLP, and NAACL (Natural Language Processing), all ranked as CORE A*/A. In addition, he has served in key roles such as Area Chair, Senior Area Chair, and Editor for the review systems of these top conferences and journals, establishing himself as a leading researcher in the field both domestically and internationally. Below, we will discuss some of his research outcomes that are particularly relevant to this project.</p>
          </div>
          {/* Lei Ma */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-1">Lei Ma</h3>
            <div className="text-sm text-gray-700 mb-1">Associate Professor, The University of Tokyo</div>
            <div className="italic text-gray-600 mb-2">Trustworthy Assurance of AI Systems in the LLM Era</div>
            <p className="text-gray-800 text-sm">Dr. Lei Ma is currently an associate professor with The University of Tokyo, as well as University of Alberta (with a shared appointment in part time from April 2023), leading Momentum Lab (website to be launched). Previously, he held the assistant professor position with Kyushu University from Jan. 2019, and was promoted to associate professor on April 2020. From April 2021, he joined University of Alberta and was honored to be selected as a Canada CIFAR AI Chair, and a Fellow with Alberta Machine Intelligent Institute (Amii), under the Pan-Canadian AI Strategy. From April 2023, he joined The computer science department of The University of Tokyo as an associate professor. His research spans a wide range of research topics, and comes with a special focus centering on the interdisciplinary research fields of Software Engineering and Artificial Intelligence, in the design and development of quality assurance and engineering support for building trustworthy AI systems. In his early career as a student, he received a B.E. degree from Shanghai Jiaotong University (SJTU) in 2009, M.E. and Ph.D. degrees from The University of Tokyo, in 2011 and 2014, respectively. During his Ph.D. program, he studied for half a year in the Mathematics and Computer Science department of Technische Universität München(TUM).</p>
          </div>
        </div>
      </section>

      {/* Poster Highlights */}
      <section id="posters" className="bg-gray-50 py-16 px-4 border-t border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">Poster Highlights</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Keynote presentations by leading researchers</li>
            <li>Panel discussions on future mobility and AI</li>
            <li>Demonstration sessions of V2X/VR/LLM technologies</li>
            <li>Networking opportunities for academia and industry</li>
          </ul>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">Resources</h2>
        {/* Research Publications */}
        <div className="mb-8">
          <h3 className="font-serif text-lg font-bold mb-2">Research Publications</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-4">
            <li>
              Dongyang Li; Ehsan Javanmardi; Manabu Tsukada, <span className="italic">&quot;State-Guided Spatial Cross-Attention for Enhanced End-to-End Autonomous Driving&quot;</span>, In: IEEE International Automated Vehicle Validation Conference (IAVVC 2025), Baden-Baden, Germany, 2025.
              <span className="ml-2 text-xs text-gray-600">Proceedings Article | Abstract | BibTeX</span>
            </li>
            <li>
              Manabu Tsukada, <span className="italic">&quot;V2X Communication Technologies in the Era of End-to-End Autonomous Driving&quot;</span>, The 2nd Workshop on Secure connected vehicles: Digital Twin, UAVs, and Smart Transportation, at IEEE IV 2025, 22.06.2025.
              <span className="ml-2 text-xs text-gray-600">Presentation | Abstract | Links | BibTeX</span>
            </li>
          </ul>
        </div>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><a href="#" className="text-gray-900 underline">Related papers and publications</a></li>
          <li><a href="#" className="text-gray-900 underline">Previous work from Tsukada Laboratory</a></li>
          <li><a href="#" className="text-gray-900 underline">Project documentation</a></li>
          <li><a href="#" className="text-gray-900 underline">Media gallery (photos, videos)</a></li>
        </ul>
      </section>

      {/* Contact Information */}
      <section id="contact" className="bg-white py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">Contact & Registration</h2>
          <div className="mb-8 space-y-2 text-gray-800">
            <div><span className="font-semibold">Email:</span> <a href="mailto:tsukada-cronos-group@g.ecc.u-tokyo.ac.jp" className="underline text-gray-900">tsukada-cronos-group@g.ecc.u-tokyo.ac.jp</a></div>
            <div><span className="font-semibold">Address:</span> 4F, I-REF building, Graduate School of Information Science and Technology, The University of Tokyo, 1-1-1, Yayoi, Bunkyo-ku, Tokyo, 113-8657 Japan</div>
            <div><span className="font-semibold">Principal Investigator:</span> Manabu Tsukada (Assoc. Prof., Graduate School of Information Science and Technology, The University of Tokyo)</div>
            <div><span className="font-semibold">Co-PI:</span> Takeo Igarashi (The University of Tokyo)・Hideki Nakayama (The University of Tokyo)・Lei Ma (The University of Tokyo)</div>
          </div>
          <form id="register" className="grid md:grid-cols-2 gap-6 mb-8">
            <input type="text" placeholder="Name" className="border rounded px-4 py-2" required />
            <input type="email" placeholder="Email" className="border rounded px-4 py-2" required />
            <textarea placeholder="Message or Inquiry" className="border rounded px-4 py-2 md:col-span-2" rows={3}></textarea>
            <button type="submit" className="border border-gray-900 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-gray-900 hover:text-white transition md:col-span-2">Submit</button>
          </form>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex gap-3 mt-2">
                <a href="#" className="text-gray-900 hover:underline">Twitter</a>
                <a href="#" className="text-gray-900 hover:underline">YouTube</a>
                <a href="#" className="text-gray-900 hover:underline">Newsletter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-500 py-8 mt-auto border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-2">
            <span className="text-xs">&copy; {new Date().getFullYear()} CRONOS Project. All rights reserved.</span>
            <Link href="#" className="underline text-xs ml-2">Privacy Policy</Link>
          </div>
          <div className="flex gap-4 items-center">
            {/* Partner logos (placeholders) */}
            <Image src="/jst-logo.png" alt="JST Logo" width={32} height={32} />
            <Image src="/univ-logo.png" alt="University Logo" width={32} height={32} />
            <Image src="/partner-logo.png" alt="Partner Logo" width={32} height={32} />
          </div>
          <nav className="flex gap-4 text-xs">
            <a href="#about" className="hover:underline">About</a>
            <a href="#symposium" className="hover:underline">Symposium</a>
            <a href="#resources" className="hover:underline">Resources</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
