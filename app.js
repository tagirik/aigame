const cardPool = [
  { id: 1, category: "Открытый контент", title: "Маркетолог загружает опубликованную статью компании, чтобы подготовить краткий пересказ", risk: "green", image: 1, rule: "Материал общедоступен и не содержит закрытой информации.", correctAction: "as-is" },
  { id: 2, category: "Конкуренты", title: "Маркетолог просит ИИ сравнить тарифы конкурентов по информации с их официальных сайтов", risk: "green", image: 3, rule: "Используются только публичные сведения.", correctAction: "as-is" },
  { id: 3, category: "Опрос", title: "Команда просит ИИ предложить вопросы для опроса без использования данных реальных клиентов", risk: "green", image: 2, rule: "Запрос не содержит персональных или внутренних данных.", correctAction: "as-is" },
  { id: 4, category: "Пресс-релиз", title: "Маркетолог передаёт ИИ опубликованный пресс-релиз, чтобы подготовить пост для социальных сетей", risk: "green", image: 1, rule: "Исходный материал уже опубликован.", correctAction: "as-is" },
  { id: 5, category: "Лендинг", title: "Команда создаёт учебный макет лендинга. Все продукты, компании и показатели вымышлены", risk: "green", image: 2, rule: "В запросе нет реальных данных.", correctAction: "as-is" },
  { id: 6, category: "Креатив", title: "Маркетолог просит придумать рекламную кампанию на основе открытого описания продукта", risk: "green", image: 2, rule: "Используется публичная информация о продукте.", correctAction: "as-is" },
  { id: 7, category: "Конференция", title: "Маркетолог загружает опубликованную программу конференции, чтобы выбрать интересные доклады", risk: "green", image: 3, rule: "Программа находится в открытом доступе.", correctAction: "as-is" },
  { id: 8, category: "Перевод", title: "Команда просит ИИ перевести справочную статью, опубликованную на сайте продукта", risk: "green", image: 1, rule: "Текст публичен и не содержит закрытых сведений.", correctAction: "as-is" },
  { id: 9, category: "Исследование", title: "Маркетолог просит ИИ создать универсальный шаблон исследовательского брифа", risk: "green", image: 6, rule: "В запросе отсутствуют сведения о реальных клиентах и проектах.", correctAction: "as-is" },
  { id: 10, category: "Нейминг", title: "Команда просит придумать название для вымышленного учебного продукта", risk: "green", image: 2, rule: "Ситуация полностью вымышленная.", correctAction: "as-is" },
  { id: 11, category: "CRM", title: "Маркетолог загружает выгрузку CRM с именами, телефонами, почтой и историей покупок клиентов", risk: "red", image: 7, rule: "Файл содержит персональные данные и информацию из внутренней системы.", correctAction: "block" },
  { id: 12, category: "Поддержка", title: "Сотрудник передаёт ИИ полную переписку клиента со службой поддержки", risk: "red", image: 8, rule: "Переписка может содержать персональные и конфиденциальные сведения.", correctAction: "block" },
  { id: 13, category: "Финансы", title: "Команда загружает полный бюджет маркетинга и прогноз выручки", risk: "red", image: 9, rule: "Это закрытая финансовая информация.", correctAction: "block" },
  { id: 14, category: "Roadmap", title: "Продакт передаёт ИИ дорожную карту с неанонсированными функциями и сроками запуска", risk: "red", image: 9, rule: "Документ раскрывает планы и приоритеты продукта.", correctAction: "block" },
  { id: 15, category: "Договор", title: "Сотрудник загружает договор с клиентом вместе с реквизитами и приложениями", risk: "red", image: 8, rule: "В документах есть коммерческие условия и персональные данные.", correctAction: "block" },
  { id: 16, category: "Сотрудники", title: "Руководитель загружает данные отдельных сотрудников, чтобы создать дашборд производительности", risk: "red", image: 7, rule: "Обрабатываются персональные и чувствительные сведения о сотрудниках.", correctAction: "block" },
  { id: 17, category: "Стратегический созвон", title: "После закрытого созвона команда загружает полную транскрипцию обсуждения стратегии продукта", risk: "red", image: 8, rule: "Транскрипция содержит внутренние решения, планы и персональные данные.", correctAction: "block" },
  { id: 18, category: "Продажи", title: "Маркетолог загружает список потенциальных клиентов с контактами, статусами переговоров и суммами сделок", risk: "red", image: 7, rule: "Раскрываются персональные данные и коммерческая информация.", correctAction: "block" },
  { id: 19, category: "Инцидент", title: "Команда передаёт ИИ внутренний отчёт об инциденте с данными клиентов и сотрудников", risk: "red", image: 8, rule: "Отчёт содержит закрытую информацию о клиентах и работе продукта.", correctAction: "block" },
  { id: 20, category: "Монетизация", title: "Маркетолог загружает будущие тарифы, себестоимость и расчёты маржинальности продукта", risk: "red", image: 9, rule: "Раскрывается неанонсированная модель монетизации.", correctAction: "block" },
  { id: 21, category: "NPS", title: "Из комментариев NPS удалили имена, но оставили должности, города и названия компаний", risk: "yellow", image: 4, rule: "Авторов можно определить по сочетанию косвенных признаков.", correctAction: "anonymize" },
  { id: 22, category: "A/B-тест", title: "В таблице A/B-теста нет данных клиентов, но остались точные показатели выручки", risk: "yellow", image: 5, rule: "Точные финансовые показатели могут быть закрытой информацией.", correctAction: "aggregate" },
  { id: 23, category: "Интервью", title: "Из транскрипта интервью удалили имя клиента, но оставили отрасль, город и редкую бизнес-проблему", risk: "yellow", image: 4, rule: "Клиента можно определить по совокупности деталей.", correctAction: "anonymize" },
  { id: 24, category: "Клиентский кейс", title: "Команда хочет загрузить «обезличенную» историю клиента, но неизвестно, какие сведения были удалены", risk: "yellow", image: 6, rule: "В материале могли сохраниться прямые или косвенные идентификаторы.", correctAction: "anonymize" },
  { id: 25, category: "Каналы", title: "В таблице рекламных каналов нет названий клиентов, но остались внутренние коды кампаний", risk: "yellow", image: 5, rule: "По кодам можно восстановить конкретные проекты или клиентов.", correctAction: "anonymize" },
  { id: 26, category: "Продажи", title: "Маркетолог собирает FAQ из заметок продавцов. Контакты клиентов удалены, но файл ещё не проверяли", risk: "yellow", image: 4, rule: "В заметках могли остаться компании, фамилии, сделки и другие идентификаторы.", correctAction: "anonymize" },
  { id: 27, category: "Вебинар", title: "Команда хочет загрузить презентацию с клиентского вебинара, но не знает, была ли она опубликована для всех", risk: "yellow", image: 6, rule: "Пока публичный статус презентации не подтверждён, её нельзя считать открытым материалом.", correctAction: "block" },
  { id: 28, category: "Отзывы", title: "На скриншотах отзывов закрыли имена, но оставили фотографии, никнеймы и названия компаний", risk: "yellow", image: 4, rule: "Автора можно определить по другим элементам изображения.", correctAction: "anonymize" },
  { id: 29, category: "Продуктовая аналитика", title: "Маркетолог хочет загрузить в ИИ статистику использования продукта по клиентам. Названия компаний заменены номерами, но сохранены точные значения выручки, количества сотрудников и активности", risk: "yellow", image: 5, rule: "По сочетанию точных показателей внешний сервис или его пользователь может определить конкретные компании и получить закрытые сведения об их работе с продуктом.", correctAction: "aggregate" },
  { id: 30, category: "Тестовые данные", title: "Подрядчик передал набор данных и назвал его тестовым, но происхождение данных не подтверждено", risk: "yellow", image: 6, rule: "Нет гарантии, что в наборе отсутствуют реальные сведения.", correctAction: "block" },
];

