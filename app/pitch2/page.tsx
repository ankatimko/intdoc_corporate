"use client";

import Script from "next/script";

import "./pitch2.css";

const SPEAKER_NOTES = `[""]`;

const DECK_HTML = `
<deck-stage width="1920" height="1080">

  <!-- =========================  SLIDE 1 — TITLE  ========================= -->
  <section data-screen-label="01 Title" class="s-title">
    <div class="head">
      <div class="brand"><span class="sq"></span><span>IntDoc AI — AI platform for indirect procurement</span></div>
      <div>Confidential <span class="dot">·</span> Draft v1</div>
    </div>

    <div class="hero-stack">
      <h1 class="hero-title">
        See every euro.<br>
        Justify every decision.<br>
        <em>Defend every procedure.</em>
      </h1>
      <p class="hero-sub">More suppliers. Transparent choice. Same team.</p>
    </div>

    <div class="title-metrics">
      <div>
        <div class="m-label">Supplier coverage</div>
        <div class="m-val">×3<span style="color:var(--muted);">–</span>4</div>
      </div>
      <div>
        <div class="m-label">Procedure speed</div>
        <div class="m-val">×5<span style="color:var(--muted);">–</span>10</div>
      </div>
      <div>
        <div class="m-label">Team productivity</div>
        <div class="m-val">×3</div>
      </div>
      <div>
        <div class="m-label">Decision traceability</div>
        <div class="m-val">100<span class="pct">%</span></div>
      </div>
    </div>
  </section>

  <!-- =========================  SLIDE 2 — PROBLEM  ========================= -->
  <section data-screen-label="02 Problem">
    <div class="head">
      <div>01 — Problem</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-48">
      <div>
        <h2 class="title">What indirect procurement looks like today</h2>
        <div class="rule"></div>
      </div>

      <div class="three-col">
        <div class="pcard">
          <div class="ix">Multi-format intake</div>
          <p class="pain">Full market coverage requires modern processing tools.</p>
          <p class="body">Quotations arrive in dozens of formats, in different languages, from different countries. Reaching the full available market — not only its visible part — requires automated extraction and comparison. Team throughput is no longer the limiting factor.</p>
        </div>
        <div class="pcard">
          <div class="ix">Narrow market coverage</div>
          <p class="pain">Only a fraction of the available market ends up in the comparison.</p>
          <p class="body">Not because the market is narrow — across the Baltics and the EU it is multiple times larger. Local suppliers from EE / LV / LT and niche players often stay outside the table.</p>
        </div>
        <div class="pcard">
          <div class="ix">ESG outside the calculation</div>
          <p class="pain">Certifications, locality, carbon footprint — checked manually.</p>
          <p class="body">BRC, FSSC, Global GAP, Social Audit, country of origin — attributes that today do not fit into one table alongside price and terms.</p>
        </div>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>02 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 3 — WHAT IT DOES  ========================= -->
  <section data-screen-label="03 What the platform does">
    <div class="head">
      <div>02 — What the platform does</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-48">
      <div>
        <h2 class="title">Turning supplier quotations into comparable data</h2>
        <div class="rule"></div>
        <p class="sub" style="margin-top:24px;max-width:1400px;"><em>Any format, any language — into one normalized table.</em></p>
      </div>

      <div class="chain">
        <div class="step">
          <div class="n">01</div>
          <div class="nm">Accept any format</div>
          <div class="ds">Excel, PDF, scans, email body, price lists in any structure.</div>
          <div class="tag">Automatic</div>
        </div>
        <div class="step">
          <div class="n">02</div>
          <div class="nm">Extract data without templates</div>
          <div class="ds">Line items, prices, terms, certifications — regardless of how the supplier formatted the quotation.</div>
          <div class="tag">Automatic</div>
        </div>
        <div class="step">
          <div class="n">03</div>
          <div class="nm">Normalize to a single view</div>
          <div class="ds">Currencies, units, languages, Incoterms, certification types — one unified set.</div>
          <div class="tag">Automatic</div>
        </div>
        <div class="step">
          <div class="n">04</div>
          <div class="nm">Compare automatically</div>
          <div class="ds">Multi-criteria comparison using your formula, with no manual transfer errors.</div>
          <div class="tag">Automatic</div>
        </div>
      </div>

      <div class="metrics-row">
        <div><div class="mv num-mono">2–5 min</div><div class="ml">processing per line item</div></div>
        <div><div class="mv num-mono">56<span style="color:var(--muted);">+</span></div><div class="ml">languages supported</div></div>
        <div><div class="mv">Any format</div><div class="ml">no templates required</div></div>
      </div>

      <div class="verdict">
        <p>One comparable table, by one set of rules — with no losses or discrepancies across formats and languages.</p>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>03 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 4 — BEFORE / AFTER  ========================= -->
  <section data-screen-label="04 What the platform changes">
    <div class="head">
      <div>03 — What the platform changes</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-48">
      <div>
        <h2 class="title">Same team. Wider coverage. More transparent decisions.</h2>
        <div class="rule"></div>
      </div>

      <div class="ba">
        <div class="col now">
          <h4>Today</h4>
          <ul>
            <li><span class="mk">—</span><span>Part of the market stays outside the comparison.</span></li>
            <li><span class="mk">—</span><span>The visible market is the known suppliers.</span></li>
            <li><span class="mk">—</span><span>Aggregating quotations is a long stage of the procedure.</span></li>
            <li><span class="mk">—</span><span>Price-based comparison dominates over multi-criteria.</span></li>
            <li><span class="mk">—</span><span>Audit trail is pieced together on request.</span></li>
            <li><span class="mk">—</span><span>Team time is spent on data consolidation.</span></li>
          </ul>
        </div>

        <div class="arr" aria-hidden="true">→</div>

        <div class="col fut">
          <h4>With the platform</h4>
          <ul>
            <li><span class="mk">✓</span><span>Full coverage of available suppliers in one table.</span></li>
            <li><span class="mk">✓</span><span>Automatic search for new suppliers, including local EE / LV / LT.</span></li>
            <li><span class="mk">✓</span><span>Aggregation takes hours.</span></li>
            <li><span class="mk">✓</span><span>Price, lead time, terms, certifications and locality in one formula.</span></li>
            <li><span class="mk">✓</span><span>Audit trail is generated automatically for every decision.</span></li>
            <li><span class="mk">✓</span><span>Team time goes to category strategy and supplier relationships.</span></li>
          </ul>
        </div>
      </div>

      <div class="pill-row">
        <span>Any format — Excel, PDF, scans, email</span>
        <span>56+ languages, including LV / LT / ET / EN / DA / SV</span>
        <span>No templates or portals required from suppliers</span>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>04 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 5 — NUMBERS  ========================= -->
  <section data-screen-label="05 Effect in numbers">
    <div class="head">
      <div>04 — Effect in numbers</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">Where the effect plays out</h2>
        <div class="rule"></div>
        <p class="sub" style="margin-top:20px;max-width:1500px;"><em>Qualitative change across every parameter — measured before and after on the pilot.</em></p>
      </div>

      <table class="ntable">
        <thead>
          <tr><th style="width:38%;">Parameter</th><th style="width:31%;">Today</th><th style="width:31%;">With the platform</th></tr>
        </thead>
        <tbody>
          <tr><td class="k">Time per line item</td><td>Tens of minutes</td><td class="fut">2–5 minutes</td></tr>
          <tr><td class="k">Buyer productivity</td><td>Tens of items per day</td><td class="fut">Hundreds of items per day</td></tr>
          <tr><td class="k">Suppliers in comparison</td><td>A handful</td><td class="fut">Dozens</td></tr>
          <tr><td class="k">Delivery and payment terms</td><td>Eyeballed</td><td class="fut">Built into the TCO formula</td></tr>
          <tr><td class="k">ESG criteria in selection</td><td>Manual or selective</td><td class="fut">In the ranking automatically</td></tr>
          <tr><td class="k">Audit trail</td><td>Reconstructed on request</td><td class="fut">Generated automatically</td></tr>
        </tbody>
      </table>

      <div class="callout">
        <h5>Final numbers are measured against your baseline.</h5>
        <p>The kickoff meeting captures your current metrics. The final pilot report confirms the before / after result. We do not sell a number — we measure it.</p>
      </div>
    </div>

    <div class="foot">
      <div>Source: pilot baseline methodology</div>
      <div>05 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 6 — HOW IT WORKS  ========================= -->
  <section data-screen-label="06 How the platform works">
    <div class="head">
      <div>05 — How the platform works <span style="color:var(--divider);">·</span> 5 steps</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">From the supplier email to a defensible decision</h2>
        <div class="rule"></div>
      </div>

      <div class="s6">
        <div class="steps">
          <div class="it">
            <div class="nn">01</div>
            <div>
              <div class="ttl">Quotation intake</div>
              <div class="dsc">Excel, PDF, scan, email, message body. Suppliers keep their process.</div>
            </div>
          </div>
          <div class="it live">
            <div class="nn">02</div>
            <div>
              <div class="ttl">Data extraction</div>
              <div class="dsc">The model extracts line items, prices, lead times, terms and certifications — without templates.</div>
            </div>
          </div>
          <div class="it">
            <div class="nn">03</div>
            <div>
              <div class="ttl">Normalization</div>
              <div class="dsc">Synonyms, currencies, units, Incoterms, countries, certification types — to one view.</div>
            </div>
          </div>
          <div class="it live">
            <div class="nn">04</div>
            <div>
              <div class="ttl">Comparison table</div>
              <div class="dsc">All suppliers side by side. Ranked by your criteria — price, TCO, ESG, locality.</div>
            </div>
          </div>
          <div class="it">
            <div class="nn">05</div>
            <div>
              <div class="ttl">Documentation and export</div>
              <div class="dsc">Comparison table, selection protocol, audit trail. Excel / PDF / SAP on the roadmap.</div>
            </div>
          </div>
        </div>

        <div class="mock">
          <div class="bar"><i></i><i></i><i></i><span class="crumb">IntDoc AI / Processing history</span></div>
          <div class="hdr">
            <h5>Uploaded quotations</h5>
            <span class="meta">2 suppliers · 30 line items extracted</span>
          </div>
          <div class="files">
            <div class="file">
              <span class="ext">PDF</span>
              <span><div class="nm">offer_cleaning_supplies_2026Q2.pdf</div><div class="sup">NordicClean OÜ · 8 MB</div></span>
              <span class="st">Done</span>
              <span class="tm">2 min ago</span>
            </div>
            <div class="file">
              <span class="ext">XLS</span>
              <span><div class="nm">quotation_q2_baltic.xlsx</div><div class="sup">Baltic Hygiene SIA · 3 MB</div></span>
              <span class="st">Done</span>
              <span class="tm">3 min ago</span>
            </div>
          </div>
          <div class="mhead">Extracted specification <span class="cnt">30 line items</span></div>
          <table>
            <thead><tr><th style="width:42px;">#</th><th>SKU</th><th>Description</th><th>Unit</th><th class="qty">Qty</th></tr></thead>
            <tbody>
              <tr><td class="art">001</td><td class="art">TRK-2L-EU</td><td>Liquid cleaning concentrate, 2 L</td><td class="dim">pc</td><td class="qty">240</td></tr>
              <tr><td class="art">002</td><td class="art">FLR-DGRS-5</td><td>Floor degreaser, 5 L</td><td class="dim">pc</td><td class="qty">120</td></tr>
              <tr><td class="art">003</td><td class="art">WIPE-MF-50</td><td>Microfiber wipes, pack of 50</td><td class="dim">pack</td><td class="qty">80</td></tr>
              <tr><td class="art">004</td><td class="art">GLV-NTR-M-100</td><td>Nitrile gloves, size M, 100 pcs</td><td class="dim">pack</td><td class="qty">360</td></tr>
              <tr><td class="art">…</td><td class="art" colspan="4">26 more line items</td></tr>
            </tbody>
          </table>
          <div class="cap">Any format — no supplier templates required.</div>
        </div>

        <div class="mock">
          <div class="bar"><i></i><i></i><i></i><span class="crumb">IntDoc AI / Comparison table</span></div>
          <div class="tabs">
            <span class="on">Table</span>
            <span>Calculation</span>
            <span>Selection protocol</span>
            <span>History</span>
          </div>
          <div class="spec-h">
            <div class="t">Liquid cleaning concentrate, 2 L</div>
            <div class="art">SKU TRK-2L-EU</div>
          </div>
          <div class="offers">
            <div class="offer best">
              <span class="pct">92%</span>
              <span><div class="name">NordicClean OÜ</div><div class="meta-l">EE · BRC + EU Ecolabel · local</div></span>
              <span class="price">€ 4.80</span>
              <span class="lt">7 days</span>
              <span class="bdg">Best</span>
            </div>
            <div class="offer">
              <span class="pct">78%</span>
              <span><div class="name">Baltic Hygiene SIA</div><div class="meta-l">LV · BRC · local</div></span>
              <span class="price">€ 4.60</span>
              <span class="lt">14 days</span>
              <span class="bdg">Alternative</span>
            </div>
            <div class="offer">
              <span class="pct">65%</span>
              <span><div class="name">EuroChem Supplies</div><div class="meta-l">PL · ISO 14001</div></span>
              <span class="price">€ 4.20</span>
              <span class="lt">21 days</span>
              <span class="bdg">Analog</span>
            </div>
          </div>
          <div class="cap">Price is one criterion. ESG and locality enter the ranking.</div>
        </div>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>06 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 7 — COMMERCIAL TERMS  ========================= -->
  <section data-screen-label="07 Commercial terms">
    <div class="head">
      <div>06 — Commercial terms</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">The lowest price <span class="neq">≠</span> the best buy</h2>
        <div class="rule"></div>
        <p class="sub" style="margin-top:20px;max-width:1500px;"><em>IntDoc calculates total cost with payment terms, currency exposure, logistics and customs — by your formulas.</em></p>
      </div>

      <div class="s7">
        <table class="ctable">
          <thead>
            <tr><th>Supplier</th><th>Price</th><th>Lead time</th><th>Certifications</th><th>Locality</th><th>Score</th></tr>
          </thead>
          <tbody>
            <tr><td>A</td><td>€ 100 000</td><td>21 days</td><td>ISO 14001</td><td>PL</td><td>65</td></tr>
            <tr class="win"><td>B</td><td>€ 104 000</td><td>7 days</td><td>BRC + EU Ecolabel</td><td>LV — local</td><td>92</td></tr>
            <tr><td>C</td><td>€ 102 000</td><td>14 days</td><td>BRC</td><td>LT — local</td><td>78</td></tr>
          </tbody>
        </table>

        <div class="mock">
          <div class="bar"><i></i><i></i><i></i><span class="crumb">IntDoc AI / Ranking settings</span></div>
          <div class="hdr">
            <h5>Criterion weights</h5>
            <span class="meta">Category: Cleaning</span>
          </div>
          <div class="weights">
            <div class="wrow"><span class="lbl">Price (TCO)</span><span class="w"><span class="bar"><i style="width:88%"></i></span><span class="pct">35%</span></span></div>
            <div class="wrow"><span class="lbl">Lead time</span><span class="w"><span class="bar"><i style="width:38%"></i></span><span class="pct">15%</span></span></div>
            <div class="wrow"><span class="lbl">Certifications (BRC, EU Ecolabel)</span><span class="w"><span class="bar"><i style="width:50%"></i></span><span class="pct">20%</span></span></div>
            <div class="wrow"><span class="lbl">Locality EE / LV / LT</span><span class="w"><span class="bar"><i class="acc" style="width:38%"></i></span><span class="pct">15%</span></span></div>
            <div class="wrow"><span class="lbl">Carbon footprint</span><span class="w"><span class="bar"><i style="width:25%"></i></span><span class="pct">10%</span></span></div>
            <div class="wrow"><span class="lbl">Track record with supplier</span><span class="w"><span class="bar"><i style="width:12%"></i></span><span class="pct">5%</span></span></div>
          </div>
          <div class="cap">Weights are tuned per category. Fresh goods → locality up; IT equipment → certifications and lead time up.</div>
        </div>
      </div>

      <div class="callout" style="border-top:1px solid var(--divider);padding-top:24px;">
        <h5>Supplier B is more expensive on the price tag — and wins on the combined criteria.</h5>
        <p>The formula and weights are configurable per category.</p>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>07 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 8 — ESG  ========================= -->
  <section data-screen-label="08 Sustainability and compliance">
    <div class="head">
      <div>07 — Sustainability and compliance</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="esg">
      <div>
        <h2 class="title">ESG criteria — part of the formula, not a separate check</h2>
        <div class="rule"></div>
        <p class="sub" style="margin-top:18px;max-width:1500px;"><em>Certifications, locality, country of origin and Social Audit flags enter the ranking alongside price and lead time.</em></p>
      </div>

      <div class="esg-hero">
        <div class="badge">RAG <span style="color:var(--accent);">·</span> Foundation</div>
        <div>
          <div class="h">The platform knows your rules.</div>
          <div class="b">Connects to your knowledge base — supplier selection policies, group standards, contract history, ESG regulations. Every comparison is checked against your rules automatically, with a reference to the specific clause.</div>
        </div>
      </div>

      <div class="esg-cards">
        <div class="c">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5"><polyline points="4 12 10 18 20 6"></polyline></svg>
          <h5>Certifications</h5>
          <p>BRC, FSSC 22000, Global GAP, ISO 14001 / 9001, ASC / MSC, EU Ecolabel, BIO / Organic.</p>
        </div>
        <div class="c">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <h5>Locality</h5>
          <p>Tags country of origin, prioritizes local suppliers in EE / LV / LT by configurable rules.</p>
        </div>
        <div class="c">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5"><path d="M12 3 L22 21 L2 21 Z"></path><line x1="12" y1="10" x2="12" y2="15"></line><circle cx="12" cy="18" r="0.6" fill="#1A1A1A"></circle></svg>
          <h5>High-risk flags</h5>
          <p>Automatic flagging to trigger Social Audit and KYC procedures where needed.</p>
        </div>
      </div>

      <div class="esg-stripe">Price + terms + ESG + your rules — in one formula, one artifact, one click.</div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>08 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 9 — RESULT  ========================= -->
  <section data-screen-label="09 Result">
    <div class="head">
      <div>08 — Result</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">One table instead of dozens of files — and a protocol for the auditor</h2>
        <div class="rule"></div>
      </div>

      <div class="s8">
        <ul class="bens">
          <li><span class="ck">✓</span><span>All offers for all line items in one table.</span></li>
          <li><span class="ck">✓</span><span>Total cost calculated with currencies, payment terms and overheads.</span></li>
          <li><span class="ck">✓</span><span>ESG attributes for each supplier — in the same table.</span></li>
          <li><span class="ck">✓</span><span>Best option per line item highlighted, with the rationale alongside.</span></li>
          <li><span class="ck">✓</span><span>Built-in translation of line items (LV / LT / ET / EN / DA / SV and more).</span></li>
          <li><span class="ck">✓</span><span>Excel export, selection protocol and audit trail — automatic.</span></li>
          <li><span class="ck">✓</span><span>Full procedure history retained — nothing gets lost.</span></li>
        </ul>

        <div class="mock">
          <div class="bar"><i></i><i></i><i></i><span class="crumb">IntDoc AI / Specification items / #001</span></div>
          <div class="tabs">
            <span class="on">Table</span>
            <span>Calculation</span>
            <span>Selection protocol</span>
            <span>Processing history</span>
          </div>
          <div class="spec-h">
            <div class="t">Liquid cleaning concentrate, 2 L, EU Ecolabel</div>
            <div class="art">SKU TRK-2L-EU</div>
          </div>
          <div class="spec-actions">
            <button class="btn">Export Excel</button>
            <button class="btn ghost">Generate selection protocol</button>
          </div>
          <div class="offers">
            <div class="offer best">
              <span class="pct">92%</span>
              <span><div class="name">NordicClean OÜ</div><div class="meta-l">EE · BRC + EU Ecolabel · local supplier</div></span>
              <span class="price">€ 4.80</span>
              <span class="lt">7 days</span>
              <span class="bdg">Best</span>
            </div>
            <div class="offer">
              <span class="pct">78%</span>
              <span><div class="name">Baltic Hygiene SIA</div><div class="meta-l">LV · BRC · local supplier</div></span>
              <span class="price">€ 4.60</span>
              <span class="lt">14 days</span>
              <span class="bdg">Alternative</span>
            </div>
            <div class="offer">
              <span class="pct">65%</span>
              <span><div class="name">EuroChem Supplies</div><div class="meta-l">PL · ISO 14001</div></span>
              <span class="price">€ 4.20</span>
              <span class="lt">21 days</span>
              <span class="bdg">Analog</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>09 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 10 — DEPLOYMENT  ========================= -->
  <section data-screen-label="10 Deployment and security">
    <div class="head">
      <div>09 — Deployment and security</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">Two deployment options</h2>
        <div class="rule"></div>
        <p class="sub" style="margin-top:20px;max-width:1500px;"><em>Built for your information security team and group standards.</em></p>
      </div>

      <div class="deploy">
        <div class="dcard featured">
          <div class="tag">SaaS (EU)</div>
          <div class="nm">Fast start, pilot, individual business units</div>
          <ul>
            <li>Browser access</li>
            <li>Infrastructure and data in the EU</li>
            <li>GDPR-compliant</li>
            <li>Deployment in days</li>
            <li>Per-user pricing, no upfront CAPEX</li>
          </ul>
          <div class="mk">Recommended for the pilot</div>
        </div>
        <div class="dcard">
          <div class="tag">On-premise</div>
          <div class="nm">Isolated environment, elevated InfoSec requirements</div>
          <ul>
            <li>Installed in your infrastructure</li>
            <li>Data never leaves the perimeter</li>
            <li>PostgreSQL, corporate SSO</li>
            <li>Role-based access, full action logging</li>
            <li>Deployment in 4–8 weeks</li>
          </ul>
          <div class="mk">For the strictest InfoSec requirements</div>
        </div>
      </div>

      <div class="risk">
        <h5>Risk mitigation</h5>
        <ul>
          <li>Your data is not used to train models.</li>
          <li>Access is role-based; every action is logged.</li>
          <li>The final decision is always made by the buyer (human-in-the-loop).</li>
          <li>Modular AI stack — Anthropic, OpenAI, Mistral + open source for on-premise.</li>
        </ul>
      </div>

      <p class="small" style="font-style:italic;color:var(--ink);">EU stack, data in the EU, GDPR-compliant, ready for the EU AI Act.</p>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>10 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 11 — PILOT  ========================= -->
  <section data-screen-label="11 Pilot">
    <div class="head">
      <div>10 — Pilot</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">Pilot — one indirect category</h2>
        <div class="rule"></div>
        <p class="sub" style="margin-top:20px;max-width:1500px;"><em>We measure before and after, without putting the main process at risk.</em></p>
      </div>

      <div class="tl">
        <div class="stage">
          <div class="n">01</div>
          <div class="nm">Scope definition</div>
          <div class="ds">We map the current category process and capture the baseline — time, supplier count, average price, cycle length.</div>
        </div>
        <div class="stage">
          <div class="n">02</div>
          <div class="nm">Configuration</div>
          <div class="ds">We train the model, tune normalization rules, ESG weights and selection-protocol templates.</div>
        </div>
        <div class="stage">
          <div class="n">03</div>
          <div class="nm">Result confirmation</div>
          <div class="ds">Parallel operation. Result reconciliation, metric confirmation, team training.</div>
        </div>
        <div class="stage final">
          <div class="n">04</div>
          <div class="nm">Scale-up</div>
          <div class="ds">Additional categories, integrations, rollout to other Baltic countries or business units.</div>
        </div>
      </div>

      <div class="price-block">
        <div>
          <div class="lbl">Pilot format</div>
          <div class="big">Fixed price</div>
          <p class="pdesc">The price is fixed in the contract once the scope is agreed. Format — SaaS in the EU, per-user pricing.</p>
          <blockquote>“The effect is most visible on your own data — not on someone else's case studies or demos.”</blockquote>
        </div>
        <div class="incl">
          <div class="lbl">What's included</div>
          <ul>
            <li>Configuration on your data</li>
            <li>ESG criteria setup per category</li>
            <li>Team training</li>
            <li>Parallel operation</li>
            <li>Final report with before / after metrics</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>11 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 12 — ROADMAP  ========================= -->
  <section data-screen-label="12 Roadmap">
    <div class="head">
      <div>11 — Roadmap</div>
      <div>2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">Where to extend the platform after the pilot</h2>
        <div class="rule"></div>
        <p class="sub" style="margin-top:20px;max-width:1500px;"><em>Independent directions — pick them by priority, in any order.</em></p>
      </div>

      <div class="grid32">
        <div class="rcard">
          <div class="ix">A</div>
          <h5>SAP integration</h5>
          <p>Data ingestion from SAP BW/4HANA, export of comparison results and selected suppliers, master-data sync.</p>
        </div>
        <div class="rcard">
          <div class="ix">B</div>
          <h5>Group rollout</h5>
          <p>Deployment to other business units — countries, formats, divisions. A single standard for comparison and audit trail.</p>
        </div>
        <div class="rcard">
          <div class="ix">C</div>
          <h5>Procurement analytics</h5>
          <p>Dashboard with savings by category, average price, supplier coverage, share of local suppliers, ESG composition.</p>
        </div>
        <div class="rcard">
          <div class="ix">D</div>
          <h5>Supplier database</h5>
          <p>A single base with price history, reliability, certifications and reputation — the foundation of category strategy.</p>
        </div>
        <div class="rcard">
          <div class="ix">E</div>
          <h5>Cross-country sourcing</h5>
          <p>Consolidate spend on one category across EE / LV / LT and group countries. One tender instead of three, unified terms.</p>
        </div>
        <div class="rcard">
          <div class="ix">F</div>
          <h5>Email and messaging intake</h5>
          <p>Automatic intake of quotations from corporate email and supplier channels — no manual uploads.</p>
        </div>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>12 / 13</div>
    </div>
  </section>

  <!-- =========================  SLIDE 13 — NEXT STEPS  ========================= -->
  <section data-screen-label="13 Next steps">
    <div class="head">
      <div>12 — Next steps</div>
      <div>Confidential <span class="dot">·</span> 2026 <span class="dot">·</span> v1.0</div>
    </div>

    <div class="stack gap-32">
      <div>
        <h2 class="title">A clear path from decision to first result</h2>
        <div class="rule"></div>
      </div>

      <div class="nsteps">
        <div class="ns">
          <div class="n">01</div>
          <div class="ttl">Agree on pilot format and category.</div>
          <div class="who">Joint</div>
        </div>
        <div class="ns">
          <div class="n">02</div>
          <div class="ttl">Hand over data for setup.</div>
          <div class="who">Your side</div>
        </div>
        <div class="ns">
          <div class="n">03</div>
          <div class="ttl">Kickoff meeting and start of work.</div>
          <div class="who">Joint</div>
        </div>
        <div class="ns">
          <div class="n">04</div>
          <div class="ttl">First demo — search and comparison live.</div>
          <div class="who">IntDoc AI</div>
        </div>
        <div class="ns last">
          <div class="n">05</div>
          <div class="ttl">Final demo and report with metrics.</div>
          <div class="who">IntDoc AI</div>
        </div>
      </div>
    </div>

    <div class="foot">
      <div>Confidential <span style="color:var(--accent);">·</span> Draft v1</div>
      <div>13 / 13</div>
    </div>
  </section>

</deck-stage>
`;

export default function Pitch2Page() {
  return (
    <div className="pitch-host">
      <script
        type="application/json"
        id="speaker-notes"
        dangerouslySetInnerHTML={{ __html: SPEAKER_NOTES }}
      />

      <div dangerouslySetInnerHTML={{ __html: DECK_HTML }} />

      <Script src="/deck-stage.js" strategy="afterInteractive" />
    </div>
  );
}
