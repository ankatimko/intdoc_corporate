"use client";

import Script from "next/script";

import "./pitch.css";

// Speaker notes payload read by deck-stage.js
const SPEAKER_NOTES = `[""]`;

// Full deck content — kept as a single HTML string so the structure matches
// the source design 1:1. Web component <deck-stage> from public/deck-stage.js
// handles scaling, keyboard navigation, thumbnail rail and print.
const DECK_HTML = `
<deck-stage width="1920" height="1080">

  <!-- ============ SLIDE 1 — TITLE ============ -->
  <section data-label="01 Титул">
    <div class="s-title-wrap">
      <div class="s-title-mark"><span class="logo-dot"></span>IntDoc AI · AI-платформа для отделов закупок</div>

      <div>
        <h1 class="s-title-hero">Сводная таблица<br />по сотням ТКП —<br /><em>за минуты.</em></h1>
        <p class="s-title-sub">Больше поставщиков. Ниже цена. Тот же штат.</p>
      </div>

      <div class="s-title-metrics">
        <div class="s-title-metric"><div class="k">↓ Цена контракта</div><div class="v">−3–8%</div></div>
        <div class="s-title-metric"><div class="k">↑ Охват поставщиков</div><div class="v">×3–4</div></div>
        <div class="s-title-metric"><div class="k">Скорость процедуры</div><div class="v">×5–10</div></div>
        <div class="s-title-metric"><div class="k">Производительность</div><div class="v">×3</div></div>
      </div>
    </div>

    <div class="meta-corner"><span>Конфиденциально</span><span>[Заказчик]</span><span>Май 2026</span><span>v1.0</span></div>
  </section>

  <!-- ============ SLIDE 2 — PROBLEM ============ -->
  <section data-label="02 Проблема">
    <div class="eyebrow"><span class="n">01</span><span>· Проблема</span></div>
    <h2 class="title">Это проблема инструмента,<br />а не людей.</h2>

    <div class="bignums">
      <div class="bignum">
        <div class="v">60–80<span style="font-size:96px;color:var(--fg-50)">%</span></div>
        <div class="l">Рабочего времени</div>
        <div class="d">Уходит у закупщика на ручную сводку ТКП в Excel — каждую процедуру.</div>
      </div>
      <div class="bignum">
        <div class="v">5–10</div>
        <div class="l">Поставщиков в сравнении</div>
        <div class="d">Не потому что рынок узкий, а потому что больше не успеть свести руками.</div>
      </div>
      <div class="bignum">
        <div class="v">3–8<span style="font-size:96px;color:var(--fg-50)">%</span></div>
        <div class="l">Переплата на контракте</div>
        <div class="d">Выгодные поставщики не попадают в таблицу — конкуренция ограничена.</div>
      </div>
    </div>

    <div class="meta-corner"><span>IntDoc AI</span><span>02 / 12</span></div>
  </section>

  <!-- ============ SLIDE 3 — CURRENT PROCESS ============ -->
  <section data-label="03 Процесс сегодня">
    <div class="eyebrow"><span class="n">02</span><span>· Как устроен процесс сегодня</span></div>
    <h2 class="title smaller">4 шага — и только первый не ручной</h2>

    <div class="chain">
      <div class="chain-step light">
        <div>
          <div class="num">01</div>
          <div class="lbl">Получение ТКП</div>
        </div>
        <div class="tag">Автоматически</div>
        <div class="chain-arrow">→</div>
      </div>
      <div class="chain-step dark">
        <div>
          <div class="num">02</div>
          <div class="lbl">Открыть каждый файл</div>
        </div>
        <div class="tag">Вручную</div>
        <div class="chain-arrow">→</div>
      </div>
      <div class="chain-step dark">
        <div>
          <div class="num">03</div>
          <div class="lbl">Свести в таблицу</div>
        </div>
        <div class="tag">Вручную</div>
        <div class="chain-arrow">→</div>
      </div>
      <div class="chain-step dark">
        <div>
          <div class="num">04</div>
          <div class="lbl">Сравнить и выбрать</div>
        </div>
        <div class="tag">Вручную</div>
      </div>
    </div>

    <div class="row-metrics">
      <div class="m"><strong>30–60 мин</strong> · позиция</div>
      <div class="m"><strong>15–20</strong> · позиций в день</div>
      <div class="m"><strong>3–4</strong> · источника цен</div>
      <div class="m"><strong>0%</strong> · автоматизации</div>
    </div>

    <div class="verdict">3 из 4 шагов — это ручной труд. Именно их закрывает платформа.</div>

    <div class="meta-corner"><span>IntDoc AI</span><span>03 / 12</span></div>
  </section>

  <!-- ============ SLIDE 4 — BEFORE / AFTER ============ -->
  <section data-label="04 Что меняет платформа">
    <div class="eyebrow"><span class="n">03</span><span>· Что меняет платформа</span></div>
    <h2 class="title smaller">Тот же отдел. Другой масштаб.</h2>

    <div class="ba">
      <div class="ba-col was">
        <h4>Было</h4>
        <div class="ba-row"><span class="mark">✕</span><span>5–10 поставщиков в сравнении</span></div>
        <div class="ba-row new-row"><span class="mark">✕</span><span>Поиск только среди закреплённых поставщиков</span></div>
        <div class="ba-row"><span class="mark">✕</span><span>1–2 недели на сводку</span></div>
        <div class="ba-row"><span class="mark">✕</span><span>Ошибки в единицах и валютах</span></div>
        <div class="ba-row"><span class="mark">✕</span><span>Закупщик — оператор Excel</span></div>
        <div class="ba-row"><span class="mark">✕</span><span>Выгодные поставщики теряются</span></div>
      </div>
      <div class="ba-arrow">→</div>
      <div class="ba-col now">
        <h4>Стало</h4>
        <div class="ba-row"><span class="mark">✓</span><span>30–50 поставщиков в одной таблице</span></div>
        <div class="ba-row new-row"><span class="mark">✓</span><span>Поиск новых поставщиков в интернете по артикулу</span></div>
        <div class="ba-row"><span class="mark">✓</span><span>Часы вместо недель</span></div>
        <div class="ba-row"><span class="mark">✓</span><span>Автоматическая нормализация данных</span></div>
        <div class="ba-row"><span class="mark">✓</span><span>Закупщик принимает решения</span></div>
        <div class="ba-row"><span class="mark">✓</span><span>Лучший вариант всегда в таблице</span></div>
      </div>
    </div>

    <div class="footer-pill">
      <span>Любой формат — Excel, PDF, сканы, email</span>
      <span>56+ языков</span>
      <span>Без шаблонов для поставщиков</span>
    </div>

    <div class="meta-corner"><span>IntDoc AI</span><span>04 / 12</span></div>
  </section>

  <!-- ============ SLIDE 5 — NUMBERS ============ -->
  <section data-label="05 Эффект в цифрах">
    <div class="eyebrow"><span class="n">04</span><span>· Эффект в цифрах</span></div>
    <h2 class="title smaller">Метрики до / после</h2>

    <table class="num-table">
      <thead>
        <tr><th>Метрика</th><th>Сейчас</th><th>После</th></tr>
      </thead>
      <tbody>
        <tr><td class="label">Время на позицию</td><td class="was">30–60 мин</td><td class="now">2–5 мин</td></tr>
        <tr><td class="label">Позиций в день</td><td class="was">15–20</td><td class="now">100–150</td></tr>
        <tr><td class="label">Поставщиков в сравнении</td><td class="was">3–4</td><td class="now">30–50</td></tr>
        <tr><td class="label">Учёт отсрочки</td><td class="was">На глаз</td><td class="now">Точный расчёт</td></tr>
        <tr><td class="label">Форматы</td><td class="was">Только Excel</td><td class="now">Любой формат</td></tr>
      </tbody>
    </table>

    <div class="fin-row">
      <div class="fin"><div class="v">3–8%</div><div class="l">экономия на контракте</div></div>
      <div class="fin"><div class="v">×5–10</div><div class="l">быстрее закрытие процедур</div></div>
      <div class="fin"><div class="v">×3–4</div><div class="l">больше процедур тем же штатом</div></div>
      <div class="fin"><div class="v">30–50</div><div class="l">поставщиков в таблице</div></div>
      <div class="fin dark">
        <div class="eyebrow-mini">Окупаемость пилота</div>
        <div class="v">2–3 мес</div>
        <div class="l">при экономии 3–8% на контракте против стоимости пилота</div>
      </div>
    </div>

    <div class="meta-corner"><span>Замер эффекта — фиксируем базовые метрики до пилота</span><span>05 / 12</span></div>
  </section>

  <!-- ============ SLIDE 6 — HOW IT WORKS ============ -->
  <section data-label="06 Как работает платформа">
    <div class="eyebrow"><span class="n">05</span><span>· Как работает платформа</span></div>
    <h2 class="title smaller">От письма поставщика до готовой таблицы — 5 шагов</h2>

    <div class="s6">
      <!-- Left: steps list -->
      <ol class="step-list">
        <li>
          <span class="n">01</span><span class="h">Получение ТКП</span>
          <span class="d">Excel, PDF, скан, email, тело письма. Ничего настраивать не нужно.</span>
        </li>
        <li class="linked">
          <span class="n">02 →</span><span class="h">Чтение данных</span>
          <span class="d">Нейросеть извлекает позиции, цены, сроки, условия — без шаблонов.</span>
        </li>
        <li>
          <span class="n">03</span><span class="h">Нормализация</span>
          <span class="d">Синонимы, валюты, единицы, Инкотермс — всё к единому виду.</span>
        </li>
        <li class="linked">
          <span class="n">04 →</span><span class="h">Сравнительная таблица</span>
          <span class="d">Все поставщики рядом. Ранжирование по вашим критериям. Лучший выделен.</span>
        </li>
        <li>
          <span class="n">05</span><span class="h">Выгрузка</span>
          <span class="d">Excel, PDF, протокол выбора — в корпоративных шаблонах заказчика.</span>
        </li>
      </ol>

      <!-- Middle: Screen A — history -->
      <div class="screens-col">
        <div>
          <div class="screen-frame scrA">
            <div class="app-top">
              <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              <span class="crumb" style="margin-left:8px">IntDoc AI</span>
              <span style="color:var(--fg-30)">/</span>
              <span>История обработки</span>
            </div>
            <div class="hdr">
              <h5>Загруженные КП</h5>
              <span class="meta">2 поставщика · 30 позиций извлечено</span>
            </div>
            <div class="file-row">
              <div class="ic">PDF</div>
              <div><div class="nm">TKP_Siemens_Industrial_2024-Q4.pdf</div><div class="sup">ООО «Технотрейд» · 12 МБ</div></div>
              <div class="st">Готово</div>
              <div class="dt">2 мин назад</div>
            </div>
            <div class="file-row">
              <div class="ic">XLS</div>
              <div><div class="nm">offer_industrial_apr2025.xlsx</div><div class="sup">«Энергопром-Сервис» · 4 МБ</div></div>
              <div class="st">Готово</div>
              <div class="dt">3 мин назад</div>
            </div>
            <div style="padding:10px 20px;font-family:var(--f-mono);font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--fg-50);background:var(--fg-05);border-top:1px solid var(--fg-10);">Извлечённая спецификация · 30 позиций</div>
            <table class="extract-tbl">
              <thead><tr><th>#</th><th>Артикул</th><th>Наименование</th><th>Ед.</th><th style="text-align:right">Кол-во</th></tr></thead>
              <tbody>
                <tr><td class="art">001</td><td class="art">6SL3210-1KE21-3UF1</td><td>Преобразователь частоты Sinamics G120C, 4 кВт</td><td class="art">шт</td><td class="qty">12</td></tr>
                <tr><td class="art">002</td><td class="art">3RT2026-1BB40</td><td>Контактор Sirius, 11 кВт, 3-полюсный</td><td class="art">шт</td><td class="qty">48</td></tr>
                <tr><td class="art">003</td><td class="art">5SY4116-7</td><td>Автомат. выключатель Siemens, 16 А, тип C</td><td class="art">шт</td><td class="qty">120</td></tr>
                <tr><td class="art">004</td><td class="art">3RV2011-1KA10</td><td>Автомат. выключатель защиты двигателя, 9–12 А</td><td class="art">шт</td><td class="qty">36</td></tr>
                <tr><td colspan="5" style="text-align:center;color:var(--fg-50);font-family:var(--f-mono);font-size:11px;padding:8px;">… ещё 26 позиций</td></tr>
              </tbody>
            </table>
          </div>
          <div class="screen-callout">30 позиций извлечено из PDF двух поставщиков — автоматически.</div>
        </div>
      </div>

      <!-- Right: Screen B compact (preview) -->
      <div class="screens-col">
        <div>
          <div class="screen-frame scrB" style="font-size:13px">
            <div class="app-tabs">
              <span class="tab active">Таблица</span>
              <span class="tab">Расчёт</span>
              <span class="tab">Шаблон для клиента</span>
              <span class="tab">История обработки</span>
            </div>
            <div class="spec-h" style="padding:14px 18px 4px">
              <div class="t" style="font-size:18px">Преобразователь частоты Sinamics G120C, 4 кВт</div>
              <div class="art">6SL3210-1KE21-3UF1</div>
            </div>
            <div class="offer-list" style="padding:8px 18px 16px;gap:8px">
              <div class="offer best" style="grid-template-columns:48px 1fr 110px 92px 100px;padding:10px 12px">
                <div class="pct">90%</div>
                <div class="name">Siemens AG <span class="sub">DE · оригинал</span></div>
                <div class="price" style="font-size:18px">€ 412.00</div>
                <div class="term">14 дн.</div>
                <div class="badge">Лучший</div>
              </div>
              <div class="offer" style="grid-template-columns:48px 1fr 110px 92px 100px;padding:10px 12px">
                <div class="pct">50%</div>
                <div class="name">Технотрейд <span class="sub">RU · аналог</span></div>
                <div class="price" style="font-size:18px">€ 365.00</div>
                <div class="term">30 дн.</div>
                <div class="badge">Аналог</div>
              </div>
              <div class="offer" style="grid-template-columns:48px 1fr 110px 92px 100px;padding:10px 12px">
                <div class="pct">40%</div>
                <div class="name">Энергопром-Сервис <span class="sub">RU · аналог</span></div>
                <div class="price" style="font-size:18px">€ 398.00</div>
                <div class="term">21 дн.</div>
                <div class="badge">Аналог</div>
              </div>
            </div>
          </div>
          <div class="screen-callout">AI привязал предложения к позиции и оценил соответствие.</div>
        </div>
      </div>
    </div>

    <div class="meta-corner"><span>IntDoc AI</span><span>06 / 12</span></div>
  </section>

  <!-- ============ SLIDE 7 — COMMERCIAL CONDITIONS ============ -->
  <section data-label="07 Коммерческие условия">
    <div class="eyebrow"><span class="n">05</span><span>· Коммерческие условия</span></div>
    <h2 class="title smaller">Дешёвая цена в КП ≠ выгодная закупка</h2>

    <div class="s7">
      <!-- Left: table + takeaway -->
      <div>
        <table class="comp-table">
          <thead>
            <tr><th>Поставщик</th><th>Цена в КП</th><th>Отсрочка</th><th>Стоимость денег</th><th>Итог</th></tr>
          </thead>
          <tbody>
            <tr>
              <td class="sup">А</td>
              <td>ниже всех</td>
              <td>7 дней</td>
              <td>высокая</td>
              <td>средняя</td>
            </tr>
            <tr class="best">
              <td class="sup">Б</td>
              <td>выше А</td>
              <td>60 дней</td>
              <td>низкая</td>
              <td>лучшая ✓</td>
            </tr>
            <tr>
              <td class="sup">В</td>
              <td>средняя</td>
              <td>30 дней</td>
              <td>средняя</td>
              <td>средняя</td>
            </tr>
          </tbody>
        </table>

        <div class="takeaway">
          Поставщик <strong>Б</strong> дороже по прайсу — но выгоднее по факту.<br />
          IntDoc считает это автоматически по вашим формулам.
        </div>
      </div>

      <!-- Right: settings screen -->
      <div>
        <div class="screen-frame scrC">
          <div class="app-top">
            <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            <span class="crumb" style="margin-left:8px">IntDoc AI</span>
            <span style="color:var(--fg-30)">/</span>
            <span>Настройки расчёта</span>
          </div>
          <div class="pane">
            <h6>Курсы валют</h6>
            <div class="rates">
              <div class="rate"><div class="pair">EUR → RUB</div><div class="val">96.40</div></div>
              <div class="rate"><div class="pair">USD → RUB</div><div class="val">89.15</div></div>
              <div class="rate"><div class="pair">CNY → RUB</div><div class="val">12.28</div></div>
            </div>
          </div>
          <div class="pane">
            <h6>Коэффициенты расчёта</h6>
            <div class="coefs">
              <div class="coef"><span class="k">Доставка</span><span class="v">7.5%</span></div>
              <div class="coef"><span class="k">Таможенное оформление</span><span class="v">3.0%</span></div>
              <div class="coef"><span class="k">Оборот средств</span><span class="v">18% годовых</span></div>
              <div class="coef"><span class="k">Доля аванса</span><span class="v">30%</span></div>
              <div class="coef"><span class="k">Отсрочка платежа</span><span class="v">учитывается</span></div>
              <div class="coef"><span class="k">Ставка кредита</span><span class="v">22% годовых</span></div>
              <div class="coef"><span class="k">Комиссия за оплату вне РФ</span><span class="v">2.0%</span></div>
              <div class="coef"><span class="k">Валюта итога</span><span class="v">RUB</span></div>
            </div>
          </div>
        </div>
        <div class="screen-callout">Параметры расчёта прозрачны и настраиваются под вашу экономику — это не чёрный ящик.</div>
      </div>
    </div>

    <div class="meta-corner"><span>IntDoc AI</span><span>07 / 12</span></div>
  </section>

  <!-- ============ SLIDE 8 — RESULT ============ -->
  <section data-label="08 Результат">
    <div class="eyebrow"><span class="n">05</span><span>· Результат</span></div>
    <h2 class="title smaller">Одна таблица вместо десятков файлов</h2>

    <div class="s8">
      <ul class="result-list">
        <li><span class="ck">✓</span><span>Все предложения по всем позициям в одной таблице</span></li>
        <li><span class="ck">✓</span><span>Итоговая стоимость с учётом валют, отсрочки, накладных — посчитана</span></li>
        <li><span class="ck">✓</span><span>Лучший вариант по каждой позиции подсвечен</span></li>
        <li><span class="ck">✓</span><span>Перевод позиций на русский — встроен</span></li>
        <li><span class="ck">✓</span><span>Выгрузка в Excel и протокол выбора в шаблонах заказчика</span></li>
        <li><span class="ck">✓</span><span>История обработки сохранена — ничего не теряется</span></li>
      </ul>

      <!-- Large Screen B -->
      <div class="screen-frame scrB" style="align-self:flex-start;width:100%;">
        <div class="app-top">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span class="crumb" style="margin-left:8px">IntDoc AI</span>
          <span style="color:var(--fg-30)">/</span>
          <span>Позиции спецификации</span>
          <span style="color:var(--fg-30)">/</span>
          <span>#001</span>
        </div>
        <div class="app-tabs">
          <span class="tab active">Таблица</span>
          <span class="tab">Расчёт</span>
          <span class="tab">Шаблон для клиента</span>
          <span class="tab">История обработки</span>
        </div>
        <div class="spec-h">
          <div class="t">Преобразователь частоты Sinamics G120C, 4 кВт, IP20, со встроенным фильтром EMC класса А</div>
          <div class="art">6SL3210-1KE21-3UF1</div>
        </div>
        <div class="spec-actions">
          <button class="btn">Скачать Excel</button>
          <button class="btn ghost">Перевести на русский</button>
        </div>
        <div class="offer-list">
          <div class="offer best">
            <div class="pct">90%</div>
            <div class="name">Siemens AG <span class="sub">DE · оригинал · артикул совпадает</span></div>
            <div class="price">€ 412.00</div>
            <div class="term">14 дней</div>
            <div class="badge">Лучший</div>
          </div>
          <div class="offer">
            <div class="pct">50%</div>
            <div class="name">ООО «Технотрейд» <span class="sub">RU · аналог по характеристикам</span></div>
            <div class="price">€ 365.00</div>
            <div class="term">30 дней</div>
            <div class="badge">Аналог</div>
          </div>
          <div class="offer">
            <div class="pct">40%</div>
            <div class="name">«Энергопром-Сервис» <span class="sub">RU · близкий аналог</span></div>
            <div class="price">€ 398.00</div>
            <div class="term">21 день</div>
            <div class="badge">Аналог</div>
          </div>
        </div>
      </div>
    </div>

    <div class="meta-corner"><span>IntDoc AI</span><span>08 / 12</span></div>
  </section>

  <!-- ============ SLIDE 9 — DEPLOYMENT & SECURITY ============ -->
  <section data-label="09 Развёртывание и безопасность">
    <div class="eyebrow"><span class="n">06</span><span>· Развёртывание и безопасность</span></div>
    <h2 class="title smaller">Два варианта — под любые требования службы безопасности</h2>

    <div class="deploy-grid">
      <div class="deploy-card">
        <h3>SaaS</h3>
        <div class="tagline">Быстрый старт, дочерние общества</div>
        <ul>
          <li>Доступ через браузер</li>
          <li>Инфраструктура в РФ</li>
          <li>Развёртывание — дни</li>
          <li>Соответствие 152-ФЗ</li>
          <li>Оплата за пользователя, без затрат на серверы на старте</li>
        </ul>
      </div>
      <div class="deploy-card">
        <h3>On-Premise</h3>
        <div class="tagline">Изоляция контура, КИИ, конфиденциальные данные</div>
        <ul>
          <li>Установка в вашем дата-центре</li>
          <li>Данные не покидают периметр</li>
          <li>Astra Linux, РЕД ОС, PostgreSQL</li>
          <li>Поддержка КИИ, ролевая модель</li>
          <li>Развёртывание — 4–8 недель</li>
        </ul>
      </div>
    </div>

    <div class="risk-panel">
      <h4>Снятие рисков</h4>
      <ul class="risk-grid">
        <li>Данные не используются для обучения моделей</li>
        <li>Доступ — по ролевой модели, журналируется каждое действие</li>
        <li>Финальное решение по выбору поставщика — всегда за закупщиком</li>
        <li>AI-стек модульный: интеграция YandexGPT / GigaChat — в роадмапе</li>
      </ul>
    </div>

    <div class="meta-corner"><span>IntDoc AI</span><span>09 / 12</span></div>
  </section>

  <!-- ============ SLIDE 10 — PILOT ============ -->
  <section data-label="10 Пилот">
    <div class="eyebrow"><span class="n">07</span><span>· Пилот</span></div>
    <h2 class="title smaller">Одна категория закупок — фиксируем метрики до и после</h2>

    <div class="timeline">
      <div class="ts">
        <div class="n">Этап 01</div>
        <div class="dur">1–2 недели</div>
        <div class="h">Постановка задачи</div>
        <div class="d">Выбираем категорию, фиксируем базовые показатели.</div>
      </div>
      <div class="ts">
        <div class="n">Этап 02</div>
        <div class="dur">3–4 недели</div>
        <div class="h">Настройка</div>
        <div class="d">Обучаем на ваших ТКП и номенклатуре.</div>
      </div>
      <div class="ts">
        <div class="n">Этап 03</div>
        <div class="dur">4–8 недель</div>
        <div class="h">Пилотная эксплуатация</div>
        <div class="d">Параллельная работа, замер метрик по факту.</div>
      </div>
      <div class="ts">
        <div class="n">Этап 04</div>
        <div class="dur">по итогам</div>
        <div class="h">Масштабирование</div>
        <div class="d">Расширение на категории и интеграции.</div>
      </div>
    </div>

    <div class="price-block">
      <div>
        <div class="eyebrow-mini">Стоимость пилота</div>
        <div class="big">от 400 000 ₽</div>
        <div class="sub">Вилка зависит от объёма номенклатуры и числа пользователей. Фиксируется в договоре, без скрытых платежей. Формат — SaaS, оплата за пользователя.</div>
      </div>
      <div>
        <div class="listhead">Что входит</div>
        <ul>
          <li>Настройка на ваших данных</li>
          <li>Обучение команды</li>
          <li>Параллельная эксплуатация</li>
          <li>Итоговый отчёт с метриками</li>
        </ul>
      </div>
    </div>

    <div class="quote-pill">«Эффект лучше всего виден на ваших данных — не на чужих кейсах и не на демо.»</div>

    <div class="meta-corner"><span>IntDoc AI</span><span>10 / 12</span></div>
  </section>

  <!-- ============ SLIDE 11 — ROADMAP STAIR ============ -->
  <section data-label="11 Маршрут внедрения">
    <div class="eyebrow"><span class="n">07</span><span>· Маршрут внедрения</span></div>
    <h2 class="title smaller">Пилот — это вход, а не разовый проект</h2>

    <div class="stair">
      <div class="step s1">
        <div class="n">01</div>
        <div class="h">Пилот</div>
        <div class="d">Одна категория закупок, замер эффекта.</div>
        <span class="now">Сейчас обсуждаем</span>
      </div>
      <div class="step s2">
        <div class="n">02</div>
        <div class="h">Развёртывание</div>
        <div class="d">Все закупщики, все категории.</div>
      </div>
      <div class="step s3">
        <div class="n">03</div>
        <div class="h">Интеграция</div>
        <div class="d">Связка с учётной системой, выгрузка заказов напрямую.</div>
      </div>
      <div class="step s4">
        <div class="n">04</div>
        <div class="h">Аналитика закупок</div>
        <div class="d">Дашборд: экономия, средняя цена, охват поставщиков, динамика.</div>
      </div>
    </div>

    <div class="footer-pill" style="margin-top:40px">
      <span>Каждый шаг — отдельное решение по итогам предыдущего. Вы не покупаете всё сразу.</span>
    </div>

    <div class="meta-corner"><span>IntDoc AI</span><span>11 / 12</span></div>
  </section>

  <!-- ============ SLIDE 12 — NEXT STEPS ============ -->
  <section data-label="12 Следующие шаги">
    <div class="eyebrow"><span class="n">08</span><span>· Следующие шаги</span></div>
    <h2 class="title smaller">С момента решения до первого результата — 6 недель</h2>

    <div class="nsteps">
      <div class="ns">
        <div class="n">01</div>
        <div class="h">Согласовать формат пилота</div>
        <div class="who">Совместно</div>
      </div>
      <div class="ns">
        <div class="n">02</div>
        <div class="h">Передать данные для настройки</div>
        <div class="who">Ваша сторона</div>
      </div>
      <div class="ns">
        <div class="n">03</div>
        <div class="h">Kick-off и старт работ</div>
        <div class="who">Совместно</div>
      </div>
      <div class="ns">
        <div class="n">04</div>
        <div class="h">Первое демо — поиск и сравнение работают</div>
        <div class="who">IntDoc AI</div>
      </div>
      <div class="ns last">
        <div class="n">05</div>
        <div class="h">Итоговая демонстрация и отчёт с метриками</div>
        <div class="who">IntDoc AI</div>
      </div>
    </div>

    <div class="contact-block">
      <div class="brand">
        <div class="label">IntDoc AI</div>
        <div class="val">Интеграмма</div>
      </div>
      <div>
        <div class="label">Менеджер</div>
        <div class="val">[ФИО менеджера]</div>
      </div>
      <div>
        <div class="label">Телефон</div>
        <div class="val">[+7 ___ ___ __ __]</div>
      </div>
      <div>
        <div class="label">Почта</div>
        <div class="val">[hello@intdoc.ai]</div>
      </div>
      <div>
        <div class="label">Сайт</div>
        <div class="val">intdoc.ai</div>
      </div>
    </div>

    <div class="meta-corner"><span>Конфиденциально</span><span>[Заказчик]</span><span>12 / 12</span></div>
  </section>

</deck-stage>
`;

export default function PitchPage() {
  return (
    <div className="pitch-host">
      {/* Speaker notes data island — read by deck-stage.js */}
      <script
        type="application/json"
        id="speaker-notes"
        dangerouslySetInnerHTML={{ __html: SPEAKER_NOTES }}
      />

      {/* The deck itself, rendered as raw HTML so the <deck-stage> web
          component sees its child <section> elements verbatim. */}
      <div dangerouslySetInnerHTML={{ __html: DECK_HTML }} />

      {/* Web component definition: scaling, keyboard nav, thumbnail rail, print */}
      <Script src="/deck-stage.js" strategy="afterInteractive" />
    </div>
  );
}