const RESULTS_ENDPOINT = "https://script.google.com/macros/s/AKfycbyOrMMJASV9NJNziSRtfEtAzlbFrcOuo8oudnZ-Nhh5oKgzYw503U-UH70KYy_Y7P0/exec";

const actions = [
  { id: "as-is", label: "Можно использовать как есть" },
  { id: "anonymize", label: "Удалить имена, контакты и идентификаторы" },
  { id: "aggregate", label: "Обобщить данные и заменить точные значения" },
  { id: "block", label: "Не загружать во внешний ИИ" },
];

function imagePath(card) {
  const filename = `${String(card.id).padStart(2, "0")}.png`;
  return window.__SITUATION_IMAGES__?.[filename] ?? `./situation-images/${filename}`;
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function createDeck() {
  const take = (risk, amount) => shuffle(cardPool.filter(card => card.risk === risk)).slice(0, amount);
  return shuffle([...take("green", 3), ...take("yellow", 4), ...take("red", 3)]);
}

const state = { phase: "intro", deck: createDeck(), index: 0, answers: [], parkingIndex: 0, parkingActions: [], dragging: false, startX: 0, startY: 0, dx: 0, dy: 0 };
const app = document.querySelector("#app-root");
const startButton = document.querySelector("#start-button");

function counts() {
  return { red: state.answers.filter(a => a.choice === "red").length, yellow: state.answers.filter(a => a.choice === "yellow").length, green: state.answers.filter(a => a.choice === "green").length };
}

function sidebar() {
  const c = counts();
  return `<aside class="game-sidebar"><p class="sidebar-title">Ваши стопки</p><div class="pile-list"><div class="pile red"><span class="pile-dot"></span><span>Нельзя</span><strong>${c.red}</strong></div><div class="pile yellow"><span class="pile-dot"></span><span>Доработать</span><strong>${c.yellow}</strong></div><div class="pile green"><span class="pile-dot"></span><span>Можно</span><strong>${c.green}</strong></div></div><div class="sidebar-note"><span>+</span><p><strong>«Доработать» — значит отправить ситуацию на парковку.</strong> В следующем раунде нужно будет выбрать дополнительное условие.</p></div></aside>`;
}

function renderIntro() {
  app.innerHTML = `<div class="result-stage"><div class="result-grid"><div class="score-card"><div class="score-number">3:30</div><p>Перед вами рабочие ситуации. Свайпайте карточки и решайте, куда отнести каждую: «нельзя», «доработать» или «можно».</p></div><div class="checklist-card"><h4>Куда свайпать</h4><ol class="checklist"><li><strong>Влево:</strong> нельзя передавать внешнему ИИ.</li><li><strong>Вверх:</strong> доработать — отправить на парковку и уточнить условие.</li><li><strong>Вправо:</strong> можно использовать в текущем виде.</li></ol><div class="artifact-actions"><button class="artifact-button" data-action="begin">Играть</button></div></div></div></div>`;
}

function cardMarkup(card, behind = false) {
  return `<article class="data-card${behind ? " behind" : ""}" ${behind ? "aria-hidden=\"true\"" : "tabindex=\"0\" role=\"group\" aria-label=\"Карточка с ситуацией\""} data-card><img class="card-image" src="${imagePath(card)}" alt="" draggable="false"><div class="card-meta"><span class="card-category">${card.category}</span><span class="card-count">${state.index + 1} / ${state.deck.length}</span></div><h3>${card.title}</h3><span class="swipe-overlay left">НЕЛЬЗЯ</span><span class="swipe-overlay up">ДОРАБОТАТЬ</span><span class="swipe-overlay right">МОЖНО</span></article>`;
}

function renderSwipe() {
  const card = state.deck[state.index];
  const next = state.deck[state.index + 1];
  app.innerHTML = `<div class="game-layout"><div class="game-stage"><div class="progress-row"><strong>${state.index + 1} / ${state.deck.length}</strong><div class="progress-track"><div class="progress-fill" style="width:${((state.index + 1) / state.deck.length) * 100}%"></div></div></div><p class="round-label">Раунд 1 · Сортировка ситуаций</p><div class="card-zone">${next ? cardMarkup(next, true) : ""}${cardMarkup(card)}</div><div class="swipe-actions"><button class="swipe-button red" data-swipe="red">← Нельзя</button><button class="swipe-button yellow" data-swipe="yellow">↑ Доработать</button><button class="swipe-button green" data-swipe="green">Можно →</button></div></div>${sidebar()}</div>`;
  bindCardGestures();
}

function classify(choice) {
  if (state.index >= state.deck.length) return;
  state.answers.push({ cardId: state.deck[state.index].id, choice });
  state.index += 1;
  if (state.index < state.deck.length) renderSwipe(); else beginParking();
}

function beginParking() {
  state.parkingIndex = 0;
  const parked = state.answers.filter(a => a.choice === "yellow");
  if (!parked.length) { state.phase = "result"; renderResult(); return; }
  state.phase = "parking";
  renderParking();
}

function parkedCards() { return state.answers.filter(a => a.choice === "yellow").map(a => state.deck.find(c => c.id === a.cardId)); }

function renderParking() {
  const parked = parkedCards();
  const card = parked[state.parkingIndex];
  app.innerHTML = `<div class="game-layout"><div class="game-stage"><div class="progress-row"><strong>${state.parkingIndex + 1} / ${parked.length}</strong><div class="progress-track"><div class="progress-fill" style="width:${((state.parkingIndex + 1) / parked.length) * 100}%"></div></div></div><p class="round-label">Раунд 2 · Дополнительные условия парковки</p><div class="parking-stage"><h3>Что нужно сделать<br>с этими данными?</h3><p>Выберите подходящее условие перед передачей данных внешнему ИИ.</p><div class="parking-card"><img class="card-image" src="${imagePath(card)}" alt=""><div><span class="card-category">${card.category}</span><h4>${card.title}</h4><div class="action-options">${actions.map(a => `<button class="action-option" data-parking-action="${a.id}">${a.label}</button>`).join("")}</div></div></div></div></div>${sidebar()}</div>`;
}

function parkingAnswer(actionId) {
  const card = parkedCards()[state.parkingIndex];
  state.parkingActions.push({ cardId: card.id, actionId });
  state.parkingIndex += 1;
  if (state.parkingIndex < parkedCards().length) renderParking(); else { state.phase = "result"; renderResult(); }
}

function isCardAnswerCorrect(card) {
  const answer = state.answers.find(item => item.cardId === card.id);
  if (!answer || answer.choice !== card.risk) return false;
  if (card.risk !== "yellow") return true;
  const parkingAction = state.parkingActions.find(item => item.cardId === card.id);
  return parkingAction?.actionId === card.correctAction;
}

function resultData() {
  const correctCards = state.deck.filter(isCardAnswerCorrect).length;
  const score = Math.round((correctCards / state.deck.length) * 100);
  const uniqueMistakes = state.deck.filter(card => !isCardAnswerCorrect(card));
  let profile = "Навигатор ИИ-рисков";
  if (score >= 88) profile = "Архитектор безопасных данных";
  else if (score < 60) profile = "Исследователь серых зон";
  return { score, correctCards, profile, mistakes: uniqueMistakes };
}

function renderResult() {
  const result = resultData();
  const mistakeHtml = result.mistakes.length ? result.mistakes.map(c => `<div><strong>${c.title}</strong><br>${c.rule}</div>`).join("<br>") : "Все карточки разобраны уверенно. Сохраните общий алгоритм перед загрузкой.";
  app.innerHTML = `<div class="result-stage"><p class="result-kicker">Ваш результат</p><h3>${result.profile}</h3><div class="result-grid"><div class="score-card"><div class="score-number">${result.score}%</div><p>Результат показывает, насколько уверенно вы различаете свободные, условно допустимые и закрытые данные.</p></div><div class="checklist-card"><h4>Мой чек-лист</h4><ol class="checklist"><li>Минимизировать данные.</li><li>Проверить персональные и конфиденциальные сведения.</li><li>Обезличить или агрегировать жёлтую зону.</li><li>Проверить доступ и условия платформы.</li><li>Проверить ответ ИИ и сохранить ответственность.</li></ol><div class="mistakes"><strong>Мои зоны внимания</strong><br><br>${mistakeHtml}</div></div></div><div class="result-submit"><label for="company">Компания участника</label><input id="company" type="text" maxlength="120" required placeholder="Название компании"></div><div class="artifact-actions"><button class="artifact-button secondary" data-action="restart">Сыграть заново</button><button class="artifact-button" data-action="submit-result">Отправить результат</button></div><p class="submission-status" data-submission-status aria-live="polite"></p></div>`;
}

async function submitResult() {
  const input = document.querySelector("#company");
  if (!input.reportValidity() || !input.value.trim()) return;
  const status = document.querySelector("[data-submission-status]");
  const button = document.querySelector('[data-action="submit-result"]');
  button.disabled = true;
  button.textContent = "Отправляется…";
  status.textContent = "Отправляем результат в общий рейтинг…";
  const result = resultData();
  const record = {
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    company: input.value.trim(),
    score: result.score,
    correctAnswers: result.correctCards,
    totalQuestions: state.deck.length,
    profile: result.profile,
    playedAt: new Date().toISOString(),
  };
  try {
    await fetch(RESULTS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(record),
    });
    let records = [];
    try { records = JSON.parse(localStorage.getItem("ai-risk-company-results") ?? "[]"); } catch { records = []; }
    records.push(record);
    localStorage.setItem("ai-risk-company-results", JSON.stringify(records));
    window.dispatchEvent(new CustomEvent("ai-risk-result-submitted", { detail: record }));
    status.textContent = "Результат отправлен в общий рейтинг.";
    button.textContent = "Результат отправлен";
  } catch {
    status.textContent = "Не удалось отправить результат. Проверьте интернет и попробуйте ещё раз.";
    button.disabled = false;
    button.textContent = "Отправить результат";
  }
}

