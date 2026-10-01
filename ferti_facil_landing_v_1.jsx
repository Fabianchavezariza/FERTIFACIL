import React, { useState } from "react";

const whatsapp = (message) => `https://wa.me/573133264196?text=${encodeURIComponent(message)}`;

export default function FertiFacilLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quote, setQuote] = useState("");
  function submitQuote(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setQuote(whatsapp(`Hola FertiFácil, solicito cotización. Nombre: ${data.get("nombre")}. Email: ${data.get("email")}. Teléfono: ${data.get("telefono")}. Producto: ${data.get("producto")}. Mensaje: ${data.get("mensaje")}. Contraentrega: ${data.has("contraentrega") ? "Sí" : "No"}.`));
  }
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#inicio" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500" />
              <span className="text-xl font-bold tracking-tight">FertiFácil</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 font-medium">
              <a href="#productos" className="hover:text-emerald-600">Productos</a>
              <a href="#beneficios" className="hover:text-emerald-600">Beneficios</a>
              <a href="#ficha" className="hover:text-emerald-600">Ficha técnica</a>
              <a href="#distribucion" className="hover:text-emerald-600">Distribución</a>
              <a href="#contacto" className="hover:text-emerald-600">Contacto</a>
            </nav>
            <a
              href="https://wa.me/573133264196?text=Hola%20FertiF%C3%A1cil%2C%20quiero%20informaci%C3%B3n"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-emerald-500/20 bg-emerald-500 text-white hover:shadow-md hover:brightness-105"
            >
              WhatsApp
            </a>
            <button type="button" className="md:hidden rounded-xl border p-3" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Cerrar menú" : "Abrir menú"}</button>
          </div>
          {menuOpen && <nav id="mobile-navigation" aria-label="Navegación móvil" className="md:hidden flex flex-col gap-4 pb-5">{[["productos","Productos"],["beneficios","Beneficios"],["ficha","Ficha técnica"],["distribucion","Distribución"],["contacto","Contacto"]].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-emerald-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Nutrición inteligente para cultivos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">más sanos y productivos</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Consulta nuestro portafolio de nutrición vegetal. Cuéntanos sobre tu cultivo y solicita información técnica y una cotización.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-gray-900 text-white hover:opacity-95"
                >
                  Ver productos
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold ring-1 ring-gray-300 text-gray-900 hover:bg-gray-50"
                >
                  Solicitar cotización
                </a>
              </div>
              <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-gray-200 p-4">
                  <dt className="text-xs text-gray-500">Atención</dt>
                  <dd className="text-lg font-semibold">WhatsApp</dd>
                </div>
                <div className="rounded-2xl border border-gray-200 p-4">
                  <dt className="text-xs text-gray-500">Presentaciones</dt>
                  <dd className="text-lg font-semibold">Consulta disponibilidad</dd>
                </div>
                <div className="rounded-2xl border border-gray-200 p-4">
                  <dt className="text-xs text-gray-500">Cobertura</dt>
                  <dd className="text-lg font-semibold">Colombia</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-emerald-200/50 to-sky-200/50 blur-2xl rounded-3xl" />
              <div className="aspect-[4/3] rounded-3xl border border-gray-200 bg-white shadow-sm p-6 flex items-center justify-center">
                <div className="grid gap-4 sm:grid-cols-3 w-full">
                  {[
                    { name: "FertiFácil Potasio", tag: "Potasio" },
                    { name: "FertiFácil Calcio", tag: "Calcio" },
                    { name: "FertiFácil Fósforo Zinc", tag: "Fósforo y zinc" },
                  ].map((p) => (
                    <div key={p.name} className="rounded-2xl border border-gray-200 p-4">
                      <div className="h-24 w-full rounded-xl bg-gradient-to-br from-emerald-400/30 to-sky-400/30" />
                      <h3 className="mt-3 font-semibold leading-tight">{p.name}</h3>
                      <p className="text-sm text-gray-600">{p.tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="bg-emerald-50 py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Nuestro portafolio</h2><p className="mt-3 text-gray-600">Consulta presentaciones, disponibilidad y condiciones comerciales.</p><div className="mt-8 grid gap-6 md:grid-cols-3">{["FertiFácil Potasio", "FertiFácil Calcio", "FertiFácil Fósforo Zinc"].map(name => <article key={name} className="rounded-3xl border bg-white p-6"><h3 className="text-xl font-bold">{name}</h3><p className="my-4 text-gray-600">Solicita información del producto para tu cultivo.</p><a className="inline-flex rounded-xl bg-emerald-700 px-4 py-3 font-semibold text-white" href={whatsapp(`Hola FertiFácil, quiero cotizar ${name}. Mi cultivo, municipio y cantidad son:`)}>Cotizar por WhatsApp</a></article>)}</div></div></section>
      <section id="beneficios" className="py-16"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold">Una compra fácil de gestionar</h2><div className="mt-6 grid gap-6 md:grid-cols-3">{["Consulta según tu cultivo", "Cotización personalizada", "Coordinación de tu pedido"].map(t => <h3 key={t} className="rounded-2xl border p-6 font-semibold">{t}</h3>)}</div></div></section>
      <section id="ficha" className="bg-sky-50 py-16"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold">Información técnica</h2><p className="my-4 text-gray-600">Solicita la ficha técnica y etiqueta vigentes del producto. Las dosis y recomendaciones deben definirse según el cultivo y la evaluación técnica.</p><a className="font-semibold text-emerald-800 underline" href={whatsapp("Hola FertiFácil, solicito la ficha técnica y etiqueta vigentes del producto:")}>Solicitar ficha técnica por WhatsApp</a></div></section>
      {/* DISTRIBUCION */}
      <section id="distribucion" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Distribuidores autorizados</h2>
          <p className="mt-2 text-emerald-700 font-medium flex items-center gap-2">💵 Pago contraentrega disponible en todo Colombia · Entregas desde Bucaramanga y Pamplona</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 p-6">
              <h3 className="font-semibold text-lg">Unicampo · Bucaramanga</h3>
              <p className="text-sm text-gray-600">Acompañamiento técnico y consulta de disponibilidad.</p>
              <p className="mt-2 text-sm text-gray-700">Contactos: Ing. Jonathan Carvajal · Ing. César Jaimes</p>
            </div>
            <div className="rounded-3xl border border-gray-200 p-6">
              <h3 className="font-semibold text-lg">Unicampo · Pamplona</h3>
              <p className="text-sm text-gray-600">Cobertura Norte de Santander.</p>
              <p className="mt-2 text-sm text-gray-700">Contactos: Ing. Jonathan Carvajal · Ing. César Jaimes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
              <p className="mt-2 text-gray-600">Bucaramanga, Santander · Colombia</p>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li><span className="font-semibold">Tel:</span> +57 313 326 4196</li>
                <li><span className="font-semibold">Email:</span> gerencia@agrofertifacil.com</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 p-6">
              <form onSubmit={submitQuote} className="grid gap-4">
                <div>
                  <label htmlFor="nombre" className="text-sm font-medium">Nombre completo</label>
                  <input id="nombre" name="nombre" required maxLength={100} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tu nombre" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">Email (opcional)</label>
                    <input id="email" name="email" type="email" maxLength={150} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="tucorreo@dominio.com" />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="text-sm font-medium">Teléfono (opcional)</label>
                    <input id="telefono" name="telefono" type="tel" maxLength={30} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+57..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="producto" className="text-sm font-medium">Producto</label><select id="producto" name="producto" className="my-2 w-full rounded-xl border p-3"><option>Consulta general</option><option>FertiFácil Potasio</option><option>FertiFácil Calcio</option><option>FertiFácil Fósforo Zinc</option></select><label htmlFor="mensaje" className="text-sm font-medium">Cultivo, municipio y cantidad</label>
                  <textarea id="mensaje" name="mensaje" required maxLength={1000} rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Cuéntanos sobre tu cultivo" />
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="contraentrega" className="rounded text-emerald-600" />
                  Deseo realizar el pedido con pago contraentrega
                </label>
                <button type="submit" className="rounded-2xl bg-gray-900 text-white font-semibold px-5 py-3 hover:opacity-95">
                  Preparar cotización por WhatsApp
                </button>
                <p className="text-xs text-gray-500">Al continuar, compartirás estos datos en WhatsApp para gestionar tu solicitud. Puedes revisar el mensaje antes de enviarlo.</p>
                {quote && <a href={quote} className="rounded-xl bg-emerald-700 p-4 text-center font-semibold text-white">Abrir solicitud en WhatsApp</a>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t p-6 text-center text-sm text-gray-600">FertiFácil Agrocomercial · <a className="underline" href="https://www.instagram.com/fchavezsantander/">Instagram @fchavezsantander</a> · Facebook: Fertifácil Agrocomercial</footer>
    </div>
  );
}
