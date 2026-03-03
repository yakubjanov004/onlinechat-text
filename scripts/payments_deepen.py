from pathlib import Path

base = Path(r"C:\Users\User\Desktop\onlinechat-text\html\27-payments")

extras = {
"01-payment-overview.html": '''
<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>Gateway ulushlari</h3></div></div>
    <div class="card-body">
      <div class="list-stack">
        <div class="list-item"><div class="item-main"><div class="item-title">Payme</div><div class="item-sub">Kunlik tranzaksiyalar ulushi</div></div><span class="badge badge-primary">41%</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Click</div><div class="item-sub">Kunlik tranzaksiyalar ulushi</div></div><span class="badge badge-success">28%</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Stripe</div><div class="item-sub">Xalqaro to'lovlar ulushi</div></div><span class="badge badge-warning">19%</span></div>
      </div>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>Risk indikatori</h3></div></div>
    <div class="card-body">
      <p class="text-muted" style="margin:0 0 8px">Fraud signal threshold: <strong>0.78</strong></p>
      <p class="text-muted" style="margin:0 0 8px">Chargeback trend (7 kun): <strong>-12%</strong></p>
      <a class="btn btn-secondary" href="./08-payment-logs.html"><i data-lucide="shield-alert"></i> Risk loglarni ochish</a>
    </div>
  </article>
</section>
''',
"02-payme-setup.html": '''
<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Payme callback verifikatsiyasi</h3></div></div>
  <div class="card-body">
    <div class="table-wrap">
      <table class="table">
        <thead class="table-header"><tr><th>Tekshiruv</th><th>Natija</th><th>Izoh</th></tr></thead>
        <tbody>
          <tr class="table-row"><td>X-Auth header</td><td><span class="badge badge-success">OK</span></td><td>Imzo mos keldi</td></tr>
          <tr class="table-row"><td>IP whitelist</td><td><span class="badge badge-success">OK</span></td><td>Ruxsat etilgan subnet</td></tr>
          <tr class="table-row"><td>Timestamp drift</td><td><span class="badge badge-warning">+42s</span></td><td>NTP sync tavsiya qilinadi</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
''',
"03-click-setup.html": '''
<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>Click signing sozlamalari</h3></div></div>
    <div class="card-body">
      <label>Signature algorithm
        <select class="input"><option>SHA-256</option><option>SHA-1 (legacy)</option></select>
      </label>
      <label style="margin-top:10px;display:block">Clock skew tolerance
        <input class="input" value="90 sec" />
      </label>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>Failover</h3></div></div>
    <div class="card-body">
      <p class="text-muted" style="margin:0 0 10px">Click callback ishlamasa avtomatik fallback:</p>
      <a class="btn btn-secondary" href="./06-bank-transfer.html">Bank transfer fallback</a>
    </div>
  </article>
</section>
''',
"04-uzum-setup.html": '''
<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Settlement kalendari</h3></div></div>
  <div class="card-body">
    <div class="list-stack">
      <div class="list-item"><div class="item-main"><div class="item-title">Dushanba</div><div class="item-sub">10:00 va 17:00 batch</div></div><span class="badge badge-success">Faol</span></div>
      <div class="list-item"><div class="item-main"><div class="item-title">Shanba</div><div class="item-sub">Faqat 12:00 batch</div></div><span class="badge badge-warning">Cheklangan</span></div>
    </div>
  </div>
</section>
''',
"05-stripe-setup.html": '''
<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Stripe webhook event mapping</h3></div></div>
  <div class="card-body">
    <div class="grid cols-2" style="gap:10px">
      <div class="pill">payment_intent.succeeded -> Paid</div>
      <div class="pill">payment_intent.payment_failed -> Failed</div>
      <div class="pill">charge.refunded -> Refunded</div>
      <div class="pill">charge.dispute.created -> Risk Queue</div>
    </div>
  </div>
</section>
''',
"06-bank-transfer.html": '''
<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Manual reconciliation queue</h3></div></div>
  <div class="card-body">
    <p class="text-muted" style="margin:0 0 10px">Mos kelmagan to'lovlar operator tomonidan tekshiriladi.</p>
    <div class="table-wrap">
      <table class="table">
        <thead class="table-header"><tr><th>Invoice</th><th>Summa</th><th>Holat</th><th>Amal</th></tr></thead>
        <tbody>
          <tr class="table-row"><td>INV-22031</td><td>870,000 UZS</td><td><span class="badge badge-warning">Mismatch</span></td><td><button class="btn btn-ghost">Match</button></td></tr>
          <tr class="table-row"><td>INV-22018</td><td>120,000 UZS</td><td><span class="badge badge-danger">No receipt</span></td><td><button class="btn btn-ghost">Escalate</button></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
''',
"07-payment-test.html": '''
<section class="split-grid" style="margin-top:14px">
  <article class="card">
    <div class="card-header"><div><h3>Test scenariylari</h3></div></div>
    <div class="card-body">
      <div class="list-stack">
        <div class="list-item"><div class="item-main"><div class="item-title">Success + callback</div><div class="item-sub">E2E happy path</div></div><span class="badge badge-success">Pass</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Timeout + retry</div><div class="item-sub">3 marta qayta urinish</div></div><span class="badge badge-success">Pass</span></div>
        <div class="list-item"><div class="item-main"><div class="item-title">Duplicate callback</div><div class="item-sub">Idempotency tekshiruvi</div></div><span class="badge badge-success">Pass</span></div>
      </div>
    </div>
  </article>
  <article class="card">
    <div class="card-header"><div><h3>Quick actions</h3></div></div>
    <div class="card-body">
      <button class="btn btn-secondary" data-action="log"><i data-lucide="play"></i> Full regression</button>
    </div>
  </article>
</section>
''',
"08-payment-logs.html": '''
<section class="card" style="margin-top:14px">
  <div class="card-header"><div><h3>Filter va eksport</h3></div></div>
  <div class="card-body">
    <div class="grid cols-3" style="gap:10px">
      <select class="input"><option>Holat: Barchasi</option><option>Success</option><option>Failed</option><option>Pending</option></select>
      <select class="input"><option>Gateway: Barchasi</option><option>Payme</option><option>Click</option><option>Stripe</option></select>
      <button class="btn btn-secondary"><i data-lucide="download"></i> CSV eksport</button>
    </div>
  </div>
</section>
'''
}

for name, snippet in extras.items():
    p = base / name
    content = p.read_text(encoding='utf-8')
    marker = '<div class="sticky-save-bar">'
    if marker in content and snippet not in content:
        content = content.replace(marker, snippet + '\n' + marker)
        p.write_text(content, encoding='utf-8')

print('payments deepened')