function resetGame() {
  Object.assign(state, { phase: "intro", deck: createDeck(), index: 0, answers: [], parkingIndex: 0, parkingActions: [], dragging: false, dx: 0, dy: 0 });
  renderIntro();
}

function bindCardGestures() {
  const card = app.querySelector("[data-card]");
  if (!card) return;
  const overlays = { red: card.querySelector(".left"), yellow: card.querySelector(".up"), green: card.querySelector(".right") };
  const move = (event) => {
    if (!state.dragging) return;
    state.dx = event.clientX - state.startX; state.dy = event.clientY - state.startY;
    card.style.transform = `translate(${state.dx}px, ${state.dy}px) rotate(${state.dx / 18}deg)`;
    const strength = Math.min(1, Math.max(Math.abs(state.dx) / 110, Math.max(0, -state.dy) / 90));
    Object.values(overlays).forEach(o => o.style.opacity = "0");
    if (-state.dy > Math.abs(state.dx) && state.dy < -20) overlays.yellow.style.opacity = String(strength);
    else if (state.dx < -20) overlays.red.style.opacity = String(strength);
    else if (state.dx > 20) overlays.green.style.opacity = String(strength);
  };
  const end = (event) => {
    if (!state.dragging) return;
    state.dragging = false; card.releasePointerCapture?.(event.pointerId);
    let choice = null;
    if (-state.dy > Math.abs(state.dx) && state.dy < -90) choice = "yellow";
    else if (state.dx < -110) choice = "red";
    else if (state.dx > 110) choice = "green";
    if (choice) classify(choice); else { card.style.transform = ""; Object.values(overlays).forEach(o => o.style.opacity = "0"); }
  };
  card.addEventListener("pointerdown", event => { state.dragging = true; state.startX = event.clientX; state.startY = event.clientY; state.dx = 0; state.dy = 0; card.setPointerCapture?.(event.pointerId); });
  card.addEventListener("pointermove", move);
  card.addEventListener("pointerup", end);
  card.addEventListener("pointercancel", end);
  card.addEventListener("keydown", event => { if (event.key === "ArrowLeft") classify("red"); if (event.key === "ArrowRight") classify("green"); if (event.key === "ArrowUp") classify("yellow"); });
}

app.addEventListener("click", event => {
  const swipe = event.target.closest("[data-swipe]")?.dataset.swipe;
  if (swipe) { classify(swipe); return; }
  const parkingAction = event.target.closest("[data-parking-action]")?.dataset.parkingAction;
  if (parkingAction) { parkingAnswer(parkingAction); return; }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "begin") { state.phase = "swipe"; renderSwipe(); }
  if (action === "restart") resetGame();
  if (action === "submit-result") submitResult();
});

startButton.addEventListener("click", () => document.querySelector("#game").scrollIntoView({ behavior: "smooth" }));
renderIntro();
