import React from "react";

export default function FertiFacilLanding() {
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
          </div>
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
                Soluciones foliares de alto desempeño diseñadas para fortalecer estructura celular, mejorar calidad de fruto y potenciar el rendimiento en campo.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-gray-900 text-white hover:opacity-95"
                >
                  Ver productos
                </a>
                <a
                  href="mailto:gerencia@agrofertifacil.com"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold ring-1 ring-gray-300 text-gray-900 hover:bg-gray-50"
                >
                  Solicitar cotización
                </a>
              </div>
              <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-gray-200 p-4">
                  <dt className="text-xs text-gray-500">Registro ICA</dt>
                  <dd className="text-lg font-semibold">13045</dd>
                </div>
                <div className="rounded-2xl border border-gray-200 p-4">
                  <dt className="text-xs text-gray-500">Presentaciones</dt>
                  <dd className="text-lg font-semibold">1 L · 4 L · 20 L</dd>
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
                    { name: "FertiFácil Potasio", tag: "K · Calidad de fruto" },
                    { name: "FertiFácil Calcio", tag: "Ca · Firmeza y paredes celulares" },
                    { name: "FertiFácil Fósforo Zinc", tag: "P·Zn · Enraizamiento y vigor" },
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

      {/* DISTRIBUCION */}
      <section id="distribucion" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Distribuidores autorizados</h2>
          <p className="mt-2 text-emerald-700 font-medium flex items-center gap-2">💵 Pago contraentrega disponible en todo Colombia · Entregas desde Bucaramanga y Pamplona</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 p-6">
              <h3 className="font-semibold text-lg">Unicampo · Bucaramanga</h3>
              <p className="text-sm text-gray-600">Acompañamiento técnico y disponibilidad inmediata.</p>
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
              <form className="grid gap-4">
                <div>
                  <label className="text-sm font-medium">Nombre completo</label>
                  <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tu nombre" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="tucorreo@dominio.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Teléfono</label>
                    <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+57..." />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Cuéntanos sobre tu cultivo" />
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded text-emerald-600" />
                  Deseo realizar el pedido con pago contraentrega
                </label>
                <button type="button" className="rounded-2xl bg-gray-900 text-white font-semibold px-5 py-3 hover:opacity-95">
                  Enviar (demo)
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
