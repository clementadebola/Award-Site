export async function fetchCategories() {
  const res = await fetch('/api/categories');
  return res.json();
}

export async function addCategory(category) {
  const res = await fetch('/api/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category),
  });
  return res.json();
}

export async function fetchContestants() {
  const res = await fetch('/api/contestants');
  return res.json();
}

export async function addContestant(contestant) {
  const res = await fetch('/api/contestants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contestant),
  });
  return res.json();
}

export async function fetchPayments() {
  const res = await fetch('/api/payments');
  return res.json();
}
